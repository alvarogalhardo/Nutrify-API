import { invalidCredentialsError } from "../errors/invalid-credentials-error";
import { conflictError } from "../errors/conflict-error";
import sessionRepository from "../repositories/session-repository";
import userRepository from "../repositories/user-repository";
import { exclude } from "../utils";
import { User } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { log } from "console";

async function signIn(params: SignInParams): Promise<SignInResult> {
    const { email, password } = params;
    const user = await getUser(email);
    await validatePasswordOrFail(password, user.password);
    const oldToken = await sessionCreated(user.id)
    if (oldToken) {
        return {
            user: exclude(user, "password"),
            token: oldToken,
        }
    } else {
        const token = await createSession(user.id);
        return {
            user: exclude(user, "password"),
            token,
        }
    }
    ;
}

async function signUp(params: SignUpParams): Promise<User> {
    const { email, password, name } = params;
    const user = { email, password, name };
    const userExists = await userRepository.findByEmail(email)
    if (userExists) throw conflictError();
    user.password = await encryptPassword(password);
    const newUser = await userRepository.create(user);
    return newUser
}

async function encryptPassword(password: string) {
    return bcrypt.hashSync(password, 10);
}


async function getUser(email: string): Promise<GetUserOrFailResult> {
    const user = await userRepository.findByEmail(email, { id: true, email: true, password: true });
    if (!user) throw invalidCredentialsError();
    return user;
}

async function sessionCreated(id: number) {
    const session = await sessionRepository.find(id)
    if (session) {
        return session.token
    } else {
        return false
    }
}

async function createSession(userId: number) {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET);
    await sessionRepository.create({
        token,
        userId,
    });

    return token;
}

async function validatePasswordOrFail(password: string, userPassword: string) {
    const isPasswordValid = await bcrypt.compare(password, userPassword);
    if (!isPasswordValid) throw invalidCredentialsError();
}


export type SignInResult = {
    user: Pick<User, "id" | "email">;
    token: string;
};


type GetUserOrFailResult = Pick<User, "id" | "email" | "password">;

export const authenticationService = {
    signIn,
    signUp
};

export type SignInParams = Pick<User, "email" | "password">

export type SignUpParams = Pick<User, "name" | "email" | "password">
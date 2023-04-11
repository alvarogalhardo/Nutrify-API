import { authenticationService, SignInParams, SignUpParams } from "@/services/auth-service";
import { Request, Response } from "express";
import httpStatus from "http-status";

export async function singIn(req: Request, res: Response) {
    const { email, password } = req.body as SignInParams;
    try {
        const result = await authenticationService.signIn({ email, password });
        return res.status(httpStatus.OK).send(result);
    } catch (error) {
        return res.sendStatus(httpStatus.UNAUTHORIZED);
    }
}

export async function signUp(req: Request, res: Response) {
    const { email, password, name } = req.body as SignUpParams;
    try {
        const user = await authenticationService.signUp({ email, password, name })
        return res.status(httpStatus.CREATED).send({ id: user.id, email: user.email })
    } catch (error) {
        if (error.name === "Conflict") return res.sendStatus(httpStatus.CONFLICT);
        return res.sendStatus(httpStatus.BAD_REQUEST);
    }
}





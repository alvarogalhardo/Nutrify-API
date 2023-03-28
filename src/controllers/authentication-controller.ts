import { authenticationService, SignInParams } from "@/services/auth-service";
import { Request, Response } from "express";
import httpStatus from "http-status";

async function singIn(req: Request, res: Response) {
    const { email, password } = req.body as SignInParams;
    try {
        const result = await authenticationService.signIn({ email, password });
        return res.status(httpStatus.OK).send(result);
    } catch (error) {
        console.error(error)
        return res.sendStatus(httpStatus.UNAUTHORIZED);
    }
}

async function signUp(req: Request, res: Response) {
    const { email, password } = req.body as SignInParams;
    try {
        await authenticationService.signUp({ email, password })
        return res.sendStatus(httpStatus.CREATED)
    } catch (error) {
        if(error.name === "Conflict") return res.sendStatus(httpStatus.CONFLICT);
        return res.sendStatus(httpStatus.BAD_REQUEST)
    }
}

const authControllers = {
    singIn,
    signUp
}
export default authControllers


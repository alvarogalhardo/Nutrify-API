import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import * as jwt from "jsonwebtoken";
import { prisma } from "../config/database";
import { AuthenticatedRequest } from "../protocols";

export async function authenticateToken(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    const authHeader = req.header("Authorization");
    if (!authHeader) return res.sendStatus(httpStatus.UNAUTHORIZED);
    const token = authHeader.split(" ")[1];
    if (!token) return res.sendStatus(httpStatus.UNAUTHORIZED);
    try {
        const { userId } = jwt.verify(token, process.env.JWT_SECRET) as JWTPayload;
        const session = await prisma.session.findFirst({
            where: {
                token,
            },
        });
        if (!session) return res.sendStatus(httpStatus.UNAUTHORIZED);
        req.userId = userId;
        next();
    } catch (err) {
        console.log(err);
        
        return res.sendStatus(httpStatus.UNAUTHORIZED);
    }
}



type JWTPayload = {
    userId: number
}

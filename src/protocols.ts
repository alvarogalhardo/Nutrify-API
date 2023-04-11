import { Request } from "express";
import { JwtPayload } from "jsonwebtoken";

export type ApplicationError = {
    name: string;
    message: string;
};

export type AuthenticatedRequest = Request & JwtPayload;
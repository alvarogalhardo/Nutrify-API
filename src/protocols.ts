import { Request } from "express";

export type ApplicationError = {
    name: string;
    message: string;
};

export interface AuthenticatedRequest extends Request {
    userId: number
}

import { BodyCircumference, BoneDiameter, PhysicalAssessment, SkinFolds } from "@prisma/client";
import { Request } from "express";
import { JwtPayload } from "jsonwebtoken";

export type ApplicationError = {
    name: string;
    message: string;
};

export interface AuthenticatedRequest extends Request {
    userId: number
}

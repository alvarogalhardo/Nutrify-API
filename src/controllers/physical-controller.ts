import { AuthenticatedRequest } from "../protocols";
import physicalService from "../services/physical-service";
import { BodyCircumference, BoneDiameter, PhysicalAssessment, SkinFolds } from "@prisma/client";
import { Response } from "express";
import httpStatus from "http-status";

export async function postPhysicalAssessment(req: AuthenticatedRequest, res: Response) {
    const data = req.body as PhysicalAssessment
    try {
        const result = await physicalService.postPhysical(data)
        return res.status(httpStatus.CREATED).send(result)
    } catch (err) {
        console.log(err);

        return res.sendStatus(httpStatus.BAD_REQUEST)
    }
}

export async function postSkinFolds(req: AuthenticatedRequest, res: Response) {
    const data = req.body as SkinFolds
    const { physicalId } = req.query as PhysicalIDQuery
    try {
        const result = await physicalService.postSkinFolds(data, parseInt(physicalId))
        return res.status(httpStatus.CREATED).send(result)
    } catch (err) {
        console.log(err);
        return res.sendStatus(httpStatus.BAD_REQUEST)
    }
}

export async function postBoneDiameter(req: AuthenticatedRequest, res: Response) {
    const data = req.body as BoneDiameter;
    const { physicalId } = req.query as PhysicalIDQuery

    try {
        const result = await physicalService.postBoneDiameter(data, parseInt(physicalId))
        return res.status(httpStatus.CREATED).send(result)
    } catch (err) {
        console.log(err);
        return res.sendStatus(httpStatus.BAD_REQUEST)
    }
}

export async function postBodyCircumference(req: AuthenticatedRequest, res: Response) {
    const data = req.body as BodyCircumference;
    const { physicalId } = req.query as PhysicalIDQuery
    try {
        const result = await physicalService.postBodyCircumference(data, parseInt(physicalId))
        return res.status(httpStatus.CREATED).send(result)
    } catch (err) {
        console.log(err);
        return res.sendStatus(httpStatus.BAD_REQUEST)
    }
}

type PhysicalIDQuery = {
    physicalId: string
}
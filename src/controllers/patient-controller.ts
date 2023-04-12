import { AuthenticatedRequest } from "@/protocols";
import patientService from "@/services/patient-service";
import { Patient } from "@prisma/client";
import { Response } from "express";
import httpStatus from "http-status";

export async function postPatient(req: AuthenticatedRequest, res: Response) {
    const { email } = req.body as Patient;
    const { userId } = req;
    try {
        await patientService.validatePatient(email);
        await patientService.postNewPatient(req.body, userId);
        return res.sendStatus(httpStatus.CREATED)
    } catch (err) {
        console.error(err)
        if (err.name === 'Conflict') return res.sendStatus(httpStatus.CONFLICT);
        return res.sendStatus(httpStatus.BAD_REQUEST)
    }
}

export async function getPatients(req: AuthenticatedRequest, res: Response) {
    const { userId } = req
    try {
        const patients = await patientService.getAllPatients(userId)
        if (patients.length === 0) return res.sendStatus(httpStatus.NO_CONTENT);
        return res.status(httpStatus.OK).send(patients)
    } catch (err) {
        return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR)
    }
}
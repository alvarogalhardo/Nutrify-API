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
        if (err.name === 'Conflict') return res.sendStatus(httpStatus.UNAUTHORIZED);
        return res.sendStatus(httpStatus.BAD_REQUEST)
    }
}
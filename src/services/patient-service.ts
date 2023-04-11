import { conflictError } from "@/errors/conflict-error";
import patientRepository from "@/repositories/patient-repository";
import { Patient } from "@prisma/client";

async function validatePatient(email: string) {
    const exists = await patientRepository.checkNewPatient(email)
    if (exists) throw conflictError();
}

async function postNewPatient(body: Patient, userId: number) {
    const data = { ...body, userId };
    const newPatient = await patientRepository.postPatient(data);
    return newPatient
}

const patientService = {
    validatePatient,
    postNewPatient
}
export default patientService
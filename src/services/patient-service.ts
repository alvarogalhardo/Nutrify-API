import { notFoundError } from "@/errors";
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

async function getAllPatients(userId: number) {
    const patients = await patientRepository.getPatients(userId);
    console.log(patients);

    return patients;
}

async function getPatient(id: number) {
    const patient = await patientRepository.getPatient(id);
    if (!patient) throw notFoundError()
    return patient
}

const patientService = {
    validatePatient,
    postNewPatient,
    getAllPatients,
    getPatient
}
export default patientService
import { conflictError } from "@/errors/conflict-error";
import patientRepository from "@/repositories/patient-repository";
import { Patient } from "@prisma/client";

async function validatePatient(email: string) {
    try {
        const exists = await patientRepository.checkNewPatient(email)
        if (exists) throw conflictError();
    } catch (err) {
        console.error(err)
    }
}

async function postNewPatient(data:Patient){
    const newPatient = await patientRepository.postPatient(data);
    return newPatient
}

const patientService = {
    validatePatient,
    postNewPatient
}
export default patientService
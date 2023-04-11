import { prisma } from "@/config";
import { Patient } from "@prisma/client";

 async function checkNewPatient(email: string) {
    return prisma.patient.findUnique({
        where: {
            email
        }
    })
}

async function postPatient(data:Patient){
    return prisma.patient.create({
        data
    })
}

const patientRepository = {
    checkNewPatient,
    postPatient
}

export default patientRepository
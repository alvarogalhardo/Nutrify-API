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

async function findUser(userId:number) {
    return prisma.user.findUnique({
        where: {
            id:userId
        }
    })
}

const patientRepository = {
    checkNewPatient,
    postPatient,
    findUser
}

export default patientRepository
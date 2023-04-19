import { prisma } from "../config/database";
import { Patient } from "@prisma/client";

async function checkNewPatient(email: string) {
    return prisma.patient.findUnique({
        where: {
            email
        }
    })
}

async function postPatient(data: Patient) {
    return prisma.patient.create({
        data
    })
}

async function findUser(userId: number) {
    return prisma.user.findUnique({
        where: {
            id: userId
        }
    })
}

async function getPatients(userId: number) {
    return prisma.patient.findMany({
        where: {
            userId
        }
    })
}

async function getPatient(id: number) {
    return prisma.patient.findUnique({
        where: {
            id
        }
    })
}

async function deletePatient(id: number) {
    return prisma.patient.delete({
        where: {
            id
        }
    })
}

const patientRepository = {
    checkNewPatient,
    postPatient,
    findUser,
    getPatients,
    getPatient,
    deletePatient
}

export default patientRepository
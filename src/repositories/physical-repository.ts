import { prisma } from "../config/database";
import { BodyCircumference, BoneDiameter, PhysicalAssessment, SkinFolds } from "@prisma/client";

async function postPhysicalAssessment(data: PhysicalAssessment) {
    return prisma.physicalAssessment.create({
        data
    })
}

async function postSkinFolds(data: SkinFolds, physicalAssessmentId: number) {
    return prisma.skinFolds.create({
        data: {
            ...data, physicalAssessmentId
        }
    })
}
async function postBodyCircumference(data: BodyCircumference, physicalAssessmentId: number) {
    return prisma.bodyCircumference.create({
        data: {
            ...data, physicalAssessmentId
        }
    })
}
async function postBoneDiameter(data: BoneDiameter, physicalAssessmentId: number) {
    return prisma.boneDiameter.create({
        data: {
            ...data, physicalAssessmentId
        }
    })
}
async function getPhysicalAssesssments(patientId: number) {
    return prisma.physicalAssessment.findMany({
        where: {
            patientId
        }
    })
}

async function getPhysicalDetails(physicalId: number) {
    return prisma.physicalAssessment.findUnique({
        where: { id: physicalId },
        include: {
            'SkinFolds': true,
            'BoneDiameter': true,
            'BodyCircumference': true
        }
    })
}


const physicalRepository = {
    postPhysicalAssessment,
    postBodyCircumference,
    postSkinFolds,
    postBoneDiameter,
    getPhysicalAssesssments,
    getPhysicalDetails
}
export default physicalRepository
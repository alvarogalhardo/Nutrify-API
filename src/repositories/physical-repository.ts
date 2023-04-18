import { prisma } from "@/config";
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


const physicalRepository = {
    postPhysicalAssessment,
    postBodyCircumference,
    postSkinFolds,
    postBoneDiameter
}
export default physicalRepository
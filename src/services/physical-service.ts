import physicalRepository from "../repositories/physical-repository"

import { BodyCircumference, BoneDiameter, PhysicalAssessment, SkinFolds } from "@prisma/client"

async function postPhysical(data: PhysicalAssessment) {
    const result = await physicalRepository.postPhysicalAssessment(data)
    return result
}
async function postSkinFolds(data: SkinFolds,physicalId:number) {
    const result = await physicalRepository.postSkinFolds(data,physicalId)
    return result
}
async function postBodyCircumference(data: BodyCircumference,physicalId:number) {
    const result = await physicalRepository.postBodyCircumference(data,physicalId)
    return result
}
async function postBoneDiameter(data: BoneDiameter,physicalId:number) {
    const result = await physicalRepository.postBoneDiameter(data,physicalId)
    return result
}
async function getAssessments(patientId:number){
    const result = await physicalRepository.getPhysicalAssesssments(patientId)
    return result
}

async function getPhysicalDetails(physicalId:number){
    const result = await physicalRepository.getPhysicalDetails(physicalId);
    return result
}

const physicalService = {
    postPhysical,
    postBodyCircumference,
    postSkinFolds,
    postBoneDiameter,
    getAssessments,
    getPhysicalDetails
}

export default physicalService
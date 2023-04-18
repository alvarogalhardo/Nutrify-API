import Joi from "joi";

const boneDiameterSchema = Joi.object({
    humerus: Joi.number().required(),
    wrist: Joi.number().required(),
    femur: Joi.number().required(),
})

export default boneDiameterSchema
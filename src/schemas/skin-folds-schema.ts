import Joi from "joi";

const skinFoldsSchema = Joi.object({
    triceps: Joi.number().required(),
    biceps: Joi.number().required(),
    abdominal: Joi.number().required(),
    subscapular: Joi.number().required(),
    midAxillary: Joi.number().required(),
    thigh: Joi.number().required(),
    thoracic: Joi.number().required(),
    calf: Joi.number().required(),
    waist: Joi.number().required(),
    hip: Joi.number().required(),
    suprailiac: Joi.number().required(),
    supraspinatus: Joi.number().required(),
})

export default skinFoldsSchema
import Joi from "joi";

const bodyCircumferenceSchema = Joi.object({
    neckCircumference: Joi.number().required(),
    chestCircumference: Joi.number().required(),
    shoulderCircumference: Joi.number().required(),
    waistCircumference: Joi.number().required(),
    hipCircumference: Joi.number().required(),
    abdomenCircumference: Joi.number().required(),
    relaxed_right_armCircumference: Joi.number().required(),
    contracted_right_armCircumference: Joi.number().required(),
    relaxed_left_armCircumference: Joi.number().required(),
    contracted_left_armCircumference: Joi.number().required(),
    forearmCircumference: Joi.number().required(),
    thighCircumference: Joi.number().required(),
    calfCircumference: Joi.number().required(),
})

export default bodyCircumferenceSchema
import Joi, { ObjectSchema } from "joi";

const physicalSchema: ObjectSchema = Joi.object({
    weight: Joi.number().required(),
    height: Joi.number().required(),
    kneeHeight: Joi.number().required(),
    sittingHeight: Joi.number().required(),
    patientId: Joi.number().required()

});

export default physicalSchema
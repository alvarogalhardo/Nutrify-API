import Joi, { ObjectSchema } from "joi";

const patientSchema: ObjectSchema = Joi.object({
    name: Joi.string().required(),
    telephone: Joi.string().required().max(13),
    email: Joi.string().email().required(),
    birthday: Joi.date().required(),
    gender: Joi.valid("MALE", "FEMALE").required()
});

export default patientSchema
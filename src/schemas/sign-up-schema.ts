import Joi, { ObjectSchema } from "joi";

const signUpSchema: ObjectSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    role: Joi.valid(0, 1)
});

export default signUpSchema
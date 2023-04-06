import Joi, { ObjectSchema } from "joi";

const signInSchema: ObjectSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
});

export default signInSchema
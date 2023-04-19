import { signUp, singIn } from "../controllers/authentication-controller";
import { validateBody } from "../middlewares/validate-body";
import signInSchema from "../schemas/sign-in-schema";
import signUpSchema from "../schemas/sign-up-schema";
import { Router } from "express";

const authRouter = Router();

authRouter.post("/sign-in", validateBody(signInSchema), singIn);
authRouter.post("/sign-up", validateBody(signUpSchema), signUp);

export default authRouter;
import authControllers from "@/controllers/authentication-controller";
import { validateBody } from "@/middlewares/validate-body";
import signInSchema from "@/schemas/sign-in-schema";
import { Router } from "express";
const authRouter = Router();

authRouter.post("/sign-in", validateBody(signInSchema), authControllers.singIn);
authRouter.post("/sign-up", validateBody(signInSchema), authControllers.signUp)

export default authRouter;
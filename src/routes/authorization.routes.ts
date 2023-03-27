import { validateBody } from "@/middlewares/validate-body";
import signInSchema from "@/schemas/sign-in-schema";
import { Router } from "express";

const authRouter = Router();

authRouter.post("/sign-in",validateBody(signInSchema))

export default authRouter;
import "express-async-errors";
import express, { Express } from "express";
import cors from "cors";
import { loadEnv, connectDb, disconnectDB } from "@/config";

loadEnv();

import { handleApplicationErrors } from "@/middlewares";
import authRouter from "@/routes/authorization.routes";
import patientRouter from "./routes/patient.routes";

const app = express();
app
    .use(cors())
    .use(express.json())
    .get("/health", (_req, res) => res.send("OK!"))
    .use(authRouter)
    .use(patientRouter)
    .use(handleApplicationErrors)

export function init(): Promise<Express> {
    connectDb();
    return Promise.resolve(app);
}

export async function close(): Promise<void> {
    await disconnectDB();
}


export default app;
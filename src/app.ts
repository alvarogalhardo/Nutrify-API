import "express-async-errors";
import express, { Express } from "express";
import cors from "cors";
import { connectDb, disconnectDB } from "./config/database";
import { loadEnv } from "./config/envs";

loadEnv();

import authRouter from "./routes/authorization.routes";
import patientRouter from "./routes/patient.routes";
import physicalRouter from "./routes/physical-assessment.routes";

const app = express();
app
    .use(cors())
    .use(express.json())
    .get("/health", (_req, res) => res.send("OK!"))
    .use(authRouter)
    .use(patientRouter)
    .use(physicalRouter)

export function init(): Promise<Express> {
    connectDb();
    return Promise.resolve(app);
}

export async function close(): Promise<void> {
    await disconnectDB();
}


export default app;
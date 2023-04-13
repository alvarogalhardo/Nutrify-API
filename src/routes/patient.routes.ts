import { deletePatientById, getPatientById, getPatients, postPatient } from "@/controllers/patient-controller";
import { validateBody } from "@/middlewares";
import { authenticateToken } from "@/middlewares/authentication";
import patientSchema from "@/schemas/patient-schema";
import { Router } from "express";

const patientRouter = Router();

patientRouter
    .all("/*", authenticateToken)
    .post("/patients", validateBody(patientSchema), postPatient)
    .get("/patients", getPatients)
    .get("/patients/:id", getPatientById)
    .delete("/patients/:id", deletePatientById)

export default patientRouter
import { postBodyCircumference, postBoneDiameter, postPhysicalAssessment, postSkinFolds } from "../controllers/physical-controller";
import { validateBody } from "../middlewares/validate-body";
import { authenticateToken } from "../middlewares/authentication";
import bodyCircumferenceSchema from "../schemas/body-circumference-schema";
import boneDiameterSchema from "../schemas/bone-diameter-schema";
import physicalSchema from "../schemas/physical-assessment-schema";
import skinFoldsSchema from "../schemas/skin-folds-schema";
import { Router } from "express";

const physicalRouter = Router();

physicalRouter
    .all("/*", authenticateToken)
    .post("/physical/skin-folds", validateBody(skinFoldsSchema), postSkinFolds)
    .post("/physical/body-circumference", validateBody(bodyCircumferenceSchema), postBodyCircumference)
    .post("/physical/bone-diameter", validateBody(boneDiameterSchema), postBoneDiameter)
    .post("/physical", validateBody(physicalSchema), postPhysicalAssessment)

export default physicalRouter;
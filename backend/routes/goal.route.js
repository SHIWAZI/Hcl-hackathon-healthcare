import express from "express";
import { assignGoal } from "../controller/goal.controller.js";
import { assaingGoalParamValidation, assaingGoalValidation } from "../validation/goal.validation.js";

const goalRouter = express.Router();

goalRouter.post('/assaign/:patientId', [assaingGoalParamValidation, assaingGoalValidation], assignGoal);

export default goalRouter;
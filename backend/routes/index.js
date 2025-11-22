import express from "express";

import goalRouter from "./goal.route.js";

const router = express.Router();

router.use('/api/v1/goals', [], goalRouter);


export default router;
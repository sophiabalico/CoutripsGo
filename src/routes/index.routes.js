import express from "express";

import countryRouter from "./countryRoutes.js";
import curiosityRouter from "./curiosityRoutes.js";

const router = express.Router();

router.use("/country", countryRouter);
router.use("/curiosidades", curiosityRouter);

export default router;
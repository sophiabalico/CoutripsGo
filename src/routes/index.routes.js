import express from "express";

import countryRouter from "./countryRoutes.js";
import curiosityRouter from "./curiosityRoutes.js";
import touristRouter from "./touristSpotRoutes.js";

const router = express.Router();

router.use("/country", countryRouter);
router.use("/curiosidades", curiosityRouter);
router.use("/turismos", touristRouter);

export default router;
import express from "express";

import countryRouter from "./countryRoutes.js";

const router = express.Router();

router.use("/country", countryRouter);

export default router;
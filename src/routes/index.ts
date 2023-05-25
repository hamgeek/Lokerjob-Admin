import express from "express";
import apiV1 from "./api/v1";
import Syncdb from "../database/sync";
import checkLoggedUrl from "../middleware";
const router = express.Router();

router.get("/syncdb", (req, res) => {
  Syncdb(res);
});

router.use(checkLoggedUrl);
router.use("/api/v1", apiV1);

export default router;

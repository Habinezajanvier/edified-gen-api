import express from "express";
import essay from "./essays";
import image from "./image";
import login from "./login";
import message from "./message";
import projects from "./projects";

const router = express.Router();

router.use("/essays", essay);
router.use("/images", image);
router.use("/", login);
router.use("/messages", message);
router.use("/projects", projects);

export default router;

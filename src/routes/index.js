import express from "express";
import essay from "./essays";
import image from "./image";
import login from "./login";
import message from "./message";
import projects from "./projects";
import events from "./event";
import partners from './partners';

const router = express.Router();

router.use("/essays", essay);
router.use("/images", image);
router.use("/", login);
router.use("/messages", message);
router.use("/projects", projects);
router.use("/events", events);
router.use("/partners", partners)


export default router;

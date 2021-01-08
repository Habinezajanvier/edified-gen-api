import { Router } from "express";
import asyncHandler from "../middlewares/asyncHandler";
import eventController from "../controllers/event";
import { auth, adminAuth } from "../middlewares/authorization";
import { getSignedUrl } from "../controllers/files";
import { eventUpdateValidation, eventValidation } from "../middlewares/validation";


const eventRouter = new Router();

eventRouter
    .post("/", [auth, adminAuth], eventValidation, asyncHandler(eventController.postEvent))
    .get("/signedUrl", [auth, adminAuth], asyncHandler(getSignedUrl))
    .get("/", asyncHandler(eventController.getEvents))
    .get("/:id", asyncHandler(eventController.getEvent))
    .delete("/:id", [auth, adminAuth], asyncHandler(eventController.deleteEvent))
    .put("/:id", [auth, adminAuth], eventUpdateValidation, asyncHandler(eventController.updateEvent))

export default eventRouter;

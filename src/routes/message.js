import { Router } from "express";
import messageController from "../controllers/messages";
import asyncHandler from "../middlewares/asyncHandler";
import { messageValidation } from "../middlewares/validation";
import { auth, adminAuth } from "../middlewares/authorization";

const messageRouter = new Router();

messageRouter
  .post("/", messageValidation, asyncHandler(messageController.sendMessage))
  .get("/", [auth, adminAuth], asyncHandler(messageController.getMessage))
  .delete("/:id", [auth, adminAuth], asyncHandler(messageController.deleteMessage));

export default messageRouter;

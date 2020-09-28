import { Router } from "express";
import asyncHandler from "../middlewares/asyncHandler";
import imgController from "../controllers/image";
import { auth, adminAuth } from "../middlewares/authorization";

const imageRouter = new Router();

imageRouter
  .post("/", [auth, adminAuth], asyncHandler(imgController.addImage))
  .get("/", [auth, adminAuth], asyncHandler(imgController.getImage))
  .delete("/:id", [auth, adminAuth], asyncHandler(imgController.deleteImage));

export default imageRouter;

import { Router } from "express";
import asyncHandler from "../middlewares/asyncHandler";
import projectController from "../controllers/projects";
import { auth, adminAuth } from "../middlewares/authorization";

const projectRouter = new Router();

projectRouter
  .post("/", [auth, adminAuth], asyncHandler(projectController.postProject))
  .get("/signedUrl", [auth, adminAuth], asyncHandler(projectController.getSignedUrl))
  .get("/", [auth, adminAuth], asyncHandler(projectController.getProjects))
  .delete("/:id", [auth, adminAuth], asyncHandler(projectController.deleteProject))
  .put("/:id", [auth, adminAuth], asyncHandler(projectController.updateProject));

export default projectRouter;

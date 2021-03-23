import { Router } from "express";
import asyncHandler from "../middlewares/asyncHandler";
import projectController from "../controllers/projects";
import { auth, adminAuth } from "../middlewares/authorization";
import { projectValidation } from "../middlewares/validation";
import { getSignedUrl } from "../controllers/files";

const projectRouter = new Router();

projectRouter
  .post(
    "/",
    [auth, adminAuth],
    projectValidation,
    asyncHandler(projectController.postProject)
  )
  .get("/signedUrl", [auth, adminAuth], asyncHandler(getSignedUrl))
  .get("/", asyncHandler(projectController.getProjects))
  .delete("/:id", [auth, adminAuth], asyncHandler(projectController.deleteProject))
  .put("/:id", [auth, adminAuth], asyncHandler(projectController.updateProject));

export default projectRouter;

import { Router } from "express";
import asyncHandler from "../middlewares/asyncHandler";
import essayController from "../controllers/essays";
import { essayValidation } from "../middlewares/validation";

const router = new Router();

router
  .post("/", essayValidation, asyncHandler(essayController.recordEssay))
  .get("/", asyncHandler(essayController.getEssays))
  .get("/:id", asyncHandler(essayController.getSingleEssay))
  .delete("/:id", asyncHandler(essayController.deleteEssay));

export default router;

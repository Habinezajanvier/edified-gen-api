import { Router } from "express";
import asyncHandler from "./middlewares/asyncHandler";
import essayController from "./controllers/essays";
import essayValidation from "./middlewares/validation";

const router = new Router();

router
  .post("/essay", essayValidation, asyncHandler(essayController.recordEssay))
  .get("/essays", asyncHandler(essayController.getEssays))
  .get("/essays/:id", asyncHandler(essayController.getSingleEssay))
  .delete("/essays/:id", asyncHandler(essayController.deleteEssay));

export default router;

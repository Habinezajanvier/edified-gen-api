import { Router } from "express";
import loginController from "../controllers/login";
import asyncHandler from "../middlewares/asyncHandler";

const loginRoute = new Router();

loginRoute.post("/auth/login", asyncHandler(loginController));

export default loginRoute;

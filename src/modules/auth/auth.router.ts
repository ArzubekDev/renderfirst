import { Router } from "express";
import authController from "./auth.controller.js";

const router: Router = Router()
router.get("/get-users", authController.postUsers)

export default router
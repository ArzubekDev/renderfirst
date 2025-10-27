import { Router } from "express";
import authController from "./auth.controller.js";

const router: Router = Router()
router.get("/get-users", authController.getAllUsers)

export default router
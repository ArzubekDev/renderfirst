import { Router } from "express";
import todoController from "./todo.controller.js";

const router: Router = Router()
router.get("/get-all", todoController.getAllData)

export default router
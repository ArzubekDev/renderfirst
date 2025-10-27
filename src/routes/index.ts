import { Router } from "express";
import todoRouter from "../modules/todo/todo.router.js"

const globalRouter: Router = Router()
globalRouter.use("/todo", todoRouter)

export default globalRouter

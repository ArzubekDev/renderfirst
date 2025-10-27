import { Router } from "express";
import todoRouter from "../modules/todo/todo.router.js"
import authRouter from "../modules/auth/auth.router.js"
import cors from "cors"

const globalRouter: Router = Router()


const corsConfig = {
     origin: ["http:localhost:3000"]
}


globalRouter.use("/todo", todoRouter)
globalRouter.use("/auth", cors(corsConfig), authRouter)

export default globalRouter

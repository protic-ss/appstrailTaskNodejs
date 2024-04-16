import taskRouter from "./task.router.js"
import { Router } from "express"

const router = Router()

router.use("/task", taskRouter)


export default router
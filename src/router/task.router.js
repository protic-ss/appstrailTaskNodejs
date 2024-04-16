import { Router } from "express";
import { taskServices } from "../services/index.js";
const {addTask, deleteTask, getTaskById, getTasks, updateTask} = taskServices

const taskRouter = Router()

taskRouter.get("/getTaskById", getTaskById)
taskRouter.get("/getTasks", getTasks)
taskRouter.post("/addTask", addTask)
taskRouter.put("/updateTask", updateTask)
taskRouter.delete("/deleteTask", deleteTask)


export default taskRouter
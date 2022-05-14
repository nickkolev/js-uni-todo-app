import {Router} from "express";
import {createTask, deleteTask, getAllTasks, getAllTasksForUser, updateTask} from "../controllers/TaskController";

export const taskRoutes = Router();
taskRoutes.get("/tasks", getAllTasks);
taskRoutes.get("/tasks/:userId", getAllTasksForUser);
taskRoutes.post("/tasks", createTask);
taskRoutes.delete("/user/:id", deleteTask);
taskRoutes.put("/tasks/:id", updateTask);
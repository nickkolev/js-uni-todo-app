import {Request, Response} from "express";
import { Task } from "../Types/Task";
import { TaskModel } from "../Models/TaskModel";
import { CreateTaskInput } from "../Types/CreateTaskInput";
import { UpdateTaskData } from "../Types/UpdateTaskData";

import { User } from "../Types/User";
import {UserModel} from "../models/userModel";

export const getUsers = async (req: Request, res: Response) => {
    let users: User[] = await new UserModel().getUsers();

    try {
        res.send(users);
    } catch (e) {
        res.status(403).send({
            message: "No users found."
        })
    }
}

export const getAllTasks = async (req: Request, res: Response) => {
    let tasks: Task[] = await new TaskModel().getAllTasks();

    try {
        res.send(tasks);
    } catch (e) {
        res.status(403).send({
            message: "No tasks found."
        })
    }
}

export const getAllTasksForUser = async (req: Request, res:Response) => {
    const id = Number(req.params.userId);
    let tasks: Task[] = await new TaskModel().getAllTasksForUser(id);

    try {
        res.send(tasks);
    } catch (e) {
        res.status(403).send({
            message: "No tasks found for this user."
        })
    }
}


export const createTask = async (req: Request, res: Response) => {
    let taskData: CreateTaskInput = req.body;
    const taskModel = new TaskModel;

    if(!taskData.title) {
        return res.send({
            status: 400,
            message: "Title not provided"
        })
    }
    
    await taskModel.createTask(taskData);
    res.send(taskData);
    
}

export const updateTask = async (req: Request, res:Response) => {
    try {
        const id = Number(req.params.id);
        let updateTaskData: UpdateTaskData = req.body;

        await new TaskModel().updateTask(id, updateTaskData);
        
        res.send({
            status: 200,
            message: `Task with id ${id} was updated successfully.`
        });
    } catch (e) {
        res.send(e)
    }
}

export const deleteTask = async (req: Request, res:Response) => {
    const id = Number(req.params.id);
    try {
        await new TaskModel().deleteTask(id);
        res.send({
            status: 200,
            message: `Task with id ${id} was deletede successfully.`
        })
    } catch (e) {
        res.send({
            statis:403,
            message: `Failed to delete task with id: ${id}.`
        })
    }
}
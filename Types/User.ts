import { Task } from "./Task"

export type User = {
    id: number,
    email: string,
    password: string,
    firstName?: string,
    lastName?: string,
    role?: string,
    country?: string,
    finsihedTasks?: Array<Task>
}
import { User } from "./User"

export type CreateTaskInput = {
    title: string,
    description: string,
    priority: string,
    creator?: User,
    dateOfCreation?: Date,
    dateOfCompletition?: Date,
    userId?: number
}
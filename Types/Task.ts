import { User } from "./User"

export type Task = {
    id: number,
    title: string,
    description?: string,
    priority?: string,
    creator?: User,
    dateOfCreation?: Date,
    dateOfCompletition?: Date
}
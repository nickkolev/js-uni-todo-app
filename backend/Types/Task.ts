import { User } from "../Types/User";

export type Task = {
    id: number,
    title: string,
    description?: string,
    priority?: string,
    creator?: User,
    dateOfCreation?: Date,
    dateOfCompletition?: Date
}
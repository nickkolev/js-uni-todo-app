import {Request, Response} from "express";
import { User } from "../Types/User";
import {LoginRequest} from "../Types/LoginRequest";
import {UserModel} from "../models/userModel";
import { UserDataInput } from "../Types/UserDataInput";
import { UpdateUserData } from "../Types/UpdateUserData";

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

export const createUser = async (req: Request, res: Response) => {
    let userData: UserDataInput = req.body;
    const userModel = new UserModel();
    const id = await userModel.getNewId();

    // TO DO: 
    // Check if the email is already in use
    // If so, send status 400 with message: There is already user with this email.

    if(!userData.email) {
        return res.send({
            status: 400,
            message: "Email not provided"
        })
    }

    if(!userData.password) {
        return res.send({
            status: 400,
            message: "Password not provided"
        })
    }

    
    await userModel.createUser(userData)
    res.send(userData);
}

export const login = (req: Request, res:Response) => {
    const loginRequest: LoginRequest = req.query;

    if (!loginRequest.username || !loginRequest.password) {
        res.send({
            status: 400,
            message: "Username or Password has not been provided"
        })
    } else {
        res.send({
            status: 200,
            message: "Logged in successfully"
        })
    }
}

export const updateUser = async (req: Request, res:Response) => {
    try {
        const id = Number(req.params.id);
        let updateUserData: UpdateUserData = req.body;
        await new UserModel().updateUser(id, updateUserData);

        res.send({
            status: 200,
            message: `User with id ${id} was updated successfully.`
        });
    } catch (e) {
        res.send({
            status:403,
            message: "Error! User was not updated."
        })
    }
}

export const deleteUser = async (req: Request, res:Response) => {
    const id = Number(req.params.id);
    try {
        await new UserModel().deleteUser(id);
        res.send( {
            status: 200,
            message: `User with id ${id} was deletede successfully.`
        })
    } catch (e) {
        res.send({
            statis:403,
            message: `Failed to delete user with id: ${id}.`
        })
    }
}
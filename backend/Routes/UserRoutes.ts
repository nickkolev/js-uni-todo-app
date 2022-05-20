import {Router} from "express";
import {getUsers, login, createUser, updateUser, deleteUser} from "../controllers/userController";

export const userRoutes = Router();
userRoutes.get("/users", getUsers);
userRoutes.get("/login", login);
userRoutes.post("/user", createUser);
userRoutes.put("/user/:id", updateUser);
userRoutes.delete("/user/:id", deleteUser);

import {Router} from "express";
import {getUsers, login, createUser} from "../controllers/userController";

export const userRoutes = Router();
userRoutes.get("/users", getUsers);
userRoutes.get("/login", login);
userRoutes.post("/user", createUser);


import express = require("express")
import {Application, json} from "express";
import {userRoutes} from "./routes/userRoutes";
import {taskRoutes} from "./routes/taskRoutes";

const app: Application = express();

app.use(json());
//app.use('/', require('./routes/index'));
app.use("/", userRoutes);
app.use("/", taskRoutes);

app.listen(8082, () => {
    console.log("Rabotish li e")
})
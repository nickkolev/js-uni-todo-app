import { CreateTaskInput } from "../Types/CreateTaskInput";
import { UpdateTaskData } from "../Types/UpdateTaskData";

const mysql = require("mysql2");

export class TaskModel{
 // connection to database
 private conn;

 constructor() {
     // create the pool
     // pool -> many connections    |    comm -> single connection
     const pool = mysql.createPool({host:'localhost', user:'root', database:'group_project'});
     // get a promise wrapped instance of that pool
     this.conn = pool.promise();
 }

    async getUsers() {
        const [rows] = await this.conn.query("SELECT * FROM `users`");
        return rows;
    }

    async getAllTasks() {
        const [rows] = await this.conn.query("SELECT * FROM `tasks`");
        return rows;
    }

    async getAllTasksForUser(userId: number) {
        const [rows] = await this.conn.query("SELECT * FROM `tasks` WHERE user_id = ?", [userId]);
        return [rows];
    }

    async createTask(createTaskInput: CreateTaskInput):Promise<boolean> {
        const insertDataObject = [
            createTaskInput.title,
            (createTaskInput.description) ? createTaskInput.description : null,
            (createTaskInput.priority) ? createTaskInput.priority : null,
            (createTaskInput.creator) ? createTaskInput.creator : null
        ]

        await this.conn.execute(`INSERT INTO tasks (title, description, priority, creator) VALUES (?, ?, ?, ?)`, insertDataObject);
        return true;
    }

    async updateTask(id: number, updateTaskInput: UpdateTaskData): Promise<Boolean> {

        const updateTaskDataArray = Object.entries(updateTaskInput);
        let setStatement = "";
        let preparedStatementData = [];

        for (let i = 0; i < updateTaskDataArray.length; i++) {
            setStatement += `${updateTaskDataArray[i][0]} = ?`;
            setStatement += (i + 1 !== updateTaskDataArray.length) ? ", " : " ";
            preparedStatementData.push(updateTaskDataArray[i][1]);
        }

        preparedStatementData.push(id);

        await this.conn.execute(`UPDATE tasks SET ${setStatement} WHERE id = ?`, preparedStatementData)
        return true;
    }

    async deleteTask(id: number): Promise<boolean> {
        await this.conn.execute("DELETE FROM `tasks` WHERE id = ?", [id]);
        return true;
    }
}
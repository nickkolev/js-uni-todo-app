import { promises } from "fs";
import { UpdateUserData } from "../Types/UpdateUserData";
import { User } from "../Types/User";
import { UserDataInput } from "../Types/UserDataInput";
const mysql = require('mysql2');

export class UserModel{
    // connection to database
    private conn;

    constructor() {
        // create the pool
        // pool -> many connections    |    comm -> single connection
        const pool = mysql.createPool({host:'localhost', user:'root', database:'group_project'});
        // get a promise wrapped instance of that pool
        this.conn = pool.promise();
    }

    async getUsers():Promise<User[]> {
        const [rows] = await this.conn.query("SELECT * FROM users");
        return rows;
    }

    async createUser(userDataInput: UserDataInput):Promise<boolean> {
        const insertDataObject = [
            userDataInput.email,
            userDataInput.password,
            (userDataInput.first_name) ? userDataInput.first_name : null,
            (userDataInput.last_name) ? userDataInput.last_name : null,
            (userDataInput.country) ? userDataInput.country : null
        ]
        await this.conn.execute(`INSERT INTO users (email, password, first_name, last_name, country) VALUES (?, ?, ?, ?, ?)`, insertDataObject);
        return true;
    }

    async updateUser(id: number, updateUserData: UpdateUserData): Promise<boolean> {
        const updateUserDataArray = Object.entries(updateUserData);
        let setStatement = "";
        let preparedStatementData = [];
        for (let i = 0; i < updateUserDataArray.length; i++) {
            setStatement += `${updateUserDataArray[i][0]} = ?`;
            setStatement += (i + 1 !== updateUserDataArray.length) ? ", " : " ";
            preparedStatementData.push(updateUserDataArray[i][1]);
        }
        preparedStatementData.push(id);
        await this.conn.execute(`UPDATE users SET ${setStatement} WHERE id = ?`, [id])
        return true;
    }

    async deleteUser(id: number): Promise<boolean> {
        await this.conn.execute("DELETE FROM `users` WHERE id = ?", [id]);
        return true;
    }

    async getNewId():Promise<number> {
        const users = await this.getUsers();
        return users[users.length - 1].id + 1;
    }
}

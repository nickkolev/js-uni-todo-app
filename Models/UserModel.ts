import { promises } from "fs";
import {User} from "../types/User";

export class UserModel{
    async getUsers() {
        const users = await promises.readFile(__dirname + "/db.json","utf-8")
        return JSON.parse(users);
    }

    async getNewId():Promise<number> {
        const users = await this.getUsers();
        return users[users.length - 1].id + 1;
    }

    async updateUserList(user:User): Promise<boolean> {
        const users = await this.getUsers();
        users.push(user);
        await promises.writeFile(__dirname + "/db.json", JSON.stringify(users));
        return true;
    }
}

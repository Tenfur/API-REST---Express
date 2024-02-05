import sequelize from "../config/database/DatabaseConnection.js";
import {DataTypes} from "sequelize";

const UserModel = sequelize.define("User", {
    name: DataTypes.TEXT,
    age: DataTypes.INTEGER,
    email: DataTypes.TEXT,
    password: DataTypes.TEXT,
    },
    {
        schema: 'Test',
        createdAt: false,
        updatedAt: false
    }
);

export default UserModel
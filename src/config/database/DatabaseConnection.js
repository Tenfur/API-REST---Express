import {Sequelize} from "sequelize"
import dotenv from "dotenv"

dotenv.config()

const sequelize = new Sequelize(
        process.env.DATABASE,
        process.env.LOGIN,
        process.env.PASSWORD, {
            host:  process.env.SERVER,
                dialect: "mssql",
                dialectOptions: {
                options:{
                    encrypt: true
                }
            }
        }
);

export default sequelize


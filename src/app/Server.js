import express from "express"
import dotenv from "dotenv"
import helmet from "helmet";
import sequelize from "../config/database/DatabaseConnection.js";
import syncConnection from "../config/database/SyncConnection.js";

// Routes
import UserRouter from "../routes/UserRouter.js";

dotenv.config()

class Server{
     constructor() {
        this.app = express()
        this.port = process.env.PORT
         this.middlewares()
         this.databaseConnection()
         this.routes()
    }
    middlewares(){
        this.app.use(express.json());

        this.app.use(helmet())
    }
    routes(){
         this.app.use("/users", UserRouter)
    }
    async databaseConnection(){
        try{
            await sequelize.authenticate();
            await syncConnection();
            console.log("Connection has been established successfully")
        }
        catch(error){
            console.error("Unable to connect to the database", error)
        }
    }
    async listen(){
        this.app.listen(this.port, () => {
            console.log(`Running on port ${this.port}`)
        })
    }
}
export default Server
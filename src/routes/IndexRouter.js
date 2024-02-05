import {Router} from "express";
import UserRouter from "./UserRouter.js";

const ApiRouter = (app) => {
    const router = Router();

    app.use("/api/v1/", router);

    router.use("/users", UserRouter)
}

export default ApiRouter
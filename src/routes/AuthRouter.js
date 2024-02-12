import {Router} from "express";
import AuthService from "../services/AuthService.js";

const authService = new AuthService();
const router = Router();

router.post("/signup", async (req, res) => {
    try{
        const user = await authService.registerUser(req.body);
        res.status(200).json({
            "message_status": "Correct",
            user
        })
    }
    catch(error){
        res.status(500).json({
            "message": "Error in the server"
        })
    }
})

router.post("/login", async (req, res) => {

})

router.post("/validate/:token", async (req, res) => {

})

export default router
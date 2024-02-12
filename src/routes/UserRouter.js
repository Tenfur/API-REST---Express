import {Router} from "express";
import UserService from "../services/UserService.js";

const router = Router()

const userService = new UserService()

router.get("/", async (req, res) => {
    try{
        const users = await userService.getUsers();
        res.status(200).json(users);
    }
    catch(error){
        console.error('Error to get the users', error);
        res.status(500).json({ error: 'Error in the server - Router' });
    }
})

router.get("/:id", async (req, res) => {
    try{
        const {id} = req.params;
        const user = await userService.getUserById(id);
        res.status(200).json(user);
    }
    catch(error){
        console.error('Error to get the users', error);
        res.status(500).json({ error: 'Error in the server - Router' });
    }
})

router.post("/", async (req, res) => {
    try{
        await userService.createUser(req.body)
        res.status(200).json({
            "message": "User created correctly!"
        })
    }
    catch(error){
        console.error('Error to create the user', error);
        res.status(500).json({ error: 'Error in the server - Router' });
    }
})

router.delete("/:id", async (req, res) => {
    try{
        const {id} = req.params;
        await userService.deleteById(id);
        res.status(200).json({
            "message": "User deleted correctly!"
        })
    }
    catch(error){
        console.error('Error to create the user', error);
        res.status(500).json({ error: 'Error in the server - Router' });
    }
})

router.put("/:id", async (req, res) => {
    try{
        const {id} = req.params;
        console.log(id, req.body)
        await userService.updateById(id,req.body);
        res.status(200).json({
            "message": "User updated correctly!"
        })
    }
    catch(error){
        console.error('Error to create the user', error);
        res.status(500).json({ error: 'Error in the server - Router' });
    }
})



export default router
import UserModel from "../models/UserModel.js";

class AuthRepository{
    constructor(){

    }
    async create(data){
        try{
           return await UserModel.create(data);
        }
        catch(error){
            console.log("Error in the Repository Layer - Auth")
            throw new Error("Error in the Repository Layer - Auth")
        }
    }
    async getByEmail(email){
        try{
            return await UserModel.findAll({
                where: {
                    email: email
                }
            })
        }
        catch(error){
            console.log("Error in the Repository Layer - Auth",error)
            throw new Error("Error in the Repository Layer - Auth")
        }
    }
    async updateWithNewToken(id, data){
        try{
            return await UserModel.update(data,{
                where: {
                    id: id
                }
            })
        }
        catch(error){
            console.log("Error in the Repository Layer - Auth",error)
            throw new Error("Error in the Repository Layer - Auth")
        }
    }

}

export default AuthRepository
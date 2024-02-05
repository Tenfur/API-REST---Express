import UserModel from "../models/UserModel.js";

class UserRepository{
    constructor() {

    }
    async getAll(){
        try{
             return await UserModel.findAll()
        }
        catch(error){
            console.error('Error en in the repository layer:', error);
            throw new Error('Error to get the users - Repository');
        }
    }
    async getById(id){
        try{
             return await UserModel.findByPk(id)
        }
        catch(error){
            console.error('Error en in the repository layer:', error);
            throw new Error('Error to get the users - Repository');
        }
    }
    async create(data){
        try{
            await UserModel.create(data);
        }
        catch(error){
            console.error('Error en in the repository layer:', error);
            throw new Error('Error to create the user - Repository');
        }
    }
    async delete(id){
        try{
            await UserModel.destroy({
                where: {
                    id: id
                }
            });
        }
        catch(error){
            console.error('Error en in the repository layer:', error);
            throw new Error('Error to create the user - Repository');
        }
    }
    async updateInfo(id, data){
        try{
            await UserModel.update(data, {
                where: {
                    id: id
                }
            })
        }
        catch(error){
            console.error('Error en in the repository layer:', error);
            throw new Error('Error to create the user - Repository');
        }
    }
}

export default UserRepository;
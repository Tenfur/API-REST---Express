import UserRepository from "../repositories/UserRepository.js";

class UserService{
    constructor() {
        this.userRepository = new UserRepository()
    }
    async getUsers(){
        try{
            return await this.userRepository.getAll()
        }
        catch(error){
            console.error('Error en in the service layer:', error);
            throw new Error('Error to get the users - Service');
        }
    }
    async getUserById(id){
        try{
            return await this.userRepository.getById(id)
        }
        catch(error){
            console.error('Error en in the service layer:', error);
            throw new Error('Error to get the user by id - Service');
        }
    }
    async createUser(data){
        try{
            await this.userRepository.create(data)
        }
        catch(error){
            console.error('Error en in the user layer:', error);
            throw new Error('Error to create the user - Service');
        }
    }
    async deleteById(id){
        try{
            await this.userRepository.delete(id);
        }
        catch(error){
            console.error('Error en in the user layer:', error);
            throw new Error('Error to delete the user - Service');
        }
    }
    async updateById(id, data){
        try{
            await this.userRepository.updateInfo(id, data)
        }
        catch(error){
            console.error('Error en in the user layer:', error);
            throw new Error('Error to delete the user - Service');
        }
    }
}

export default UserService
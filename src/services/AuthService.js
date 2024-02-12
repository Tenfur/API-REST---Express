import bcryptjs from "bcryptjs"
import AuthRepository from "../repositories/AuthRepository.js"
import sendEmail from "../helpers/SendEmail.js"
import generateToken from "../helpers/GenerateToken.js";

class AuthService{
    constructor() {
        this.authRepository = new AuthRepository()
    }
    async registerUser(data){
        try{
            // Get the data
            const {email, password} = data
            let userInfo = ""
            // First of all we have validate if the user exists in the database
            const user = await this.authRepository.getByEmail(email)

            if (user.length !== 0) userInfo = user[0].dataValues

            // Check column validation. If the user doesn't validate their email, send another
            if(user.length !== 0 && userInfo.validation === false)  {
                // Update the token and send a new email
                const newToken = await generateToken()
                await this.authRepository.updateWithNewToken(userInfo.id, {"validation_token":newToken})

                sendEmail({"name": userInfo.name,  "validation_token": newToken })
                return;
            }

            if(user.length !== 0 && userInfo.validation === true) return ["Ese email ya está en uso"]

            // After validate the email is not in the database, create the user. Encrypt the password and generate the token
            const salt = await bcryptjs.genSalt(10)
            data.password = await bcryptjs.hash(password, salt)

            data.validation_token =  await generateToken()

            // Save the user in the database
            const userCreated = await this.authRepository.create(data);

            sendEmail(userCreated.dataValues)

            // If the email is not in the database, send a code to validate their email
            return []
        }
        catch(error){
            console.log(error)
        }
    }
    async loginUser(){

    }
    async validateAccount(){

    }
}

export default AuthService
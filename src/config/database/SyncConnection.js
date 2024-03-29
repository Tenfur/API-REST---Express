import sequelize from "./DatabaseConnection.js";

const syncDatabase = async() => {
    try {
        await sequelize.sync({alter: true})
            .then(()=>{
                console.info('Database syncronized successfully')
            })
    } catch(e) {
        console.error(`Error to sync database: ${e}`)
    }
}

export default syncDatabase
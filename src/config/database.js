import mongo from 'mongoose'
import config from './env'
(async ()=>{
    try {
        const con = await mongo.connect(
            config.mongodb, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useFindAndModify: true,
                useCreateIndex: true
            }
        )
        console.log('conectado a '+ con.connection.name);
    } catch (error) {
        console.log(error);
        
    }
})()
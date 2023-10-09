import mongoose from 'mongoose'
import env from '../utils/validateenv'

export const connectdb=async ()=>{
    mongoose.connect(env.MONGO_URL).then(()=>{
        console.log('connected to the database')
    }).catch((err:any)=>{
        console.log(err)
        console.log("failed to connect the database")
    })

}
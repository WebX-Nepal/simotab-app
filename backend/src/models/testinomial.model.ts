import mongoose from "mongoose";


const testinomialSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    profession:{
        type:String,
        required:true
    },
    review:{
        type:String,
        required:true
    },
    photo:{
        url:String,
        public_id:String
    }

},{timestamps:true})


export const TestinomialModel=mongoose.model("Testinomial",testinomialSchema)



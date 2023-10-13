import mongoose from "mongoose";
import { ContactModelInterface } from "../types/contact.types";


const contactSchema=new mongoose.Schema<ContactModelInterface>({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    phone:{
        type:String,
        required:true,
        unique:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    }

}, {timestamps:true})

export const ContactModel=mongoose.model<ContactModelInterface>("Contact",contactSchema)


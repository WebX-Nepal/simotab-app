import mongoose from "mongoose";
import { ContactModelInterface } from "../types/contact.types";


const contactSchema=new mongoose.Schema<ContactModelInterface>({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true
    },
    phone:{
        type:String,
        unique:true,
        required:true
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }

}, {timestamps:true})

export const ContactModel=mongoose.model<ContactModelInterface>("Contact",contactSchema)


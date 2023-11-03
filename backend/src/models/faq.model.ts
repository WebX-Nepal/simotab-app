import mongoose from "mongoose";
import { FaqModelInterface } from "../types/faq.type";



const faqSchema=new mongoose.Schema<FaqModelInterface>({
    question:{
        type:String,
        requried:true
    },
    answer:{
        type:String,
        required:true
    }
},{timestamps:true})


export const FaqModel=mongoose.model<FaqModelInterface>("Faq",faqSchema)


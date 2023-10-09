import mongoose from "mongoose";
import { CategoryModelInterface } from "../types/category.type";
import slugify from "slugify";
import { slugifyField } from "../utils/slugify";


const categorySchema=new mongoose.Schema<CategoryModelInterface>({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },    
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
},{timestamps:true})

categorySchema.pre<any>(
    "save",
    async function(next){
    this.name=slugifyField(this.name)
        next()
    })


export const CatgoryModel=mongoose.model<CategoryModelInterface>("Category", categorySchema)

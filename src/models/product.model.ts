import mongoose from 'mongoose'
import { ProductModelInterface } from '../types/product.type'


const productSchema=new mongoose.Schema<ProductModelInterface>({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true

    },
    discount:{
        type:Number,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Category"
    },
    thumbnailUrl:{
        url:String,
        public_id:String
    },
   
    

},{timestamps:true})


export   const ProductModel=mongoose.model<ProductModelInterface>("Product",productSchema)
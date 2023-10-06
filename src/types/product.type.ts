import mongoose, { Document } from "mongoose"


export interface ProductModelInterface extends Document {
    name:String,
    description:String,
    discount:Number,
    price:Number,
    thumbnailUrl:{
        url:string,
        public_id:string
    }
    category:mongoose.Schema.Types.ObjectId
}



export interface ProductData{
    name:String,
    description:String,
    discount:Number,
    price:Number,
    thumbnailUrl?:{
        url:string,
        public_id:string
    },
    
}
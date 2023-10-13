import mongoose from "mongoose";

const otherLinkSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    url:{
        type:String,
        required:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
},{timestamps:true})


export const OtherLinkModel=mongoose.model("OtherLink",otherLinkSchema)
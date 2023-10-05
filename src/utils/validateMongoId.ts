import mongoose from "mongoose";
import {Response} from  'express'
const validateMongodbId=(id:string,res:Response)=>{
    const isvalid:boolean=mongoose.Types.ObjectId.isValid(id);
    if(!isvalid){
        res.status(404).json({
            sucess:false,
            message:"please provide us the valid user Id"
        })
        return 
    }
}

export default validateMongodbId
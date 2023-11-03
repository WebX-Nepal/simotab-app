import { Request, Response, NextFunction } from "express";
import ErrorHandler from "../../utils/errorhandler";

import asyncHanlder from "express-async-handler";
import { CustomRequest } from "../../middlewares/auth.middleware";
import { ContactModel } from "../../models/contract.model";



export const getAllContactHandler=async(req:Request,res:Response,next:NextFunction)=>{
    try {
         const contacts=await ContactModel.find()

         res.status(200).json({
            success:true,
            contacts
         })
        
    } catch (error:any) {
        throw(new ErrorHandler(error.message,400))
        
    }
}
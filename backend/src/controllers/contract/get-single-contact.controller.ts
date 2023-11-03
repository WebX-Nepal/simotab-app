import { Request, Response, NextFunction } from "express";
import ErrorHandler from "../../utils/errorhandler";

import asyncHanlder from "express-async-handler";
import { CustomRequest } from "../../middlewares/auth.middleware";
import { ContactModel } from "../../models/contract.model";
import validateMongodbId from "../../utils/validateMongoId";



export const getSingleContactHandler=async(req:Request,res:Response,next:NextFunction)=>{
    try {
        const id=req.params.id
        validateMongodbId(id,res)
         const contact=await ContactModel.findById(id)
         if(!contact){
            return next(new ErrorHandler("Contact list with this id doesnt exist",400))
         }

         

         res.status(200).json({
            success:true,
            contact
         })
        
    } catch (error:any) {
        throw(new ErrorHandler(error.message,500))
        
    }
}
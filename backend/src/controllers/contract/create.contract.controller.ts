import { Request, Response, NextFunction } from "express";
import ErrorHandler from "../../utils/errorhandler";

import asyncHanlder from "express-async-handler";
import { CustomRequest } from "../../middlewares/auth.middleware";
import { ContactModel } from "../../models/contract.model";
import { createContactInterface } from "../../types/contact.types";



export const createContactHandler=async(req:CustomRequest,res:Response,next:NextFunction)=>{
    try {
        const data=req.body as createContactInterface
         const contact=await ContactModel.create({...data,createdBy:req.user?._id})

         res.status(201).json({
            success:true,
            message:"contact created successfully",
            contact
         })
        
    } catch (error:any) {
        throw(new ErrorHandler(error.message,400))
        
    }
}
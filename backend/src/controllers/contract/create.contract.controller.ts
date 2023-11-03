import { Request, Response, NextFunction } from "express";
import ErrorHandler from "../../utils/errorhandler";

import asyncHanlder from "express-async-handler";
import { CustomRequest } from "../../middlewares/auth.middleware";
import { ContactModel } from "../../models/contract.model";
import { createContactInterface } from "../../types/contact.types";
import mongoose from "mongoose";



export const createContactHandler=async(req:CustomRequest,res:Response,next:NextFunction)=>{
    try {
        const user= new mongoose.Types.ObjectId(req.user?.id)
        console.log(user)
       const contact= await ContactModel.create({...req.body,user:req.user?._id})

         res.status(201).json({
            success:true,
            message:"contact created successfully",
            contact
         })
        
    } catch (error:any) {
        console.log(error)
        next(new ErrorHandler(error.message,400))
        
    }
}
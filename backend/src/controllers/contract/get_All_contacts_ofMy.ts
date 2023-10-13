import { Request, Response, NextFunction } from "express";
import ErrorHandler from "../../utils/errorhandler";

import asyncHanlder from "express-async-handler";
import { CustomRequest } from "../../middlewares/auth.middleware";
import { ContactModel } from "../../models/contract.model";
import validateMongodbId from "../../utils/validateMongoId";


export const getMyAllContactsHandler=async(req:CustomRequest,res:Response,next:NextFunction)=>{
    try {

        const contacts=await ContactModel.find({createdBy:req.user?._id});


        res.status(200).json({
            success:true,
            contacts
        })
        
    } catch (error:any) {
        next(new ErrorHandler(error.message,400))
        
    }
}
import { Request, Response, NextFunction } from "express";
import ErrorHandler from "../../utils/errorhandler";
import { FaqModel } from "../../models/faq.model";
import asyncHandler from 'express-async-handler'
import validateMongodbId from "../../utils/validateMongoId";



export const getSingleFaqHandler =asyncHandler(async(req:Request,res:Response,next:NextFunction)=>{
    try {

        const id=req.params.id
        validateMongodbId(id,res)
        const faq=await FaqModel.findById(id)

        if(!faq){
            return  next(new ErrorHandler("Faq with this id doesnt exist",400))

        }

        res.status(200).json({
            success:true,
            faq
        })




        
    } catch (error:any) {
        next(new ErrorHandler(error.message,404))
        
    }
})
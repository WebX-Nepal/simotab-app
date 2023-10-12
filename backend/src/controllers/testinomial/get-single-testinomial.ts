import { Request, Response, NextFunction } from "express";
import ErrorHandler from "../../utils/errorhandler";
import asyncHandler from "express-async-handler";
import { TestinomialModel } from "../../models/testinomial.model";
import validateMongodbId from "../../utils/validateMongoId";


export const getSingleTestinomialHandler=asyncHandler(async(req:Request,res:Response,next:NextFunction)=>{
    try {

        const id=req.params.id
        validateMongodbId(id,res)

        const testinomial=await TestinomialModel.findById(id)

        if(!testinomial){
            return next(new ErrorHandler("Testinomial with this id doesnt exist",400))
        }


        res.status(201).json({
            success:true,
            testinomial
        })
        
    } catch (error:any) {
        next(new ErrorHandler(error.message,500))
        
    }
})
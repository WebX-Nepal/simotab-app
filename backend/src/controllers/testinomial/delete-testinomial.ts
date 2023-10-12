import { Request, Response, NextFunction } from "express";
import ErrorHandler from "../../utils/errorhandler";
import asyncHandler from "express-async-handler";
import { TestinomialModel } from "../../models/testinomial.model";
import validateMongodbId from "../../utils/validateMongoId";


export const deleteTestinomialHandler=asyncHandler(async(req:Request,res:Response,next:NextFunction)=>{
    try {

        const id=req.params.id
        validateMongodbId(id,res)

        const testinomial=await TestinomialModel.findById(id)

        if(!testinomial){
            return next(new ErrorHandler("Testinomial with this id doesnt exist",400))
        }

        await TestinomialModel.findByIdAndDelete(id)      

        res.status(200).json({
            success:true,
            message:"Testinomial deleted successfully"            
        })
        
    } catch (error:any) {
        next(new ErrorHandler(error.message,500))
        
    }
})
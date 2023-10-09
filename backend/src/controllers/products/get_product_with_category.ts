import { Request, Response, NextFunction } from "express";
import ErrorHandler from "../../utils/errorhandler";
import { ProductModel } from "../../models/product.model";
import asyncHandler from 'express-async-handler'
import validateMongodbId from "../../utils/validateMongoId";


export const getsingleProductWithCategoryNameHandler=asyncHandler(async(req:Request,res:Response,next:NextFunction)=>{

    try {

        const category=req.body.category

        const products=await ProductModel.find({
            category
        })


        res.status(200).json({
            success:true,
            products
        })

        

      
        
    } catch (error:any) {
        next(new ErrorHandler(error.message,404))
        
    }
})
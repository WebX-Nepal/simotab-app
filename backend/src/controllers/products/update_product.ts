import { Request, Response, NextFunction } from "express";
import ErrorHandler from "../../utils/errorhandler";
import { ProductModel } from "../../models/product.model";
import asyncHandler from 'express-async-handler'
import validateMongodbId from "../../utils/validateMongoId";
import { RedisClient } from "../../client/redis";


export const updateProductHandler=asyncHandler(async(req:Request,res:Response,next:NextFunction)=>{

    try {

        const id=req.params.id

        validateMongodbId(id,res)
        const product=await ProductModel.findById(id)
        if(!product){
            next(new ErrorHandler("Product with this id doesnt exist",404))
        }

        const updatedProduct=await ProductModel.findByIdAndUpdate(id,{$set:req.body},{new:true})
        
        await RedisClient.del(`PRODUCT_CATEGORY-${product?.category}`)

        res.status(200).json({
            success:true,
            updatedProduct
        })

    

        
       
        
    } catch (error:any) {
        next(new ErrorHandler(error.message,404))
        
    }
})
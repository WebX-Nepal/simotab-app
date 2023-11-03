import { Request, Response, NextFunction } from "express";
import ErrorHandler from "../../utils/errorhandler";
import { ProductModel } from "../../models/product.model";
import asyncHandler from 'express-async-handler'
import validateMongodbId from "../../utils/validateMongoId";
import cloudinary from "../../config/cloudinary.config";
import { ProductModelInterface } from "../../types/product.type";
import { RedisClient } from "../../client/redis";


export const deleteProductHandler=asyncHandler(async(req:Request,res:Response,next:NextFunction)=>{
    try {
        const id=req.params.id
        validateMongodbId(id,res)
        const product=await ProductModel.findById(id)

    

        if(!product){
            return next(new ErrorHandler("The product with this id doesnt exist ",404))
        }


        await ProductModel.findByIdAndDelete(id)
        // destroying file from cloud 
       await  cloudinary.v2.uploader.destroy(product!.thumbnailUrl.public_id)

       
       await RedisClient.del(`PRODUCT_CATEGORY-${product?.category}`)
        res.status(200).json({
            success:true,
            message:"product deleted successfully"
        })
        
    } catch (error:any) {
        next(new ErrorHandler(error.message,404))
        
    }
})
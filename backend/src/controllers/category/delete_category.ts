import { Request, Response, NextFunction } from "express";
import ErrorHandler from "../../utils/errorhandler";

import asyncHanlder from "express-async-handler";
import { CatgoryModel } from "../../models/category.model";
import validateMongodbId from "../../utils/validateMongoId";
import { RedisClient } from "../../client/redis";


export const deleteCategoryHandler=asyncHanlder(async(req:Request,res:Response,next:NextFunction)=>{
    try {

        const id=req.params.id
        validateMongodbId(id,res)

        const category=await CatgoryModel.findByIdAndDelete(id)

      await RedisClient.del('ALL_CATEGORIES')


        res.status(200).json({
            success:true,
            message:"category deleted successfully"
        })
        
    } catch (error:any) {
        throw(new ErrorHandler(error.message,404))
        
    }
})
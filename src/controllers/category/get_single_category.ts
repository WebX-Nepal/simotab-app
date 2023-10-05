import { Request, Response, NextFunction } from "express";
import ErrorHandler from "../../utils/errorhandler";

import asyncHanlder from "express-async-handler";
import { CatgoryModel } from "../../models/category.model";
import validateMongodbId from "../../utils/validateMongoId";


export const getSingleCategoryHandler=asyncHanlder(async(req:Request,res:Response,next:NextFunction)=>{
    try {

        const id=req.params.id
        validateMongodbId(id,res)

        const category=await CatgoryModel.findById(id)

        res.status(200).json({
            success:true,
            category
        })
        
    } catch (error:any) {
        throw(new ErrorHandler(error.message,404))
        
    }
})
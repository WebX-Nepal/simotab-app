import { Request, Response, NextFunction } from "express";
import ErrorHandler from "../../utils/errorhandler";

import asyncHanlder from "express-async-handler";
import { CatgoryModel } from "../../models/category.model";
import validateMongodbId from "../../utils/validateMongoId";
import { OrderModel } from "../../models/order.model";



export const getSingleOrderHandler=async(req:Request,res:Response,next:NextFunction)=>{
    try {
        const id=req.params.id;
        validateMongodbId(id,res)

        const order=await OrderModel.findById(id)

        res.status(200).json({
            success:true,
            order
        })
        
    } catch (error:any) {
        next(new ErrorHandler(error.message,404))
        
    }
}
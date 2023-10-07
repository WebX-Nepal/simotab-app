import { Request, Response, NextFunction } from "express";
import ErrorHandler from "../../utils/errorhandler";

import asyncHanlder from "express-async-handler";
import { CatgoryModel } from "../../models/category.model";
import validateMongodbId from "../../utils/validateMongoId";
import { OrderModel } from "../../models/order.model";



export const getAllOrderHandler=async(req:Request,res:Response,next:NextFunction)=>{
    try {
      
        const orders=await OrderModel.find()

      

        res.status(200).json({
            success:true,
            orders
        })
        
    } catch (error:any) {
        next(new ErrorHandler(error.message,404))
        
    }
}
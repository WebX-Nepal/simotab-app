import { Request, Response, NextFunction } from "express";
import ErrorHandler from "../../utils/errorhandler";

import asyncHanlder from "express-async-handler";
import { CatgoryModel } from "../../models/category.model";
import validateMongodbId from "../../utils/validateMongoId";
import { OrderModel } from "../../models/order.model";



export const deleteOrderHandler=async(req:Request,res:Response,next:NextFunction)=>{
    try {
        const id=req.params.id;
        validateMongodbId(id,res)

        const order=await OrderModel.findById(id)
        if(!order){
            next(new ErrorHandler("order with this id doesnt exist",400))
        }
        await OrderModel.findByIdAndDelete(id)
        
        if(!order?.isDelivered){
            next(new ErrorHandler("You cant delete the order as it is nor delivered",400))            
        }

        res.status(200).json({
            success:true,
            message:"order deleted successfully"
        })
        
    } catch (error:any) {
        next(new ErrorHandler(error.message,404))
        
    }
}
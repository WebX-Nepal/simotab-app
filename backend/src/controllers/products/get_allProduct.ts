import { Request, Response, NextFunction } from "express";
import ErrorHandler from "../../utils/errorhandler";
import { ProductModel } from "../../models/product.model";
import asyncHandler from 'express-async-handler'


export const getAllProductsHandler=asyncHandler(async(req:Request,res:any,next)=>{
    try {

        const products=res.filterData;
        res.status(200).json({
            products
        })
        
    } catch (error:any) {
        next(new ErrorHandler(error.message,404))
        
    }
})
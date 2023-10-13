import { Request, Response, NextFunction } from "express";
import ErrorHandler from "../../utils/errorhandler";
import { CustomRequest } from "../../middlewares/auth.middleware";
import { OtherLinkModel } from "../../models/Other_links.model";


export const createOtherLinkHandler=async(req:CustomRequest,res:Response,next:NextFunction)=>{
    try {
        const data=req.body
        const otherLink=await OtherLinkModel.create({...data,user:req.user?.id})

        res.status(201).json({
            success:true,
            message:"Link created successfully"
        })
        
    } catch (error:any) {
        next(new ErrorHandler(error.message,400))
        
    }

}
import { Request, Response, NextFunction } from "express";
import ErrorHandler from "../../utils/errorhandler";
import { OtherLinkModel } from "../../models/Other_links.model";
import validateMongodbId from "../../utils/validateMongoId";


export const updateOtherLinkHandler=async(req:Request,res:Response,next:NextFunction)=>{
    try {

        const id=req.params.id
        validateMongodbId(id,res)
        console.log(req.body)

        const otherLink=await OtherLinkModel.findById(id)

        if(!otherLink){
            return next(new ErrorHandler("Link with this id doesnt exist",404))
        }

     const updLink=   await OtherLinkModel.findByIdAndUpdate(id,{$set:req.body},{new:true})

        res.status(201).json({
            success:true,
            message:"Link updated successfully",
            otherLink:updLink
        })
        
    } catch (error:any) {
        next(new ErrorHandler(error.message,400))
        
    }

}
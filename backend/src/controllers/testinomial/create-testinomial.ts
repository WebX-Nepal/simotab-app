import { Request, Response, NextFunction } from "express";
import ErrorHandler from "../../utils/errorhandler";
import asyncHandler from "express-async-handler";
import { TestinomialModel } from "../../models/testinomial.model";
import cloudinary from "../../config/cloudinary.config";
import fs from 'fs';


export const createTestinomialHandler=asyncHandler(async(req:Request,res:Response,next:NextFunction)=>{
    try {

        if (req.file?.path) {
            try {
              const cloud = await cloudinary.v2.uploader.upload(req.file.path, {
                folder: "office",
              });
              req.body.photo = {
                url: cloud.secure_url,
                public_id: cloud.public_id,
              };
              // removing file from local 
              fs.unlink(req.file.path,(err:any)=>{
              })
            } catch (error) {
              return next(
                new ErrorHandler("unable to upload to the cloudinary", 500)
              );
            }
          } else {
            return next(new ErrorHandler("Please upload the thimbnail too", 500));
          }
        

          console.log(req.body)
        await TestinomialModel.create(req.body)

        res.status(201).json({
            success:true,
            message:"Testinomial created successfully"            
        })
        
    } catch (error:any) {
        next(new ErrorHandler(error.message,500))
        
    }
})
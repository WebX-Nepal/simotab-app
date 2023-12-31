import { Request, Response, NextFunction } from "express";
import ErrorHandler from "../../utils/errorhandler";
import UserModel from "../../models/user.model";
import asyncHandler from 'express-async-handler';
import { CustomRequest } from "../../middlewares/auth.middleware";
import cloudinary from "../../config/cloudinary.config";
import fs from 'fs';


export const updateUserProfileImageHandler=async(req:CustomRequest,res:Response,next:NextFunction)=>{
    try {
        const id=req.user?.id
        const user=await UserModel.findById(id)

        
let cloud;
console.log(req.file)
if (req.file?.path) {
  cloud = await cloudinary.v2.uploader.upload(req.file?.path);
  // removing file from local
  fs.unlink(req.file.path, (err: any) => {
    console.log(err);
  });
  const updatedUser = await UserModel.findByIdAndUpdate(
    id,
    {
      $set: {
        profileImageUrl: {
          url: cloud.secure_url,
          public_id: cloud.public_id,
        },
      },
    },
    { new: true }
  );
  console.log(cloud)
  
  res.status(200).json({
    success: true,
    message:"profile picture updated successfully",
    updatedUser
  });
} else {
  next(new ErrorHandler("Please provide us the Profile Url ", 400));
}
        
        
    } catch (error:any) {
        next(new ErrorHandler(error.message,400))
        
    }
}


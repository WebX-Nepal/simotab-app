import { Request, Response, NextFunction } from "express";
import ErrorHandler from "../../utils/errorhandler";
import { ProductModel } from "../../models/product.model";
import cloudinary from "../../config/cloudinary.config";
import fs from 'fs'
import mongoose from "mongoose";
import { RedisClient } from "../../client/redis";
export const createProductHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if (req.file?.path) {
      try {
        const cloud = await cloudinary.v2.uploader.upload(req.file.path, {
          folder: "office",
        });
        req.body.thumbnailUrl = {
          url: cloud.secure_url,
          public_id: cloud.public_id,
        };
        // removing file from local 
        fs.unlink(req.file.path,(err:any)=>{
            console.log(err)
        })
      } catch (error) {
        return next(
          new ErrorHandler("unable to upload to the cloudinary", 404)
        );
      }
    } else {
      return next(new ErrorHandler("Please upload the thimbnail too", 404));
    }


    req.body.discount=Number(req.body.discount)
    req.body.price=Number(req.body.price)

    const product = await ProductModel.create({...req.body,category:new mongoose.Types.ObjectId(req.body.category)});
    await RedisClient.del(`PRODUCT_CATEGORY-${req.body.category}`)
    res.status(200).json({
        success:true,
        product
    })
  } catch (error: any) {
    throw new ErrorHandler(error.message, 404);
  }
};



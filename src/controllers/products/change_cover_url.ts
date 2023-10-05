import { Request, Response, NextFunction } from "express";
import ErrorHandler from "../../utils/errorhandler";
import { ProductModel } from "../../models/product.model";
import asyncHandler from "express-async-handler";
import validateMongodbId from "../../utils/validateMongoId";
import cloudinary from "../../config/cloudinary.config";
import fs from "fs";

export const updateCoverUrlProductHandler = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id;

      validateMongodbId(id, res);
      const product = await ProductModel.findById(id);
      if (!product) {
        return next(new ErrorHandler("Product with this id doesnt exist", 404));
      }
      await cloudinary.v2.uploader.destroy(product!.thumbnailUrl.public_id);

      let cloud;
      if (req.file?.path) {
        cloud = await cloudinary.v2.uploader.upload(req.file?.path);
        // removing file from local
        fs.unlink(req.file.path, (err: any) => {
          console.log(err);
        });
        const updatedProduct = await ProductModel.findByIdAndUpdate(
          id,
          {
            $set: {
              thumbnailUrl: {
                url: cloud.secure_url,
                public_id: cloud.public_id,
              },
            },
          },
          { new: true }
        );
        res.status(200).json({
          success: true,
          updatedProduct,
        });
      } else {
        next(new ErrorHandler("Please provide us the thumbnailUrl ", 400));
      }
    } catch (error: any) {
      next(new ErrorHandler(error.message, 404));
    }
  }
);

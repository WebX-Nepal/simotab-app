import { Request, Response, NextFunction } from "express";
import ErrorHandler from "../../utils/errorhandler";
import { ProductModel } from "../../models/product.model";
import asyncHandler from "express-async-handler";
import validateMongodbId from "../../utils/validateMongoId";

export const getsingleProductHandler = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id;

      validateMongodbId(id, res);
      const product = await ProductModel.findById(id).populate("category");
      res.status(200).json({
        success: true,
        product,
      });
    } catch (error: any) {
      next(new ErrorHandler(error.message, 404));
    }
  }
);

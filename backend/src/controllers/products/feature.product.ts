import { Request, Response, NextFunction } from "express";
import ErrorHandler from "../../utils/errorhandler";
import { ProductModel } from "../../models/product.model";
import asyncHandler from "express-async-handler";

export const getFeatureProduct = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const products = await ProductModel.find(
        {},
        {},
        { sort: { createdAt: -1 } }
      ).limit(4);

      res.status(200).json({
        success: true,
        products,
      });
    } catch (error: any) {
      next(new ErrorHandler(error.message, 400));
    }
  }
);

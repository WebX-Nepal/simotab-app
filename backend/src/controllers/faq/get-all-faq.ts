import { Request, Response, NextFunction } from "express";
import ErrorHandler from "../../utils/errorhandler";
import { FaqModel } from "../../models/faq.model";
import asyncHandler from "express-async-handler";
import validateMongodbId from "../../utils/validateMongoId";

export const getAllFaqHandler = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const faqs = await FaqModel.find();

      res.status(200).json({
        success: true,
        faqs,
      });
    } catch (error: any) {
      next(new ErrorHandler(error.message, 404));
    }
  }
);

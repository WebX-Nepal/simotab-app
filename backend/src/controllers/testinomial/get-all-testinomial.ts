import { Request, Response, NextFunction } from "express";
import ErrorHandler from "../../utils/errorhandler";
import asyncHandler from "express-async-handler";
import { TestinomialModel } from "../../models/testinomial.model";

export const getAllTestinomialHandler = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const testinomials = await TestinomialModel.find();

      res.status(201).json({
        success: true,
        testinomials,
      });
    } catch (error: any) {
      next(new ErrorHandler(error.message, 500));
    }
  }
);

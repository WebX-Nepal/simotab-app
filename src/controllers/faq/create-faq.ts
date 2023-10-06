import { Request, Response, NextFunction } from "express";
import ErrorHandler from "../../utils/errorhandler";
import { FaqModel } from "../../models/faq.model";
import asyncHandler from "express-async-handler";
import { createfaqInterface } from "../../types/faq.type";

export const createFaqHandler = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { question, answer } = req.body as createfaqInterface;

      const faq = await FaqModel.create({
        answer,
        question,
      });

      res.status(201).json({
        success: true,
        faq,
      });
    } catch (error: any) {
      next(new ErrorHandler(error.message, 404));
    }
  }
);

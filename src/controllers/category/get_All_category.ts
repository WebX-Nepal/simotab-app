import { Request, Response, NextFunction } from "express";
import ErrorHandler from "../../utils/errorhandler";

import asyncHanlder from "express-async-handler";
import { CatgoryModel } from "../../models/category.model";

export const getAllCategoryHandler = asyncHanlder(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id;

      const categories = await CatgoryModel.find();
      res.status(200).json({
        success: true,
        categories,
      });
    } catch (error: any) {
      throw new ErrorHandler(error.message, 404);
    }
  }
);

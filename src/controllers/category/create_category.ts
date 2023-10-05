import { Request, Response, NextFunction } from "express";
import ErrorHandler from "../../utils/errorhandler";

import asyncHanlder from "express-async-handler";
import { CatgoryModel } from "../../models/category.model";

export const CreateCategoryHandler = asyncHanlder(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { name, description } = req.body;
      const category = await CatgoryModel.create({
        name,
        description,
        createdBy:req.user._id
      });

      res.status(201).json({
        success: true,
        category,
      });
    } catch (error: any) {
      throw new ErrorHandler(error.message, 404);
    }
  }
);

import { Request, Response, NextFunction } from "express";
import ErrorHandler from "../../utils/errorhandler";

import asyncHanlder from "express-async-handler";
import { CatgoryModel } from "../../models/category.model";
import validateMongodbId from "../../utils/validateMongoId";
import { slugifyField } from "../../utils/slugify";
import { RedisClient } from "../../client/redis";

export const updateCategoryHandler = asyncHanlder(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id;
      validateMongodbId(id, res);
      if(req.body.name){
        req.body.name=slugifyField(req.body.name)
      }

      const updatedCategory = await CatgoryModel.findByIdAndUpdate(
        id,
        { $set: req.body },
        { new: true }
      );

      await RedisClient.del('ALL_CATEGORIES')

      res.status(201).json({
        success: true,
        message: "category updated successfully",
      });
    } catch (error: any) {
      throw new ErrorHandler(error.message, 404);
    }
  }
);

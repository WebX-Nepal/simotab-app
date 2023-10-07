import { Request, Response, NextFunction } from "express";
import ErrorHandler from "../../utils/errorhandler";

import asyncHanlder from "express-async-handler";
import { CatgoryModel } from "../../models/category.model";
import { UserModelType } from "../../types/user.types";
import { CustomRequest } from "../../middlewares/auth.middleware";




export const CreateCategoryHandler =async(req:CustomRequest ,res: Response, next: NextFunction) => {
    try {
      const { name, description } = req.body;
      if(req.user){

        const category = await CatgoryModel.create({
          name,
          description,
          createdBy:req?.user?._id
        });
        
        res.status(201).json({
          success: true,
          category,
      });
    }
    } catch (error: any) {
      throw new ErrorHandler(error.message, 404);
    }
  }
;

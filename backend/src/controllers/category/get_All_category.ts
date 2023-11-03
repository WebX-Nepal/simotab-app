import { Request, Response, NextFunction, json } from "express";
import ErrorHandler from "../../utils/errorhandler";

import asyncHanlder from "express-async-handler";
import { CatgoryModel } from "../../models/category.model";
import { RedisClient } from "../../client/redis";

export const getAllCategoryHandler = asyncHanlder(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id;
      let categories;

      categories=await RedisClient.get('ALL_CATEGORIES')
      if(categories){ 
        categories=JSON.parse(categories)
        console.log("redis")
        res.status(200).json({
          success: true,
          categories,
        });
        
        
      }else{
        categories = await CatgoryModel.find();
        await RedisClient.set("ALL_CATEGORIES",JSON.stringify(categories),'EX', 60*60)
        console.log("na redis")
        res.status(200).json({
          success: true,
          categories,
        });
      }
      

 
    } catch (error: any) {
      throw new ErrorHandler(error.message, 404);
    }
  }
);

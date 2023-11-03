import { Request, Response, NextFunction } from "express";
import ErrorHandler from "../../utils/errorhandler";
import { ProductModel } from "../../models/product.model";
import asyncHandler from "express-async-handler";
import validateMongodbId from "../../utils/validateMongoId";
import { RedisClient } from "../../client/redis";

export const getsingleProductWithCategoryNameHandler = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const category = req.body.category;
      let products;
     products= await RedisClient.get(`PRODUCT_CATEGORY-${category}`)
      if(products){
        products=JSON.parse(products)
        res.status(200).json({
            success: true,
            products,
          });


      }else{
        products = await ProductModel.find({
            category,
          });
          await RedisClient.set(`PRODUCT_CATEGORY-${category}`,JSON.stringify(products),'EX', 60*60)
    
          res.status(200).json({
            success: true,
            products,
          });

      }
      
    
    } catch (error: any) {
      next(new ErrorHandler(error.message, 404));
    }
  }
);

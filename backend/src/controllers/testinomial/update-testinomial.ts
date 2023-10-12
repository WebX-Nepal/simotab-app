import { Request, Response, NextFunction } from "express";
import ErrorHandler from "../../utils/errorhandler";
import asyncHandler from "express-async-handler";
import { TestinomialModel } from "../../models/testinomial.model";
import validateMongodbId from "../../utils/validateMongoId";

export const updateTestinomialHandler = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id;
      validateMongodbId(id, res);

      const updatedTestinomial=await TestinomialModel.findByIdAndUpdate(id,{
        $set:req.body
      },{new:true})


      res.status(200).json({
        success: true,
        updatedTestinomial
      });
    } catch (error: any) {
      next(new ErrorHandler(error.message, 500));
    }
  }
);

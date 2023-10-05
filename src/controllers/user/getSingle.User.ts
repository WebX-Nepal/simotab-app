import { Request, Response, NextFunction } from "express";
import ErrorHandler from "../../utils/errorhandler";
import UserModel from "../../models/user.model";
import validateMongodbId from "../../utils/validateMongoId";

export const getSingleUserHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    console.log("thanks ")
    const id = req.params.id;
    validateMongodbId(id,res);
    const user = await UserModel.findById(id);
    if (!user) {
      return next(new ErrorHandler("User already exists", 404));
    }

    res.status(201).json({
      success: true,
      user,
    });
  } catch (error: any) {
    throw new ErrorHandler(error.message, 400);
  }
};

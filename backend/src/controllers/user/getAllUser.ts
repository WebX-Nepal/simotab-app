import { Request, Response, NextFunction } from "express";
import ErrorHandler from "../../utils/errorhandler";
import UserModel from "../../models/user.model";
import validateMongodbId from "../../utils/validateMongoId";

export const getAllUserHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const users = await UserModel.find();

    res.status(201).json({
      success: true,
      users
    });
  } catch (error: any) {
    throw new ErrorHandler(error.message, 400);
  }
};

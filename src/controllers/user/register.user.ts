import { Request, Response, NextFunction } from "express";
import ErrorHandler from "../../utils/errorhandler";
import UserModel from "../../models/user.model";
import { UserSignInType } from "../../types/user.types";

export const createUserHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = req.body as UserSignInType;

    const UserExists = await UserModel.findOne({ email: data.email });
    if (UserExists) {
      return next(new ErrorHandler("User already exists", 404));
    }

    const user = await UserModel.create(req.body);

    res.status(201).json({
      success: true,
      message: "User created sucessfully",
    });
  } catch (error: any) {
    throw new ErrorHandler(error.message, 400);
  }
};

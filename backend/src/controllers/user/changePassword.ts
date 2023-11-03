import { Request, Response, NextFunction } from "express";
import ErrorHandler from "../../utils/errorhandler";
import asyncHandler from "express-async-handler";
import UserModel from "../../models/user.model";

export const updatePasswordHandler = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { email, newPassword, oldPassword } = req.body;
      const user = await UserModel.findOne({ email });
      if (!user) {
       return  next(new ErrorHandler("user email doesnt match",404));
      }
      let isTrue = await user.comparePassword(oldPassword);
      if (isTrue) {
        user.password = newPassword;
        await user.save();
        res.status(200).json({
          success: true,
          message: "password updated sucssfully",
        });
      } else {
        res.status(200).json({
          success: false,
          message: "enter the valid password",
        });
      }
    } catch (error: any) {
      next(new ErrorHandler(error.message,500));
    }
  }
);
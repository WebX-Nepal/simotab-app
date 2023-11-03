import { Request, Response, NextFunction } from "express";
import ErrorHandler from "../../utils/errorhandler";
import asyncHandler from "express-async-handler";
import UserModel from "../../models/user.model";

export const ChangeUserNameHandler = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { name, newName } = req.body;
      const user = await UserModel.findOne({ name });

      if (!user) {
        return next(new ErrorHandler("User with this name doesnt exist", 404));
      }
      const userExist = await UserModel.findOne({ name: newName });

      if (userExist) {
        return next(new ErrorHandler("User with this name alreasy exist", 400));
      }

      user.name = newName;
      await user.save();
      res.status(200).json({
        success: true,
        message: "Name changed successfully",
        updUser: user,
      });
    } catch (error: any) {
      next(new ErrorHandler(error.message, 500));
    }
  }
);

import { Request, Response, NextFunction } from "express";
import ErrorHandler from "../../utils/errorhandler";
import asyncHandler from "express-async-handler";
import UserModel from "../../models/user.model";

export const ChangeUserEmailHandler = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { email,newEmail} = req.body;
      const user = await UserModel.findOne({ email });

      if (!user) {
        return next(new ErrorHandler("User with this email doesnt exist", 404));
      }
   

      user.email = newEmail;
      await user.save();
      res.status(200).json({
        success: true,
        message: "Email changed successfully",
      });
    } catch (error: any) {
      next(new ErrorHandler(error.message, 500));
    }
  }
);

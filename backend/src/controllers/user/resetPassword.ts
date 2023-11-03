import { Request, Response, NextFunction } from "express";
import ErrorHandler from "../../utils/errorhandler";
import asyncHandler from "express-async-handler";
import crypto from "crypto";
import UserModel from "../../models/user.model";

// reset password
export const resetPasswordHandler = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { newPassword, conformPassword } = req.body;
      if (newPassword !== conformPassword) {
        next(new ErrorHandler("the password doesnt match", 400));
      }
      const token = req.body.token;
      const resetPasswordToken = crypto
        .createHash("sha256")
        .update(token)
        .digest("hex");
      const user = await UserModel.findOne({
        resetPasswordToken,
        resetDateExpire: { $gt: Date.now() },
      });
      if (user) {
        user.password = newPassword;
        user.resetPasswordToken = undefined;
        user.resetDateExpire = undefined;
        await user.save();
        res.status(200).json({
          sucess: true,
          message: "password has been changed sucessfully",
        });
      } else {
        next(
          new ErrorHandler(
            "the token is expired or the token is not valid",
            400
          )
        );
      }
    } catch (error: any) {
      next(new ErrorHandler(error.message, 500));
    }
  }
);

import { Request, Response, NextFunction } from "express";
import ErrorHandler from "../../utils/errorhandler";
import asyncHandler from "express-async-handler";
import UserModel from "../../models/user.model";
import sendmail from "../../utils/send_email";
import { Emailoptions } from "../../utils/send_email";

export const forgetPasswordHandler = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { email } = req.body;

      const user = await UserModel.findOne({ email });
      if (!user) {
        return next(new ErrorHandler("user doesnt exists", 404));
      }
      let token = await user.generateToken();
      await user.save();

      const html = ` <h1> Change your password by below Token  </h1><h2> ${token}</h2>`;
      const message: string = `Reset Your password`;
      const subject: string = "Reset your password";
      try {
        sendmail({ email, subject, html } as Emailoptions);
        res.status(200).json({
          sucess: true,
          message: "mail sent sucessfully",
          token,
        });
      } catch (error) {
        user.resetPasswordToken = undefined;
        user.resetDateExpire = undefined;
        await user.save();
      }
    } catch (error: any) {
      next(new ErrorHandler(error.message, 500));
    }
  }
);

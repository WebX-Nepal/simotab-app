import { Request, Response, NextFunction } from "express";
import ErrorHandler from "../../utils/errorhandler";
import UserModel from "../../models/user.model";
import { generate_access_token } from "../../utils/token";

export const loginUserHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await UserModel.findOne({ email: req.body.email });

    if (!user) {
      return next(
        new ErrorHandler("user doesnt exist please register again", 404)
      );
    }

    const isPasswordCorrect = await user.comparePassword(req.body.password);
    if (!isPasswordCorrect) {
      return next(new ErrorHandler("please enter the correct password", 404));
    }

    const token = generate_access_token(user);

    res.status(200).json({
      success: true,
      message: "user login successfully",
      token: token,
    });
  } catch (error: any) {
    throw new ErrorHandler(error.message, 400);
  }
};

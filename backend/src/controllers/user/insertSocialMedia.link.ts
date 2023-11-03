import { Request, Response, NextFunction } from "express";
import ErrorHandler from "../../utils/errorhandler";
import UserModel from "../../models/user.model";
import validateMongodbId from "../../utils/validateMongoId";
import { CustomRequest } from "../../middlewares/auth.middleware";

export const InsertSocialMediaLinkHandler = async (
  req: CustomRequest,
  res: Response,
  next: NextFunction
) => {
  const userId = req.user?._id;

  const { name, url } = req.body;

  validateMongodbId(userId, res);

  const user = await UserModel.findById(userId);
    
  if (!user) {
    return next(
      new ErrorHandler("user with this id is not available or loged in", 400)
    );
  }
    user.socialMediaLinks=user?.socialMediaLinks.filter((socialMediaLink)=>socialMediaLink.name!==name)

  user.socialMediaLinks.push({ name, url });

  await user.save();

  res.status(200).json({
    success: true,
    message: "Social media link added sucessfully",
    user
  });
};

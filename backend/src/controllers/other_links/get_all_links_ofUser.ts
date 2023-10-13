import { Request, Response, NextFunction } from "express";
import ErrorHandler from "../../utils/errorhandler";
import { CustomRequest } from "../../middlewares/auth.middleware";
import { OtherLinkModel } from "../../models/Other_links.model";

export const getAllOtherLinkHandler = async (
  req: CustomRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const otherLinks = await OtherLinkModel.find({user:req.user?._id});
    console.log(req.user?._id)

    res.status(201).json({
      success: true,
      otherLinks,
    });
  } catch (error: any) {
    next(new ErrorHandler(error.message, 400));
  }
};

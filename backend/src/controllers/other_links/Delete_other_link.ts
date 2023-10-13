import { Request, Response, NextFunction } from "express";
import ErrorHandler from "../../utils/errorhandler";
import { CustomRequest } from "../../middlewares/auth.middleware";
import { OtherLinkModel } from "../../models/Other_links.model";
import validateMongodbId from "../../utils/validateMongoId";

export const deleteOtherLinkHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id as string;
    validateMongodbId(id, res);

    const otherLink = await OtherLinkModel.findById(id);

    if (!otherLink) {
      return next(new ErrorHandler("Link with this id doesnt exist", 404));
    }

    await OtherLinkModel.findByIdAndDelete(id);

    res.status(201).json({
      success: true,
      message: "Link deleted successfully",
    });
  } catch (error: any) {
    next(new ErrorHandler(error.message, 400));
  }
};

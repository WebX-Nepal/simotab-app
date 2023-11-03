import { Request, Response, NextFunction } from "express";
import ErrorHandler from "../../utils/errorhandler";
import asyncHandler from "express-async-handler";
import qrcode from "qrcode";

export const generateQrCodeHandler = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { url } = req.body;

      const opts = {
        errorCorrectionLevel: "H",
        type: "image/jpeg",
        quality: 0.3,
        margin: 1.2,
        color: {
          dark: "#EC9316",
          light: "#FFFF",
        },
        width: 250,
      };

      if (url) {
        qrcode.toDataURL(url, (err, src) => {
          console.log(opts);
          res.json({
            success: true,
            qr_code: src,
          });
        });
      }
    } catch (error: any) {
      next(new ErrorHandler(error.message, 500));
    }
  }
);

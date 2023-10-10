import { Request, Response, NextFunction } from "express";
import ErrorHandler from "../utils/errorhandler";

export const ParseFormDataIntoInt = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = req.body;
    console.log(data)

    for (const key in data) {
      if (Number(data[key])) {
        req.body[key] = Number(data[key]);
      }
    }
    console.log("first")
    next()
  } catch (error: any) {
    throw new ErrorHandler(error.message, 400);
  }
};

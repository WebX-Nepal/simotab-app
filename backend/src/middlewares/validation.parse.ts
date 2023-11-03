import { Request, Response, NextFunction } from "express";
import ErrorHandler from "../utils/errorhandler";
// // validating the req.body type

const validateDataMiddleware =
  (validateCreateBlog:any) => (req: Request, res: Response, next: NextFunction) => {
    try {
        console.log(req.body)
      let result = validateCreateBlog.safeParse(req.body);
      let message: any = JSON.stringify(result, null, 2);
      message = JSON.parse(message);
      if (!message.success) {
        res.status(400).json({
          error: message,
        });
      }
      else{
        next()
      }
    } catch (error: any) {
      throw new ErrorHandler(error.message, 400);
    }
  };


  export default validateDataMiddleware
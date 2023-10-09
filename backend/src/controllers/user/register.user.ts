import { Request, Response, NextFunction } from "express";
import ErrorHandler from "../../utils/errorhandler";
import UserModel from "../../models/user.model";
import { UserSignInType } from "../../types/user.types";
import sendmail from "../../utils/send_email";
import ejs from 'ejs'
import path from 'path'

export const createUserHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = req.body as UserSignInType;
    // console.log(path.join(__dirname, "../../src/mails/created_account_first.ejs") ,"sdsdsd")
    
   
    const UserExists = await UserModel.findOne({ email: data.email });
    if (UserExists) {
      return next(new ErrorHandler("User already exists", 404));
    }
  
    
    const user = await UserModel.create(req.body);

   
    

    // const html = await ejs.renderFile(
    //   path.join(__dirname, "../../src/mails/created_account_first.ejs"),
    //   user
      
    // );




    // await sendmail({
    //   email: user.email,
    //   subject: "Ativate your account",
    //   template: "activation-mail.ejs",
    //   data,
    // });


    res.status(201).json({
      success: true,
      message: "User created sucessfully",
    });
  } catch (error: any) {
    throw new ErrorHandler(error.message, 400);
  }
};

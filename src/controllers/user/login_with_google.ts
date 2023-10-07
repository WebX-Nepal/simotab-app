import { Request, Response, NextFunction } from "express";
import ErrorHandler from "../../utils/errorhandler";
import UserModel from "../../models/user.model";
import asyncHandler from 'express-async-handler'
import axios from "axios";
import { GoogleTokenResult } from "../../types/user.types";
import { generate_access_token } from "../../utils/token";



export const LoginWithGoogleHandler=asyncHandler(async(req:Request,res:Response,next:NextFunction)=>{
    try {
        const {googleToken}=req.body
        const googleOauthUrl = new URL("https://oauth2.googleapis.com/tokeninfo");
        console.log(googleOauthUrl)
        googleOauthUrl.searchParams.set("id_token", googleToken);

        const {data}=await axios.get<GoogleTokenResult>(googleOauthUrl.toString(),{
            responseType:"json"
        })

        const existUser=await UserModel.findOne({email:data.email})
        if(!existUser){
            const newUser=await UserModel.create({
               name:`${data.given_name} ${data.family_name}`,
               profileImageUrl:data.picture,
               email:data.email

            })
            let newUserToken=generate_access_token(newUser)

            res.status(200).json({
                success:true,
                message:"User registered sucessfully",
                token:newUserToken
            })
        }
        else{
            const token=generate_access_token(existUser)
            res.status(200).json({
                success:true,
                token
            })
        }






        
    } catch (error:any) {
        console.log(error)
        next(new ErrorHandler(error.message,400))
        
    }
})
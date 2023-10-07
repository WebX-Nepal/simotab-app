import asyncHandler from 'express-async-handler'
import jwt from 'jsonwebtoken'
import enviroment from '../utils/validateenv';


import { NextFunction , Request, Response} from "express"
import UserModel from '../models/user.model'
import { Error } from 'mongoose';
import ErrorHandler from '../utils/errorhandler';
import { UserModelType } from '../types/user.types';





export interface CustomRequest extends Request {
    user:UserModelType | undefined
}

// // check auth 
export const checkAuth=asyncHandler(async(req:Request,res:Response,next:NextFunction)=>{
    try {
        if(!req.headers.authorization){
            throw(new ErrorHandler("No authorization token is attached iwth the headers",404))
        }
        let checktoken=req.headers.authorization.startsWith('Bearer')
        if(!checktoken){
            throw(new ErrorHandler("Please give us a valid token ",404))
        }
        let token:string=req.headers.authorization.split(' ')[1]
        let decoded:any=jwt.verify(token,enviroment.JWT_SECRET)
        const email:string=decoded.email
        const user:any=await UserModel.findOne({email})
        console.log(user)
        req.user=user
        console.log(user)
        next()   
    } catch (error:any) {
        throw new Error(error)        
    }
})





// check role 
export const checkRole=(...roles:any)=>(req:CustomRequest,res:Response,next:NextFunction)=>{
    if(roles.includes(req?.user?.role)){
        next()
    }else{
        res.status(400).json({
            sucess:false,
            message:"you are not authorized to acess this resource"
        
    })

    }
}


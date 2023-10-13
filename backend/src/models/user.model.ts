import mongoose from "mongoose";
import bcrypt from 'bcrypt'

import { UserModelType } from "../types/user.types";
import { userModelValidationMessage } from "../constants/model.constants/model.validation.message";


export const roles={
    User:"user",
    Admin:'admin'
}


const userSchema=new mongoose.Schema<UserModelType>({
    name:{
        type:String,
        required:[true,userModelValidationMessage.NAME_REQUIRED_MESSGAE]
    },
    email:{
        type:String,
        required:[true,userModelValidationMessage.EMAIL_REQUIRED_MESSAGE],
        unique:true
    },
    password:{
        type:String,
        select:false
    },
    phone:{
        type:String,
        unique:true
    },
    role:{
        type:String,
        default:roles.User
    },
    profileImageUrl:{
        url:String,
        public_id:String   
    },
    coverImageUrl:{
        url:String,
        public_id:String      
    },
    socialMediaLinks:[{
        url:String,
        media:String
    }], 

},{timestamps:true})



userSchema.pre<any>(
    "save",
    async function(next){
        if(this.isModified('password')){
            this.password=await bcrypt.hash(this.password,10)
            next()
        }
        next()
    }
    )
    userSchema.methods.comparePassword=async function(enteredPassword:string):Promise<boolean>{
        const user=await UserModel.findOne({email:this.email}).select('password')
        console.log(user,"me")
        return await bcrypt.compare(enteredPassword,user!.password)
        
    
    }




const UserModel=mongoose.model<UserModelType>("User",userSchema)


export default UserModel 

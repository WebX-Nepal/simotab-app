import mongoose from "mongoose";
import bcrypt from 'bcrypt'
import { userModelValidationMessage } from "../constats/model.constants/model.validation.message";
import { UserModelType } from "../types/user.types";


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
        required:true
    },
    role:{
        type:String,
        default:roles.User
    }

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

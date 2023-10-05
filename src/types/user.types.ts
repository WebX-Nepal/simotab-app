
import { Document } from "mongoose"

export type UserSignInType={
    name:String,
    email:string,
    phone:string,
    password:string

}



export interface  UserModelType extends Document {
    name:string,
    email:string,
    password:string,
    phone:string,
    role:string,
    comparePassword:(password:string)=>Promise<boolean>


}


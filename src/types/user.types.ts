
import { Document } from "mongoose"

export type UserSignInType={
    name:String,
    email:string,
    phone?:string,
    password:string

}



export interface  UserModelType extends Document {
    name:string,
    email:string,
    password:string,
    phone:string,
    role:string,
    profileImageUrl:string,
    comparePassword:(password:string)=>Promise<boolean>


}





export interface GoogleTokenResult {
    iss?: string;
    azp?: string;
    aud?: string;
    sub?: string;
    email?: string;
    email_verified?: string;
    nbf?: string;
    name?: string;
    picture?: string;
    given_name?: string;
    family_name?: string;
    locale?: string;
    iat?: string;
    exp?: string;
    jti?: string;
    alg?: string;
    kid?: string;
    typ?: string;
  }
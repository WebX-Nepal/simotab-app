import passport from "passport";
import { Request, Response } from "express";
import { Strategy } from "passport-google-oauth20";
import User from "../models/user.model";
import env from "../utils/validateenv";
import UserModel from "../models/user.model";
const clientId = env.GOOGLE_CLIENT_ID ?? "";
const clientSecret = env.GOOGLE_CLIENT_SECRET ?? "";

export const passportInitialize = () => {
  passport.use(
    new Strategy(
      {
        clientID: clientId,
        clientSecret: clientSecret,
        callbackURL: "/auth/google/callback",
      },
      async function (
        accessToken: string,
        refreshToken: string,
        profile: any,
        cb: any
      ) {
        console.log(profile);
        const existUser:any =await User.findOne({email:profile['_json'].email})


        console.log(existUser,"owowowo")
        
        if(existUser){
            cb(null, profile);
        }
        else{
            const data={
                name:profile['_json'].name,
                email:profile['_json'].email,
            }
            const user=new UserModel(data);
            console.log(user,"naya")
            await user.save();
            console.log(user)
            cb(null, profile);
        }
      }
    )
  );




  
  

  passport.serializeUser((user: object, done: any) => {
    done(null, user);
  });
  passport.deserializeUser((user: object, done: any) => {
    done(null, user);
  });
};

export default passport;

import  googleStrategy from'passport-google-oauth20'
import facebookStrategry from "passport-facebook"
import passport from "passport";
import validateenv from '../utils/validateenv';
import UserModel from '../models/user.model';

const GoogleStrategy=googleStrategy.Strategy
const FacebookStrategy=facebookStrategry.Strategy

export const passportInitialize = () => {
  passport.use(new GoogleStrategy({
    clientID: validateenv.GOOGLE_CLIENT_ID,
    clientSecret: validateenv.GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
  },
  function(accessToken:string, refreshToken:string, profile:any, cb:any) {
    console.log(accessToken,refreshToken)
    console.log(profile,"thanls")
    
    cb(null,profile)
    //  const existUser=await UserModel.findOne({email:})
    console.log(profile['_json'].email)
    
    // User.findOrCreate({ googleId: profile.id }, function (err:any, user:any) {
      //   return cb(err, user);
      // });
    }
    ));
    
    passport.use(new FacebookStrategy({
      clientID: "FACEBOOK_APP_ID",
      clientSecret: "FACEBOOK_APP_SECRET",
      callbackURL: "http://localhost:3000/auth/facebook/callback"
    },
    function(accessToken, refreshToken, profile, cb) {
      console.log(profile)
      // User.findOrCreate({ facebookId: profile.id }, function (err:any, user:any) {
        //   return cb(err, user);
        // });
      }
      ));
      
      
      
      
      
      
      
      
      
      
      passport.serializeUser((user:any,cb)=>{
        cb(null,user)
      })
      passport.deserializeUser((user:any,cb)=>{
        cb(null,user)
      })
      
    }
      
      export default passport
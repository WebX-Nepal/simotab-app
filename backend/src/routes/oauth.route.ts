import express from 'express'
import passport from 'passport'
import { Request,Response,NextFunction } from 'express';
import { generate_access_token } from '../utils/token';
import UserModel from '../models/user.model';
const router=express.Router()







router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/login/failed', (req: Request, res: Response) => {
    res.status(401).json({
        message: 'Unauthorized user'
    })
})




router.get('/google/callback', async(req, res, next) => {
    passport.authenticate('google', async(err: any, user: any) => {
        if (err) {
            return next(err);
        }
        
        
        const newUser=await UserModel.findOne(user.email)
        if(newUser){
            console.log(newUser._id)
            const token= generate_access_token(newUser)
            res.cookie('simotapp_jwtToken', token);
            res.cookie('simotapp_isLoggedIn', true);
            res.cookie('simotapp_roles', newUser.role);
            res.cookie('simotapp_UserId',newUser._id.toString());
            res.redirect(`${process.env.CLIENT_URL}`);
            next()

        }
        
        console.log(newUser,"ma ho")

        
        
        
   
        
    })(req, res, next);
});








router.get("/facebook",passport.authenticate('facebook',{scope:["profile"]}));

router.get('/facebook/callback',
passport.authenticate('facebook', { failureRedirect: '/login' }),
function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
});










export default router

// number 
// mailing 
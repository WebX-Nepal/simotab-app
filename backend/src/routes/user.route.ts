import express from 'express'

import { createUserDataValidation,loginUserDataValidation } from '../validation/user.validation'
import validateDataMiddleware from '../middlewares/validation.parse'
import { checkAuth } from '../middlewares/auth.middleware'
import { LoginWithGoogleHandler, createUserHandler, getAllUserHandler, getSingleUserHandler, loginUserHandler, updateUserCoverImageHandler, updateUserProfileImageHandler } from '../controllers/user'
import upload from '../middlewares/file.upload'


const router=express.Router()

router.post('/users/register',validateDataMiddleware(createUserDataValidation),createUserHandler)
router.get('/users/:id',getSingleUserHandler)
router.get('/users',getAllUserHandler)
router.post('/users/login',validateDataMiddleware(loginUserDataValidation),loginUserHandler)
router.patch('/update-user-profile-image',checkAuth,upload.single('image'),updateUserProfileImageHandler as any)
router.patch('/update-user-cover-image',checkAuth,upload.single('image'),updateUserCoverImageHandler as any)


export default router  
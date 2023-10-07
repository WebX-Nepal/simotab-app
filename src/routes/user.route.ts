import express from 'express'

import { createUserDataValidation,loginUserDataValidation } from '../validation/user.validation'
import validateDataMiddleware from '../middlewares/validation.parse'
import { checkAuth } from '../middlewares/auth.middleware'
import { LoginWithGoogleHandler, createUserHandler, getAllUserHandler, getSingleUserHandler, loginUserHandler } from '../controllers/user'


const router=express.Router()

router.post('/users',validateDataMiddleware(createUserDataValidation),createUserHandler)
router.get('/users/:id',getSingleUserHandler)
router.get('/users',getAllUserHandler)
router.post('/users/login',checkAuth,validateDataMiddleware(loginUserDataValidation),loginUserHandler)
router.post('/users/login-with-google',LoginWithGoogleHandler)

export default router  
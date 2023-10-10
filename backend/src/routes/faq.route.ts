import express from 'express'
import { createFaqHandler, deleteFaqHandler, getAllFaqHandler, getSingleFaqHandler, upadateFaqHandler } from '../controllers/faq'
import validateDataMiddleware from '../middlewares/validation.parse'
import { CreateFaqDataValidation, updateFaqDataValidation } from '../validation/faq.validation'
import { checkAuth, checkRole } from '../middlewares/auth.middleware'
import { roles } from '../models/user.model'


const router=express.Router()


router.post("/faqs",checkAuth,checkRole(roles.Admin) as any,validateDataMiddleware(
    CreateFaqDataValidation),createFaqHandler)
router.get("/faqs/:id",getSingleFaqHandler)
router.get("/faqs",getAllFaqHandler)
router.patch("/faqs/:id",checkAuth,checkRole(roles.Admin) as any,validateDataMiddleware(updateFaqDataValidation),upadateFaqHandler)
router.delete("/faqs/:id",checkAuth,checkRole(roles.Admin) as any,deleteFaqHandler)



export default router 



import express from 'express'
import { createFaqHandler, deleteFaqHandler, getAllFaqHandler, getSingleFaqHandler, upadateFaqHandler } from '../controllers/faq'
import validateDataMiddleware from '../middlewares/validation.parse'
import { CreateFaqDataValidation, updateFaqDataValidation } from '../validation/faq.validation'


const router=express.Router()


router.post("/faqs",validateDataMiddleware(
    CreateFaqDataValidation),createFaqHandler)
router.get("/faqs/:id",getSingleFaqHandler)
router.get("/faqs",getAllFaqHandler)
router.patch("/faqs/:id",validateDataMiddleware(updateFaqDataValidation),upadateFaqHandler)
router.delete("/faqs/:id",deleteFaqHandler)



export default router 



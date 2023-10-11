import express from 'express'
import { createContactHandler, getSingleContactHandler,deleteContactHandler, getAllContactHandler, updateContactHandler } from '../controllers/contract'
import { checkAuth } from '../middlewares/auth.middleware';
import validateDataMiddleware from '../middlewares/validation.parse';
import { createContactDataValidation, updateContactDataValidation } from '../validation/contact.validation';


const router=express.Router()



router.post("/contacts",checkAuth,validateDataMiddleware(createContactDataValidation),createContactHandler as any)
router.get('/contacts',getAllContactHandler)
router.get('/contacts/:id',getSingleContactHandler)
router.patch('/contacts/:id',checkAuth,validateDataMiddleware(updateContactDataValidation),updateContactHandler)
router.delete('/contacts/:id',deleteContactHandler)




export default router
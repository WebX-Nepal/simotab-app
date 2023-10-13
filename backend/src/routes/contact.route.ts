import express from 'express'
import { createContactHandler, getSingleContactHandler,deleteContactHandler, getAllContactHandler, updateContactHandler, getMyAllContactsHandler } from '../controllers/contract'
import { checkAuth } from '../middlewares/auth.middleware';
import validateDataMiddleware from '../middlewares/validation.parse';
import { createContactDataValidation, updateContactDataValidation } from '../validation/contact.validation';
import { filterResults } from '../middlewares/search_filter_page';
import { ContactModel } from '../models/contract.model';


const router=express.Router()



router.post("/contacts",checkAuth,validateDataMiddleware(createContactDataValidation),createContactHandler as any)
router.get('/contacts',filterResults(ContactModel),getAllContactHandler)
router.get('/contacts/:id',getSingleContactHandler)
router.get('/contacts/my/all',checkAuth,getMyAllContactsHandler as any)
router.patch('/contacts/:id',checkAuth,validateDataMiddleware(updateContactDataValidation),updateContactHandler)
router.delete('/contacts/:id',deleteContactHandler)




export default router
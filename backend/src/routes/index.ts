import express from 'express'
import userRoute from './user.route'
import categoryRoute from './category.route'
import productRoute from './product.route'
import faqRoute from './faq.route'
import contactRoute from './contact.route'
import testinomialRoute from './testinomial.route'


const router=express.Router()
router.use('/',userRoute)
router.use('/',categoryRoute)
router.use('/',productRoute)
router.use('/',faqRoute)
router.use('/',contactRoute)
router.use('/',testinomialRoute)


export default router  
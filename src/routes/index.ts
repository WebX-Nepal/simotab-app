import express from 'express'
import userRoute from './user.route'
import categoryRoute from './category.route'
import productRoute from './product.route'

const router=express.Router()


router.use('/',userRoute)
router.use('/',categoryRoute)
router.use('/',productRoute)



export default router  
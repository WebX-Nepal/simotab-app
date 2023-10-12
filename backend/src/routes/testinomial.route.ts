import express from 'express'
import { createTestinomialHandler , deleteTestinomialHandler,getAllTestinomialHandler,getSingleTestinomialHandler,updateTestinomialHandler} from '../controllers/testinomial'
import upload from '../middlewares/file.upload'

const router=express.Router()


router.post("/testinomials",upload.single('image'),createTestinomialHandler)
router.get("/testinomials",getAllTestinomialHandler)
router.get("/testinomials/:id",getSingleTestinomialHandler)
router.patch("/testinomials/:id",updateTestinomialHandler)
router.delete("/testinomials/:id",deleteTestinomialHandler)


export default router
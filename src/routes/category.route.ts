import express from "express"

import validateDataMiddleware from "../middlewares/validation.parse"
import { createCategoryDataValidation, updateCategoryDataValidation } from "../validation/category.validation"
import { checkAuth } from "../middlewares/auth.middleware"


import { CreateCategoryHandler , deleteCategoryHandler, getAllCategoryHandler, getSingleCategoryHandler, updateCategoryHandler} from "../controllers/category"
const router=express.Router()



router.post("/categories",checkAuth,validateDataMiddleware(createCategoryDataValidation),CreateCategoryHandler as any)
router.get("/categories",getAllCategoryHandler)
router.get("/categories/:id",getSingleCategoryHandler)
router.delete('/categories/:id',deleteCategoryHandler)
router.patch('/categories/:id',validateDataMiddleware(updateCategoryDataValidation),updateCategoryHandler)


export default router 
import express from "express"

import validateDataMiddleware from "../middlewares/validation.parse"
import { createCategoryDataValidation, updateCategoryDataValidation } from "../validation/category.validation"
import { checkAuth, checkRole } from "../middlewares/auth.middleware"


import { CreateCategoryHandler , deleteCategoryHandler, getAllCategoryHandler, getSingleCategoryHandler, updateCategoryHandler} from "../controllers/category"
import { roles } from "../models/user.model"
const router=express.Router()



router.post("/categories",checkAuth,checkRole(roles.Admin) as any,validateDataMiddleware(createCategoryDataValidation),CreateCategoryHandler as any)
router.get("/categories",getAllCategoryHandler)
router.get("/categories/:id",getSingleCategoryHandler)
router.delete('/categories/:id',checkAuth,checkRole(roles.Admin) as any,deleteCategoryHandler)
router.patch('/categories/:id',checkAuth,checkRole(roles.Admin) as any,validateDataMiddleware(updateCategoryDataValidation),updateCategoryHandler)


export default router 
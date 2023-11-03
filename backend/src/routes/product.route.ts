import express from 'express'
import upload from '../middlewares/file.upload'

import { filterResults } from '../middlewares/search_filter_page'
import { ProductModel } from '../models/product.model'
import { createProductHandler , deleteProductHandler, getAllProductsHandler, getFeatureProduct, getsingleProductHandler, updateCoverUrlProductHandler , updateProductHandler} from '../controllers/products'
import validateDataMiddleware from '../middlewares/validation.parse'
import { createProductDataValidation, updateProductDataValidation } from '../validation/product.validation'
import { getsingleProductWithCategoryNameHandler } from '../controllers/products/get_product_with_category'
import { ParseFormDataIntoInt } from '../middlewares/parse.formdata.midddleware'
import { checkAuth, checkRole } from '../middlewares/auth.middleware'
import { roles } from '../models/user.model'

const router=express.Router()


router.post("/products",checkAuth,upload.single("image"),ParseFormDataIntoInt,validateDataMiddleware(createProductDataValidation),createProductHandler)
router.get("/products/:id",getsingleProductHandler)
router.post("/get-product-by-category",getsingleProductWithCategoryNameHandler)
router.get("/products",filterResults(ProductModel),getAllProductsHandler)
router.delete("/products/:id",checkAuth,checkRole(roles.Admin) as any,deleteProductHandler)
router.patch("/products/:id",checkAuth,checkRole(roles.Admin) as any,validateDataMiddleware(updateProductDataValidation),updateProductHandler)
router.patch("/products/change-thumbnail/:id",checkAuth,checkRole(roles.Admin) as any,upload.single("image"),updateCoverUrlProductHandler)
router.get("/get-feature-product",getFeatureProduct)




export default router 
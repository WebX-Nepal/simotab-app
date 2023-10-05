import express from 'express'
import upload from '../middlewares/file.upload'

import { filterResults } from '../middlewares/search_filter_page'
import { ProductModel } from '../models/product.model'
import { createProductHandler , deleteProductHandler, getAllProductsHandler, getsingleProductHandler, updateCoverUrlProductHandler , updateProductHandler} from '../controllers/products'

const router=express.Router()


router.post("/products",upload.single("image"),createProductHandler)
router.get("/products/:id",getsingleProductHandler)
router.get("/products",filterResults(ProductModel),getAllProductsHandler)
router.delete("/products/:id",deleteProductHandler)
router.patch("/products/:id",updateProductHandler)
router.patch("/products/change-thumbnail/:id",upload.single("image"),updateCoverUrlProductHandler)




export default router 
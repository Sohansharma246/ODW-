import express from "express";
import { isAdmin, requireSignIn } from "../middleware/authMiddleware.js";
import Formidable from "express-formidable";
import { brainTreePaymentController, braintreeTokenController, createProductController, deleteProductController, getProductController, getSingleProductController, productCategoryController, productCountController, productFiltersController, productListController, productPhotoController, realtedProductController, searchProductController, updateProductController } from "../controllers/Productcontroller.js";

const router = express.Router()
//create post
router.post('/create-product',requireSignIn,isAdmin,Formidable(),createProductController)

//get all
router.get('/get-product',getProductController)

//fet single
router.get('/get-singleproduct/:slug',getSingleProductController)

//get photo
router.get('/get-photo/:pid',productPhotoController)

//delete product
router.delete('/delete-product/:pid',requireSignIn,isAdmin,deleteProductController)

//delete product
router.put('/update-product/:pid',requireSignIn,isAdmin,Formidable(),updateProductController)

//delete product
router.post('/filter-product',productFiltersController)

//count  product
router.get('/count-product',productCountController)

// product list based on 
router.get('/list-product/:page',productListController)

// search
router.get('/search/:keyword',searchProductController)

// search
router.get('/related-product/:pid/:cid',realtedProductController)

//category wise product
router.get('/product-category/:slug',productCategoryController)

//braintree token
router.get('/braintree/token',braintreeTokenController)

//braintree payment
router.post('/braintree/payment',requireSignIn,brainTreePaymentController)

 export default router
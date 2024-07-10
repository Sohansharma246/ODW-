import express from "express";
import { categoryControlller, createCategoryController, deleteCategoryCOntroller, singleCategoryController, updateCategoryController } from "../controllers/CategoryController.js";
import { isAdmin, requireSignIn } from "../middleware/authMiddleware.js";
const router = express.Router()

//create category
router.post('/create-category',requireSignIn,isAdmin,createCategoryController)

//update category
router.put('/update-category/:id',requireSignIn,isAdmin,updateCategoryController)

//get
router.get('/category',categoryControlller)

//single
router.get('/single-category/:slug',singleCategoryController)

//delete
router.delete('/delete-category/:id',requireSignIn,isAdmin,deleteCategoryCOntroller)
export default router
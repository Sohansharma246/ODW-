import express from "express";
import {forgotPasswordController, getAllOrdersController, getOrdersController, loginController,orderStatusController,registerController,testController, updateProfileController} from  '../controllers/authcontroller.js'
import { isAdmin, requireSignIn } from "../middleware/authMiddleware.js";
const router = express.Router()

//regidter
router.post('/register',registerController)

//login
router.post('/login',loginController)

//forgot password
router.post("/forgot-password",forgotPasswordController)

//test
router.get('/test',requireSignIn,isAdmin,testController)

//protected route
router.get("/user-auth",requireSignIn,(req,res)=>{
    res.status(200).send({ok:true})
})

//protected*********** ADMIN    route
router.get("/admin-auth",requireSignIn,isAdmin,(req,res)=>{
    res.status(200).send({ok:true})
})


//update profile
router.put('/profile',requireSignIn,updateProfileController)

//order
router.get('/orders',requireSignIn,getOrdersController)

//order admin
router.get('/all-orders',requireSignIn,isAdmin,getAllOrdersController)

//order admin  update
router.put('/order-status/:orderId',requireSignIn,isAdmin,orderStatusController)

export default router;
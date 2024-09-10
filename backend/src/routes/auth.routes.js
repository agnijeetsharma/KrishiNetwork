
import { registerUser ,loginUser} from "../controllers/user.controller.js"
import { VerifyFarmer } from "../controllers/farmer.controller.js";
import { verifyBuyer } from "../controllers/buyer.controller.js";
// import { ver } from "jsonwebtoken";
// import express from 'express'
import { verifyJWT } from "../middleware/auth.middleware.js";
import { Router } from "express";
import { AddCrop,removeCrop,updateCrop } from "../controllers/crop.controller.js";
const router=Router()

router.route("/register").post(registerUser)
router.route("/login").post(loginUser)
router.route("/verify-farmer").post(verifyJWT,VerifyFarmer)
router.route("/verify-buyer").post(verifyJWT,verifyBuyer)
router.route("/addCrop").post(verifyJWT,AddCrop)
router.route("/updateCrop").post(verifyJWT,updateCrop)
router.route("/removeCrop").post(verifyJWT,removeCrop)

export  default router



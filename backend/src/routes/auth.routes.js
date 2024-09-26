import { registerUser, loginUser } from "../controllers/user.controller.js";
import { getFarmer, getFarmerCrops,getParticularFarmerCrop, VerifyFarmer } from "../controllers/farmer.controller.js";
import { cropAddedByBuyer, getAllBuyerCrop,removeCropAddedByBuyer, verifyBuyer } from "../controllers/buyer.controller.js";
// import { ver } from "jsonwebtoken";
// import express from 'express'
import { verifyJWT } from "../middleware/auth.middleware.js";
import { Router } from "express";
import {
  AddCrop,
  getAllCrops,
  removeCrop,
  updateCrop,
} from "../controllers/crop.controller.js";
import {
  getAllMessages,
  removeMessage,
  sendMessage,
  updateMessage,
} from "../controllers/message.controller.js";
import { AddLike } from "../controllers/likes.controller.js";
import { upload } from "../middleware/muter.middleware.js";
import { acceptConnection, getAllAcceptedConnections, getAllPendingRequest, getAllUnacceptedRequest, makeConnection, unfollowConnection } from "../controllers/connection.controller.js";
const router = Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/verify-farmer").post(verifyJWT, VerifyFarmer);
router.route("/verify-buyer").post(verifyJWT, verifyBuyer);
router.route("/addCrop").post(
  verifyJWT,
  upload.fields([
    {
      name: "cropImage",
      maxCount: 1,
    },
  ]),
  AddCrop
);
router.route("/updateCrop").post(verifyJWT, updateCrop);
router.route("/removeCrop").post( removeCrop);
router.route("/sendMessage").post(verifyJWT, sendMessage);
router.route("/updateMessage").post(verifyJWT, updateMessage);
router.route("/removeMessage").post(verifyJWT, removeMessage);
router.route("/allMessage").get(verifyJWT, getAllMessages);
router.route("/like").post(AddLike);
router.route("/allCrops").get(getAllCrops)
router.route("/farmerCrops").get(verifyJWT,getFarmerCrops)
router.route("/buyerCrops").get(verifyJWT,getAllBuyerCrop)
router.route("/buyer-addCrops").post(verifyJWT,cropAddedByBuyer)
router.route("/buyer-removeCrops").post(verifyJWT,removeCropAddedByBuyer)
router.route("/farmerOneCrop").get(getParticularFarmerCrop)
router.route("/make-connection").post(verifyJWT,makeConnection)
router.route("/accept-request").post(verifyJWT,acceptConnection)
router.route("/unfollow-connection").post(unfollowConnection)
router.route("/unaccepted-request").post(getAllUnacceptedRequest)
router.route("/pending-requests").get(verifyJWT,getAllPendingRequest)
router.route("/get-farmer").post(getFarmer);
router.route("/all-connections").get(verifyJWT,getAllAcceptedConnections)


export default router;

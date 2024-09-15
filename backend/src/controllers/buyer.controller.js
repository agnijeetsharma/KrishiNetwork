import { ApiError } from "../utils/ApiError.js";
import { AsyncHandler } from "../utils/asyncHandler.js";
import { User } from "../models/user.models.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { Buyer } from "../models/buyer.models.js";
import { Crop } from "../models/crop.models.js";

const verifyBuyer = AsyncHandler(async (req, res, next) => {
  const { name, location, phone } = req.body;
  if (!name || !location || !phone) {
    throw new ApiError(400, "All fields are required");
  }

  const userId = req.userId;
  const user = await User.findById(userId);

  if (!user) {
    throw new ApiError(404, "User not found");
  }

  let buyer = await Buyer.findOne({ user: userId });
  if (buyer) {
    return res.status(200).json(new ApiResponse(200, buyer, "Buyer already verified"));
  }

  const newBuyer = await Buyer.create({
    name,
    location,
    phone,
    user: userId,
    verified: true,
    crop:[]
  });
  await newBuyer.save()

  if (!newBuyer) {
    throw new ApiError(500, "Failed to create buyer");
  }

  user.verifiedBuyer = newBuyer._id;
  await user.save();

  return res
    .status(200)
    .json(new ApiResponse(200, newBuyer, "Buyer verified successfully"));
});
const cropAddedByBuyer=AsyncHandler(async(req,res)=>{
  const {cropId}=req.body;
  if(!cropId)throw new ApiError(400,"cropId not found")
  const buyerId=req.user.verifiedBuyer
if(!buyerId)throw new ApiError(400,"buyerId not found middleware problem")
  console.log(buyerId)
  const buyer=await Buyer.findById(buyerId)
  // console.log(buyer);
if(!buyer)throw new ApiError(400,"buyer not found ")

  // console.log(buyer,cropId)
 buyer.crop.push(cropId);
await buyer.save();
return res.status(200).json(new ApiResponse(200,buyer,"Crop added successfully"))



})

const getAllBuyerCrop=AsyncHandler(async(req,res)=>{
  const buyerId=req.user.verifiedBuyer
  if(!buyerId)throw new ApiError(400,"buyerId not found")
    const buyer=await Buyer.findById(buyerId);
  const crops=await Crop.find({_id:{$in:buyer.crop}});
  if(!crops)throw new ApiError(400,"crops not found")
  console.log(crops);
  return res.status(200).json(new ApiResponse(400,crops,"all crop got successfully"));

})
const removeCropAddedByBuyer=AsyncHandler(async(req,res)=>{
  const {cropId}=req.body
    const buyerId=req.user.verifiedBuyer
    if(!buyerId)throw new ApiError(400,"buyerId not found")
      const buyer=await Buyer.findById(buyerId)
    if(!buyer)throw new ApiError(400,"buyer not found")
      const index=buyer.crop.indexOf(cropId)
    buyer.crop.splice(index,1);
    await buyer.save()
    return res.status(200).json(new ApiResponse(200,buyer,"Crop removed successfully"));
})

export { verifyBuyer ,cropAddedByBuyer,getAllBuyerCrop,removeCropAddedByBuyer};

import { ApiError } from "../utils/ApiError.js";
import { AsyncHandler } from "../utils/asyncHandler.js";
import { User } from "../models/user.models.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { Buyer } from "../models/buyer.models.js";

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
    crop
  });

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
  const buyer=req.user;
if(!buyer)throw new ApiError(400,"buyer not found middleware problem")
  // console.log(buyer,cropId)
 buyer.crop.push(cropId);
await buyer.save();
return res.status(200).json(new ApiResponse(200,buyer,"Crop added successfully"))



})

const getAllBuyerCrop=AsyncHandler(async(req,res)=>{

})
const removeCropAddedByBuyer=AsyncHandler(async(req,res)=>{

})

export { verifyBuyer ,cropAddedByBuyer,getAllBuyerCrop,removeCropAddedByBuyer};

import { User } from "../models/user.models.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { AsyncHandler } from "../utils/asyncHandler.js";
import { Farmer } from "../models/farmer.models.js";
import { Crop } from "../models/crop.models.js";
const VerifyFarmer = AsyncHandler(async (req, res, next) => {
  const userId = req.userId;

  const user = await User.findById(userId);

  if (!user) {
    throw new ApiError(404, "User not found");
  }

  let farmer = await Farmer.findOne({ user: userId });

  if (farmer) {
    req.farmerId = farmer._id;
    return res
      .status(400)
      .json(
        new ApiError(
          400,
          { farmer: farmer },
          "Farmer details are already verified for this user"
        )
      );
  }

  const { location, phone, name } = req.body;

  if (!location || !phone || !name) {
    throw new ApiError(400, "Please fill all the fields");
  }

  const newFarmer = await Farmer.create({
    location,
    phone,
    name,
    verified: true,
    user: userId,
  });

  user.verifiedFarmer = newFarmer._id;
  await user.save();

  if (!newFarmer) {
    throw new ApiError(500, "Something went wrong while verifying farmer");
  }

  return res
    .status(200)
    .json(
      new ApiResponse(200, { farmer: newFarmer }, "Farmer details confirmed")
    );
});

const getFarmerCrops = AsyncHandler(async (req, res) => {
  const farmer = req.user;

  const Crops = await Crop.find({ farmerId: farmer.verifiedFarmer });
  console.log(Crops);
  if (!Crops) throw new ApiError(400, "crops not found");
  return res
    .status(200)
    .json(new ApiResponse(200, Crops, "All crops fetched successfully"));
});
const getParticularFarmerCrop = AsyncHandler(async (req, res) => {
  const { farmerId } = req.body;
  if (!farmerId) throw new ApiError(400, "farmer not found");
  const farmer = await Farmer.findById(farmerId);
  if (!farmer) throw new ApiError(400, "farmer not found");
  return res
    .status(200)
    .json(new ApiResponse(200, farmer, "farmer fetched successfully"));
});
const getFarmer = AsyncHandler(async (req, res) => {
  const { farmerId } = req.body;

  if (!farmerId) throw new ApiError(400, "farmer id not found");
  const farmer = await Farmer.findById(farmerId);
  if (!farmer) throw new ApiError(400, "farmer not found or id is not correct");
  res
    .status(200)
    .json(new ApiResponse(200, farmer, "farmer found successfully"));
});
export { VerifyFarmer, getFarmerCrops, getParticularFarmerCrop, getFarmer };

import { Crop } from "../models/crop.models.js";
import { AsyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { Farmer } from "../models/farmer.models.js";
import { User } from "../models/user.models.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";

const AddCrop = AsyncHandler(async (req, res) => {
  const { title, description } = req.body;

  if (!title || !description) throw new ApiError(400, "All fileds requried");
  const farmerId = req.user.verifiedFarmer;
  const farmer = await Farmer.findById(farmerId);
  if (!farmer) {
    throw new ApiError(400, "somthing went wrong when fatching farmer");
  }
  const cropImagePath = req.files?.cropImage[0]?.path;

  if (!cropImagePath) throw new ApiResponse(400, "Crop image not found");
  const imagePath = await uploadOnCloudinary(cropImagePath);

  const crop = await Crop.create({
    title: title,
    description: description,
    farmerId: farmerId,
    cropImage: imagePath.url,
  });
  await crop.save();
  farmer.crops.push(crop._id);
  await farmer.save();
  return res
    .status(200)
    .json(
      new ApiResponse(
        200,
        { crop: crop, farmer: farmer },
        "Crop added successfully"
      )
    );
});
const updateCrop = AsyncHandler(async (req, res) => {
  const { cropId, title, description } = req.body;

  if (!cropId || (!title && !description)) {
    throw new ApiError(
      400,
      "Please provide the crop ID and at least one field to update."
    );
  }

  const farmerId = req.user.verifiedFarmer;

  if (!farmerId) {
    throw new ApiError(400, "Something went wrong when fetching the farmer.");
  }
  const updateFields = {};
  if (title) updateFields.title = title;
  if (description) updateFields.description = description;

  const crop = await Crop.findOneAndUpdate(
    { _id: cropId },
    { $set: updateFields },
    { new: true, runValidators: true }
  );

  if (!crop) {
    throw new ApiError(
      400,
      "Failed to update the crop. Crop not found or doesn't belong to the farmer."
    );
  }

  return res
    .status(200)
    .json(new ApiResponse(200, crop, "Crop updated successfully"));
});
const removeCrop = AsyncHandler(async (req, res) => {
  const { cropId, farmerId } = req.body;

  if (!cropId) throw new ApiError(400, "id not found");

  const farmer = await Farmer.findById(farmerId);
  if (!farmer) {
    throw new ApiError(400, "Farmer not found");
  }

  const updateFarmer = await Farmer.findOneAndUpdate(
    { _id: farmerId, crops: cropId },
    { $pull: { crops: cropId } },
    { new: true }
  );

  await Crop.findByIdAndDelete(cropId);

  if (!updateFarmer) {
    throw new ApiError(
      404,
      "Farmer not found or crop not found in farmer's crops"
    );
  }
  return res
    .status(200)
    .json(new ApiResponse(200, updateFarmer, "Crop removed successfully"));
});

const getAllCrops = AsyncHandler(async (req, res) => {
  const allCrops = await Crop.find({});
  if (!allCrops)
    throw new ApiError(400, "something went wrong when fetching crops from db");

  return res
    .status(200)
    .json(new ApiResponse(200, allCrops, "All crops fetched successfully"));
});

export { AddCrop, updateCrop, removeCrop, getAllCrops };

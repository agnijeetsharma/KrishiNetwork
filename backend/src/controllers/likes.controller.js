import { Like } from "../models/likes.models.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { Message } from "../models/message.models.js";
import { Crop } from "../models/crop.models.js";
import { AsyncHandler } from "../utils/asyncHandler.js";

const AddLike = AsyncHandler(async (req, res, next) => {
  const { userId, modelType, modelId } = req.body;
  // console.log(userId, modelType, modelId);
  if (!userId || !modelType || !modelId)
    throw new ApiError(400, "All field Requried");
  if (modelType === "Message") {
    var likeable = await Message.findById(modelId);
  } else if (modelType === "Crop") {
    var likeable = await Crop.findById(modelId);
  } else {
    throw new ApiError(400, "ModelType should be correct");
  }
  const findLikedByUser = await Like.findOne({
    userId: userId,
    likeable: modelId,
    onModel: modelType,
  });
  if (findLikedByUser) {
    likeable.like.pull(findLikedByUser._id);
    await likeable.save();
    await Like.findByIdAndDelete(findLikedByUser._id);
    return res
      .status(200)
      .json(new ApiResponse(200, findLikedByUser, "Like Removed"));
  }
  const like = await Like.create({
    userId: userId,
    onModel: modelType,
    likeable: modelId,
  });
  if (!like) throw new ApiError(400, "Like does not created");
  // console.log(likeable);
  likeable.like.push(like._id);
  await likeable.save();
  return res
    .status(200)
    .json(new ApiResponse(200, like, likeable, "Like Added Successfully"));
});
export { AddLike };

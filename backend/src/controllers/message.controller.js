import { Message } from "../models/message.models.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { AsyncHandler } from "../utils/asyncHandler.js";

const sendMessage = AsyncHandler(async (req, res) => {
  const { content, receiverId } = req.body;
  if (!content || !receiverId)
    throw new ApiError(400, "Missing required fields");

  const senderId = req.userId;
  const message = await Message.create({
    content,
    senderId,
    receiverId,
  });
  await message.save()
  if (!message) throw new ApiError(400, "unsuccessful ");
  return res
    .status(200)
    .json(new ApiResponse(200, message, "message sent successfully"));
});
const updateMessage = AsyncHandler(async (req, res) => {
  const { content, messageId } = req.body;
  if (!content || !messageId)
    throw new ApiError(400, "All filedds are requried");
  const message = await Message.findByIdAndUpdate(
    messageId,
    { content },
    {
      new: true,
    }
  );
  if (!message) throw new ApiError(400, "error in updating message");
  return res
    .status(200)
    .json(new ApiResponse(200, message, "message updated successfully"));
});
const removeMessage = AsyncHandler(async (req, res) => {
  const { messageId } = req.body;
  if (!messageId) throw new ApiError(400, "message id did not received");
//   console.log(message);
//   if (!message) {
//       throw new ApiError(400, "Message was not there");
//     }
    const message = await Message.findByIdAndDelete(messageId);
  return res
    .status(200)
    .json(new ApiResponse(200, message, "message remove successfully"));
});
const getAllMessages = AsyncHandler(async (req, res) => {
  const { receiverId } = req.body;
  const senderId = req.user._id;
  console.log(senderId)
  console.log(receiverId)
  if (!receiverId) {
    throw new ApiError(400, "Receiver ID must be provided.");
  }

  const messages = await Message.find({
    $or: [
      { senderId: senderId, receiverId: receiverId },
      { senderId: receiverId, receiverId: senderId },
    ],
  }).populate("senderId receiverId");
  console.log(messages)

  if (!messages.length) {
    throw new ApiError(400, "No messages found.");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, messages, "Messages retrieved successfully."));
});

export { sendMessage, getAllMessages, updateMessage, removeMessage };

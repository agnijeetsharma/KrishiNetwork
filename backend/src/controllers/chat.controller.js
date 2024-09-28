import { ApiError } from "../utils/ApiError.js";
import { AsyncHandler } from "../utils/asyncHandler.js";
import { Chat} from "../models/chat.models.js"
import { ApiResponse } from "../utils/ApiResponse.js";

const getAllChatsMessages=AsyncHandler(async(req,res)=>{
     const {userId1}=req.body;
     const userId2=req.userId
     if(!userId1,!userId2)throw new ApiError(400,"id requeried");
     console.log(userId1)
     const chatId=  [userId1, userId2].sort().join("_")
     const messages = await Chat.find({
        $or: [
          { chatId:chatId },
          
        ],
      }).sort('timestamp');
      if(!messages)throw new ApiError(400,"no message found")
     res.status(200).json(new ApiResponse(200,messages,"chat recoverd"));
})

export {getAllChatsMessages}
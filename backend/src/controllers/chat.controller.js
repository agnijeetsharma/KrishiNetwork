import { ApiError } from "../utils/ApiError";
import { AsyncHandler } from "../utils/asyncHandler";
import Chat from "../models/chat.models"
import { ApiResponse } from "../utils/ApiResponse";

const getAllChatsMessages=AsyncHandler(async(reeq,res)=>{
     const {receiver,sender}=re.body;
     if(receiver,sender)throw new ApiError(400,"id requeried");
     const messages = await Chat.find({
        $or: [
          { sender: userId1, receiver: userId2 },
          { sender: userId2, receiver: userId1 },
        ],
      }).sort('timestamp');
      if(!messages)throw new ApiError(400,"no message found")
     res.status(200).json(new ApiResponse(200,messages,"chat recoverd"));
})

export {getAllChatsMessages}
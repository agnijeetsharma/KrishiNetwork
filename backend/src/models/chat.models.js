import mongoose from "mongoose";
const chatSchema = new mongoose.Schema({
  sender: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  receiver: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  messsages: {
    type: String,
    required: true,
  },
  timestamp: { type: Date, default: Date.now },
});

export const Chat = mongoose.model("Chat", chatSchema);

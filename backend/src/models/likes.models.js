import mongoose from "mongoose";

const LikesSchema = new mongoose.Schema({
  likeable: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    refPath: 'onModel' 
  },
  onModel: {
    type: String,
    required: true,
    enum: ['Message', 'Crop'] 
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  }
}, { timestamps: true });

export const Like = mongoose.model('Like', LikesSchema);

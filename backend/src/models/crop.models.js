import mongoose from "mongoose";
const CropSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      requried: true,
    },
    cropId: {
        
    },
  },
  { timestamps: true }
);

export const Crop = mongoose.model("Crop", CropSchema);

import mongoose from "mongoose";
const CropSchema = new mongoose.Schema(
  {
   
    farmerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Farmer'
    },
    description: {
      type: String,
      requried: true,
    },
    title: {
      type: String,
      requried: true,
    },
    cropImage:{
      type:String,
      required:true
    },
    like:[
      {
        type:mongoose.Schema.Types.ObjectId,
        ref:'Like'
      }
    ]
  },
  { timestamps: true }
);

export const Crop = mongoose.model("Crop", CropSchema);

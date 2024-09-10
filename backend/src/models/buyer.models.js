import mongoose from "mongoose";

const BuyerSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    location: { type: String, required: true },
    buyerId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    phone: { type: String, required: true },
    verified: {
      type: Boolean,
     default:false
    },
    crop:[
      {
        type:mongoose.Schema.Types.ObjectId,
        ref:'Crop'
      }
    ]
  },
  { timestamps: true }
);

export const Buyer = mongoose.model("Buyer", BuyerSchema);

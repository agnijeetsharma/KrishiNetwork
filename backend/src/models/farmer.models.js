import mongoose from "mongoose";
import { User } from "./user.models.js";

const FarmerSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    farmerId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    location: { type: String, required: true },
    phone: { type: String, required: true },
    verified: {
      type: Boolean,
      default: false,
    },
    crops:[
      {
        type:mongoose.Schema.Types.ObjectId,
        ref:'Crop'
      }
    ],
    connections:[
      {
        type: mongoose.Schema.Types.ObjectId,
        ref:'User'
      }
    ]
  },
  { timestamps: true }
);

export const Farmer = mongoose.model("Farmer", FarmerSchema);

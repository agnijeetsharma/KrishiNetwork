import mongoose from "mongoose";

const UserSchema = new mongoose.model.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: {
      type: String,
      enum: ["farmer", "Buyer"],
      required: true,
      default: "user",
    },
  },
  { timestamps: true }
);



export const User = mongoose.model("User", UserSchema);

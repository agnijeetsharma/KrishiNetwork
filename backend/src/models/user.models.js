import mongoose from "mongoose";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'
const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: {
      type: String,
      enum: ["farmer", "Buyer"],  // Enum values should match the expected roles
      required: true,
      default: "User",  
    },
    refreshToken:{
      type:String,
      
    },
    verifiedFarmer:{
      type: mongoose.Schema.Types.ObjectId,
    ref: "Farmer",
    },
    verifiedBuyer:{
      type: mongoose.Schema.Types.ObjectId,
    ref: "Buyer",
    }
  },
  { timestamps: true }
);


UserSchema.pre('save', async function (next) {
  if (!this.isModified("password")) return next(); // Skip hashing if password hasn't changed
  this.password = await bcrypt.hash(this.password, 10); 
  next();
});

UserSchema.methods.isPasswordCorrect = async function (userPassword) {
  try {
    return await bcrypt.compare(userPassword, this.password); 
  } catch (err) {
    console.error("Error when comparing password:", err); 
    return false;
  }
};

UserSchema.methods.generateAceessToken=function (){
  return jwt.sign({
    _id:this._id,
    role:this.role
  },
  process.env.ACCESSTOKEN_SECRET,
  {
    expiresIn: process.env.ACCESSTOKEN_EXPIRAY,
  }
)
}
UserSchema.methods.generateRefreshToken = function () {
  return jwt.sign(
    {
      id: this._id,
    },
    process.env.REFRESHTOKEN_SECRET,
    {
      expiresIn: process.env.REFRESHTOKEN_EXPIRAY,
    }
  );
};

export const User = mongoose.model("User", UserSchema);

import { Farmer } from "../models/farmer.models.js";
import { User } from "../models/user.models.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { AsyncHandler } from "../utils/asyncHandler.js";
import { Buyer } from "../models/buyer.models.js";
// import { Farmer } from "../models/farmer.models.js";

const generateAccessAndRefereshTokens = async (userId) => {
  try {
    console.log("Generating tokens for user:", userId);
    const user = await User.findById(userId);
    if (!user) throw new ApiError(400, "User not found");

    const accessToken = user.generateAceessToken();
    const refreshToken = user.generateRefreshToken();

    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false });

    return { accessToken, refreshToken };
  } catch (error) {
    // console.error("Error generating tokens:", error);
    throw new ApiError(500, "Something went wrong while generating tokens");
  }
};
const registerUser = AsyncHandler(async (req, res) => {
  const { name, email, password, role } = req.body;

  if (!["farmer", "Buyer"].includes(role)) {
    throw new ApiError(400, "Role should be valid");
  }

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new ApiError(400, "Email is already in use");
  }

  const user = await User.create({ name, email, password, role });
  const createdUser = await User.findById(user._id).select(
    "-password -refreshToken"
  );
  if (!user) {
    throw new ApiError(400, "Problem registering user");
  }

  return res
    .status(201)
    .json(new ApiResponse(201, createdUser, "User created successfully"));
});

const loginUser = AsyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) throw new ApiError(400, "All fields are required");

  const user = await User.findOne({ email })
    .populate("verifiedBuyer")
    .populate("verifiedFarmer");

  if (!user) throw new ApiError(400, "Invalid email or password");

  const isValidPassword = await user.isPasswordCorrect(password);
  if (!isValidPassword) throw new ApiError(400, "Invalid email or password");

  const { accessToken, refreshToken } = await generateAccessAndRefereshTokens(user._id);

  const loggedInUser = await User.findById(user._id).select("-password -refreshToken");
  const cookieOptions = { httpOnly: true, secure: true };

  // Check if user is a verified farmer
  if (user.role === "farmer" && user.verifiedFarmer && user.verifiedFarmer.verified) {
    const newFarmer = await Farmer.findById(user.verifiedFarmer);
    return res
      .status(200)
      .cookie("accessToken", accessToken, cookieOptions)
      .cookie("refreshToken", refreshToken, cookieOptions)
      .json(
        new ApiResponse(
          200,
          { user: loggedInUser, farmer: newFarmer, accessToken, refreshToken },
          "User logged in successfully as a Farmer"
        )
      );
  }

  // Check if user is a verified buyer
  if (user.role === "Buyer" && user.verifiedBuyer && user.verifiedBuyer.verified) {
    const newBuyer = await Buyer.findById(user.verifiedBuyer);
    return res
      .status(200)
      .cookie("accessToken", accessToken, cookieOptions)
      .cookie("refreshToken", refreshToken, cookieOptions)
      .json(
        new ApiResponse(
          200,
          { user: loggedInUser, Buyer: newBuyer, accessToken, refreshToken },
          "User logged in successfully as a Buyer"
        )
      );
  }

  // Default response when the user is neither verified farmer nor verified buyer
  return res
    .status(200)
    .cookie("accessToken", accessToken, cookieOptions)
    .cookie("refreshToken", refreshToken, cookieOptions)
    .json(
      new ApiResponse(
        200,
        { user: loggedInUser, accessToken, refreshToken },
        "User logged in successfully"
      )
    );
});
export { registerUser, loginUser };
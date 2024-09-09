import { User } from "../models/user.models.js";
import { AsyncHandler } from "../utils/asyncHandler.js";

const registerUser = AsyncHandler(async (req, res) => {
  const { name, email, password, role } = req.body();
  if (!["Farmer", "Buyer"].includes(role)) {
    throw new APIError(400,"Role should be valid")
  }
//    const getHashedPassword()
  const user=await User.create({
    name,
    email,
    password,
    role
    });
  
});
export { registerUser };

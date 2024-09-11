import { AsyncHandler } from "./asyncHandler";
import fs, { unlinkSync } from "fs";
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key:process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})
const uploadOnCloudinary = AsyncHandler(async (localFilePath) => {
  try {
    if (!localFilePath){
    console.log("file path not found");
    return null;
    }
    const uploadImage = cloudinary.v2.uploader.upload(localFilePath,{
        resource_type: "auto"
    });
    console.log(uploadImage);
    fs.unlinkSync(localFilePath)
    return uploadImage
  } catch (err) {
    console.log(err);
    fs.unlinkSync(localFilePath)
    return null
  }
});

export { uploadOnCloudinary };

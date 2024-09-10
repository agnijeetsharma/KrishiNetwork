import mongoose from "mongoose"

 const connectDb=async ()=>{
    try{
        // console.log(process.env.MONGODB_URI)
        const connectionInstance = await mongoose.connect(process.env.MONGODB_URI)
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
       
    }
    catch(err)
    {
        console.log("MONGODB connection FAILED ", err);
        process.exit(1)
    }
 }
 export default connectDb

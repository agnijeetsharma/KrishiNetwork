import { connection, connections } from "mongoose";
import { ApiError } from "../utils/ApiError";
import { AsyncHandler } from "../utils/asyncHandler";
import { ApiResponse } from "../utils/ApiResponse";

const makeConnection = AsyncHandler(async (req, res) => {
  const { receiver, sender } = req.body;
  if (!receiver || !sender)
    throw new ApiError(400, "something went wrong,Id requried");

  const connection = new connections({
    receiver: receiver,
    sender: sender,
    status: "pending",
  });
  if (!connection)
    throw new ApiError(400, "somthing went wrong in making connection");
  res
    .status(200)
    .json(new ApiResponse(200, connection, "request sended successfully"));
});
const acceptConnection = AsyncHandler(async (req, res) => {
  const { receiver, sender } = req.body;
  if (!receiver || !sender) throw new ApiError(400, "something went wrong,Id");
  const connection = await connections.findOne({
    receiver: receiver,
    sender: sender,
  });
  if (!connection) throw new ApiError(400, "Invalid request");
  if (connection.status === "accepted")
    throw new ApiError(400, "connection already accepted");
  connection.status = "accepted";
  await connection.save();
  res.status(200).json(new ApiResponse(200, connection, "connection accepted"));
});
const getAllAcceptedConnections=AsyncHandler(async(req,res)=>{
    const {receiver,sender}=req.body;
    if(!receiver,!sender)throw new ApiError(400,"valid id requried");
    const connections=await connections.find().populate('receiver sender').exec();
    res.status(200).json(new ApiResponse(200,connections,"all connections"));
})
const getAllPendingRequest=AsyncHandler(async(req,res)=>{
    const {receiver,sender}=req.body;
    if(!receiver,!sender)throw new ApiError(400,"valid id requried");

})
const getAllUnacceptedRequest=AsyncHandler(async(req,res)=>{
    const {receiver,sender}=req.body;
    if(!receiver,!sender)throw new ApiError(400,"valid id requried");
})
export { makeConnection,acceptConnection ,getAllAcceptedConnections,getAllPendingRequest,getAllUnacceptedRequest};

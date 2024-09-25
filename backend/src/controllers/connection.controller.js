// import { connection, connections } from "mongoose";
import { ApiError } from "../utils/ApiError.js";
import { AsyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { Connections } from "../models/connection.models.js";

const makeConnection = AsyncHandler(async (req, res) => {
  const { receiver, sender } = req.body;
  if (!receiver || !sender)
    throw new ApiError(400, "something went wrong,Id requried");

  const connection = new Connections({
    receiver: receiver,
    sender: sender,
    status: "pending",
  });

  if (!connection)
    throw new ApiError(400, "somthing went wrong in making connection");
  await connection.save();
  res
    .status(200)
    .json(new ApiResponse(200, connection, "request sended successfully"));
});
const acceptConnection = AsyncHandler(async (req, res) => {
  const { receiver, sender } = req.body;
  if (!receiver || !sender) throw new ApiError(400, "something went wrong,Id");
  const connection = await Connections.findOne({
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
const unfollowConnection = AsyncHandler(async (req, res) => {
  const { receiver, sender } = req.body;
  if (!receiver || !sender) throw new ApiError(400, "something went wrong,Id");
  const connection = await Connections.findOne({
    receiver: receiver,
    sender: sender,
  });
  if (!connection) throw new ApiError(400, "Invalid request");
  if (connection.status === "unfollowed")
    throw new ApiError(400, "connection already unfollowed");
  connection.status = "unfollowed";
  await connection.save();
  res
    .status(200)
    .json(new ApiResponse(200, connection, "connection unfollowed"));
});
const getAllAcceptedConnections = AsyncHandler(async (req, res) => {
  const { receiver, sender } = req.body;
  if ((!receiver, !sender)) throw new ApiError(400, "valid id requried");
  const connections = await connections
    .find()
    .populate("receiver sender")
    .exec();
  res.status(200).json(new ApiResponse(200, connections, "all connections"));
});
const getAllPendingRequest = AsyncHandler(async (req, res) => {
  const { receiver, sender } = req.body;
  if ((!receiver, !sender)) throw new ApiError(400, "valid id requried");
  const request = await Connections.find({ sender: sender, status: "pending" })
    .populate("receiver sender")
    .exec();
});
const getAllUnacceptedRequest = AsyncHandler(async (req, res) => {
  const { receiver, sender } = req.body;
  if ((!receiver, !sender)) throw new ApiError(400, "valid id requried");
  const request = await Connections.find({
    receiver: receiver,
    status: "pending",
  })
    // .populate("receiver sender")  //pouplate will join the user and with  the id and will find the whole document associated with this id
    // .exec();           //handle promises well
  if (!request) throw new ApiError(400, "request not found");
  res.status(200).json(new ApiResponse(200, request, "all unaccepted request"));
});
export {
  makeConnection,
  acceptConnection,
  getAllAcceptedConnections,
  getAllPendingRequest,
  getAllUnacceptedRequest,
  unfollowConnection
};

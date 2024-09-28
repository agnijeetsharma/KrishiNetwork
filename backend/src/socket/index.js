import { app } from "../app.js";
import http from "http";
import { Server } from "socket.io";
import { Chat } from "../models/chat.models.js";

export const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000", 
    methods: ["GET", "POST"],
  },
});


const connectedUsers = {};

io.on("connection", (socket) => {
//   console.log("A user connected:", socket.id);

  
  socket.on("joinRoom", ({ senderId, receiverId }) => {
   
    connectedUsers[senderId] = socket.id;
    // console.log(`User ${senderId} connected with socket ID: ${socket.id}`);
  });

  socket.on("sendMessage", async ({ senderId, receiverId, message }) => {
    try {
     
      const newMessage = new Chat({
        sender: senderId,
        content: message,
        chatId: [senderId, receiverId].sort().join("_"),  
      });
      await newMessage.save();
      const receiverSocketId = connectedUsers[receiverId];

      if (receiverSocketId) {
        io.to(receiverSocketId).emit("receiveMessage", newMessage);
      }

    
      io.to(socket.id).emit("receiveMessage", newMessage);
    } catch (error) {
      console.error("Error sending message:", error);
    }
  });

 
  socket.on("disconnect", () => {
    console.log("A user disconnected:", socket.id);
   
    for (let userId in connectedUsers) {
      if (connectedUsers[userId] === socket.id) {
        delete connectedUsers[userId];
        break;
      }
    }
  });
});
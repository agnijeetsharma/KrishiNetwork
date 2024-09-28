import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import io from "socket.io-client";
import axios from "axios";
export const ConnectionCard = (data) => {
  const [selectedUser, setSelectedUser] = useState(null);
  console.log("data", data);
  const { name, role } = data.data;
  return (
    <div className="flex">
      <div className="w-1/3 p-4 border-r-2 border-gray-200">
        <h2 className="text-xl font-semibold mb-4">571 Connections</h2>
        <ul>
          <li key={data.id} className="mb-4 flex items-center justify-between">
            <div>
              <p className="text-lg font-semibold">{name}</p>
              <p className="text-sm text-gray-600">{role}</p>
              {/* <p className="text-xs text-gray-500">Connected {connected}</p>  */}
            </div>
            <button
              className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600"
              onClick={() => setSelectedUser(data)}
            >
              Message
            </button>
          </li>
        </ul>
      </div>

      {selectedUser && (
        <div className="w-2/3 p-4">
          <MessageUI user={selectedUser} />
        </div>
      )}
    </div>
  );
};

const socket = io("http://localhost:3000", {
  transports: ["websocket", "polling"],
});

const MessageUI = (data) => {
  const store = useSelector((store) => store.user);
  const userId = store.user._id;
  const { name } = data.user.data;
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const otherUserId = data.user.data._id;
  const token = store.accessToken;
  console.log(token);
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.post(
          "http://localhost:3000/api/v1/users/get-chatMessages",
          {
            userId1: otherUserId,
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(response);
        setMessages(response.data.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchMessages();

    // socket.on("chat message", (message) => {
    //   setMessages((prevMessages) => [...prevMessages, message]);
    // });
  }, [otherUserId, token]);

  useEffect(() => {
    socket.emit("joinRoom", { senderId: userId, receiverId: otherUserId });

    socket.on("receiveMessage", (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      socket.disconnect();
    };
  }, [userId, otherUserId]);

  console.log(messages);

  const sendMessage = () => {
    if (newMessage.trim()) {
      socket.emit("sendMessage", {
        senderId: userId,
        receiverId: otherUserId,
        message: newMessage,
      });
      setNewMessage("");
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Chat with {name}</h2>

      <div className="border border-gray-200 p-4 mb-4 h-64 overflow-y-scroll">
        {messages?.length > 0 ? (
          messages.map((msg, index) => (
            <div key={index} className="mb-2">
              <strong>{msg.sender === userId ? "You" : name}: </strong>
              {msg.content}
            </div>
          ))
        ) : (
          <p>No messages yet.</p>
        )}
      </div>

      <div className="flex items-center">
        <input
          type="text"
          value={newMessage}
          className="w-full border border-gray-300 rounded p-2 mr-2"
          placeholder="Type your message..."
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button
          onClick={sendMessage}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Send
        </button>
      </div>
    </div>
  );
};

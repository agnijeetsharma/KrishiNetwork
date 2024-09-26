import { useState } from 'react';

export const ConnectionCard = (data) => {
  const [selectedUser, setSelectedUser] = useState(null);
console.log("data",data)
const {name}=data.data
  return (
    <div className="flex">
     
      <div className="w-1/3 p-4 border-r-2 border-gray-200">
        <h2 className="text-xl font-semibold mb-4">571 Connections</h2>
        <ul>
          
            <li key={data.id} className="mb-4 flex items-center justify-between">
              <div>
                <p className="text-lg font-semibold">{name}</p>
                {/* <p className="text-sm text-gray-600">{role}</p>
                <p className="text-xs text-gray-500">Connected {connected}</p> */}
              </div>
              <button
                className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600"
                onClick={() => setSelectedUser(data.data)}
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

const MessageUI = ( data ) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Chat with {data.name}</h2>
  
      <div className="border border-gray-200 p-4 mb-4 h-64 overflow-y-scroll">
       
        <p className="text-sm text-gray-600">You: Hi {data.name}, how are you?</p>
        <p className="text-sm text-gray-600">Them: Hello! I m good, how about you?</p>
      </div>

      <div className="flex items-center">
        <input
          type="text"
          className="w-full border border-gray-300 rounded p-2 mr-2"
          placeholder="Type your message..."
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Send</button>
      </div>
    </div>
  );
};



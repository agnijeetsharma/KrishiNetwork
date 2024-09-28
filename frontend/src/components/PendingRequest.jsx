import axios from "axios";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export const PendingRequestCard = (data) => {
  // console.log(data)
  const selector=useSelector(store=>store?.user?.user?._id)
  if(!data.data.sender)return;
//   console.log(selector);
  const { name, role } = data.data.sender;

  const handleAcceptRequest = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/users/accept-request",
        {
            receiver:selector,
            sender:data.data.sender._id
        },
        
      );
      console.log(response);
    } catch (err) {
      console.log(err);
    }

  };

  return (
    <div>
      <div className="w-full p-4 border-r-2 border-gray-200">
        <ul className=" border-b-2 border-gray-200">
          <li key={data.id} className=" flex items-center justify-between">
            <div>
              <p className="text-lg font-semibold">{name}</p>
              <p className="text-sm text-gray-600">{role}</p>
            </div>
            <button
              onClick={(e) => handleAcceptRequest(e)}
              className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600"
            >
              Accept
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

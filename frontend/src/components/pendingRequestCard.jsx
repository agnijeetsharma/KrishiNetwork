import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { ConnectionCard } from "./connectionCard";
import { PendingRequestCard } from "./PendingRequest";
export const PendingRequest = () => {
  const [pending, setPending] = useState([]);
  const receiver = useSelector((store) => store?.user?.user?._id);
  // console.log(receiver)
  useEffect(() => {
    const fetchConnection = async () => {
      try {
        const response = await axios.post(
          "http://localhost:3000/api/v1/users/pending-requests",
          {
            receiver: receiver,
          },
          {
            headers: {
              "Content-Type": "application/json",
             
            },
          }
        );
        console.log(response);
        setPending(response?.data?.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchConnection();
  },[]);
  return (
    <>
      <div className="w-2/3 bg-white rounded-lg shadow-lg p-4 ml-8 mr-20 ">
        <h2 className="text-xl font-semibold mb-4">Grow</h2>
        <div className="bg-gray-50 p-4 rounded-lg mb-4">
          <ul>
            {pending?.length > 0 ? (
              pending.map((item, index) => (
                <PendingRequestCard key={index} data={item}/>
               
              ))
            ) : (
              <p>No connection requests.</p>
            )}
          </ul>
        </div>

        <h2 className="text-xl font-semibold mb-4">Catch up</h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-gray-50 p-4 rounded-lg flex flex-col items-center">
            <span>Queens #148</span>
            <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-lg">
              Play
            </button>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg flex flex-col items-center">
            <span>Pinpoint #148</span>
            <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-lg">
              Play
            </button>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg flex flex-col items-center">
            <span>Crossclimb #148</span>
            <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-lg">
              Play
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

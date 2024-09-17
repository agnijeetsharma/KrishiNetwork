import { useEffect, useState } from "react";
import axios from "axios";
import { FaTrash } from "react-icons/fa";

import { useSelector } from "react-redux";

export const BuyerContent = () => {
  const [cropData, setCropData] = useState([]);
  const [loading, setLoading] = useState(true);
  const selector = useSelector((store) => store.user);

  useEffect(() => {
    const fetchBuyerCrops = async () => {
      try {
        const token = selector.accessToken;

        var response = await fetch(
          "http://localhost:3000/api/v1/users/buyerCrops",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const data = await response.json();
        setCropData(data.data || []);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching crops:", error);
        setLoading(false);
      }
    };

    fetchBuyerCrops();
  });

  const handleDelete = async (cropId) => {
    try {
      await axios.post("http://localhost:3000/api/v1/users/buyer-removeCrops", {
        cropId
      });

      setCropData((prevData) => prevData.filter((crop) => crop._id !== cropId));
    } catch (error) {
      console.error("Error deleting crop:", error);
    }
  };

//   const handleUpdate = (cropId) => {
    // Handle update logic here (e.g., open a modal or redirect to an update form)
//     console.log("Update crop:", cropId);
//   };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="mt-20 h-screen">
      <div className="flex h-screen flex-col gap-5 overflow-y-scroll">
        {cropData.map((crop) => (
          <div
            key={crop._id}
            className="bg-gray-100 flex justify-between  p-5 shadow-lg rounded-lg mb-4 ove"
          >
            <div className="flex flex-col items-center">
              <img
                src={crop.cropImage}
                alt={crop.title}
                className="w-64 h-64 object-cover rounded-lg mb-4"
              />
            </div>
            <div className="flex flex-col justify-center text-center mr-16">
            <div className="">

              <h1 className="text-3xl font-bold text-green-700 mb-2">
                {crop.title}
              </h1>
              <p className="text-lg text-gray-600 mb-2">
                <strong>Description:</strong> {crop.description}
              </p>
              <p className="text-lg text-gray-600 mb-2">
                <strong>Farmer ID:</strong> {crop.farmerId}
              </p>
              <p className="text-lg text-gray-600 mb-2">
                <strong>Likes:</strong> {crop.like.length}
              </p>
              <p className="text-sm text-gray-500 mb-4">
                <strong>Created At:</strong>{" "}
                {new Date(crop.createdAt).toLocaleDateString()}
              </p>
              <p className="text-sm text-gray-500 mb-4">
                <strong>Updated At:</strong>{" "}
                {new Date(crop.updatedAt).toLocaleDateString()}
              </p>
            </div>
              <div className="flex gap-4 justify-center">
                {/* <button
                  onClick={() => handleUpdate(crop._id)}
                  className="flex items-center gap-2 bg-green-500 text-white py-2 px-4 rounded-lg shadow hover:bg-yellow-400 transition"
                >
                  <FaEdit size={20} /> Update
                </button> */}
                <button
                  onClick={() => handleDelete(crop._id)}
                  className="flex items-center gap-2 bg-green-600 text-white py-2 px-4 rounded-lg shadow hover:bg-red-500 transition"
                >
                  <FaTrash size={20} /> Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

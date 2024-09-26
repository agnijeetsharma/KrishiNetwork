import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const CropProfile = () => {
  const token = useSelector((store) => store.user.accessToken);

  const [message, setmessage] = useState(false);
  const [content, setContent] = useState("");
  const [farmer, setFarmer] = useState("");
  const selector = useSelector((store) => store.crop);
  const {
    description,
    title,
    cropImage,
    like,
    updatedAt,
    createdAt,
    farmerId,
    _id,
  } = selector.crop;
  console.log(farmerId);

  useEffect(() => {
    // e.preventDefault();
    const fetchFarmer = async () => {
      try {
        const response = await axios.post(
          "http://localhost:3000/api/v1/users/get-farmer",
          {
            farmerId,
          }
        );
        // console.log(response.data.data);
        setFarmer(response?.data?.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchFarmer();
  }, []);
  // console.log(farmer);
  const handleMessageClick = async (e) => {
    e.preventDefault();
    setmessage(!message);

    const response = await axios.post(
      "http://localhost:3000/api/v1/users/sendMessage",
      { content: content, receiverId: farmerId },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(response);
  };
  const handleCropAddClick = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      "http://localhost:3000/api/v1/users/buyer-addCrops",
      {
        cropId: _id,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(response);
  };
  const handleConnect = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/users/make-connection",
        {
          receiver: farmer?._id,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="crop-profile-container p-8 bg-white shadow-md rounded-lg ml-60 mr-60 mt-16">
      <div className=" ">
        <div className="crop-details mb-8">
          <h1 className="text-3xl font-semibold text-green-700">
            {"Crop Details"}
          </h1>
          <p className="text-lg text-gray-600">Type: {title}</p>
          {/* <p className="text-lg text-gray-600">Price: ${crop.price} per unit</p> */}
          <p className="text-lg text-gray-600">Description: {description}</p>
          <p className="text-lg text-gray-600">Like: {like.length}</p>
          <p className="text-lg text-gray-600">CreatedAt: {createdAt}</p>
          <p className="text-lg text-gray-600">UpdatedAt: {updatedAt}</p>
        </div>

        <div className="farmer-details mb-8 p-4 border-t border-gray-200">
          <div>
            <div className="flex gap-3">
              <h2 className="text-2xl font-semibold text-green-700">
                Farmer Details
              </h2>
              <button
                onClick={(e) => handleConnect(e)}
                className="bg-green-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-600 transition-colors duration-300"
              >
                Connect
              </button>
            </div>
            <p className="text-lg text-gray-600">Name: {farmer?.name}</p>
            <p className="text-lg text-gray-600">
              Location: {farmer?.location}
            </p>
            <p className="text-lg text-gray-600">Phone: {farmer?.phone}</p>
          </div>
        </div>
        <div className="flex justify-around mb-5">
          <div className="text-center">
            <button
              className="bg-green-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-600 transition-colors duration-300"
              onClick={(e) => handleCropAddClick(e)}
            >
              ADD CROP
            </button>
          </div>
          <div className="text-center">
            <button
              className="bg-green-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-600 transition-colors duration-300"
              onClick={(e) => handleMessageClick(e)}
            >
              Message Farmer
            </button>
          </div>
        </div>
        {message && (
          <div className="text-center">
            <div className="">
              <label />
              <input
                type="text"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="enter your message"
                className="w-full p-4 border border-gray-200 rounded"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CropProfile;

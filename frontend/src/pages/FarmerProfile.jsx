import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
const FarmerProfile = () => {
  const selector=useSelector(store=>store.user)
  const navigate=useNavigate()
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");

  const token =selector.accessToken
  // const token = localStorage.getItem("jwtToken");
  // console.log(token)
   
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!selector.user){
      alert("Please login first")
      return;
    }
    const response = await axios.post(
      "http://localhost:3000/api/v1/users/verify-farmer",
      {
        name: name,
        phone: phone,
        location: location,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, 
        },
      }
    );
    console.log(response);
    navigate("/farmer-details")
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-10">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full">
        <h1 className="text-3xl font-bold text-center text-gray-700 mb-8">
    {  selector.user?'Update Farmer': 'Farmer Profile'}
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-600 font-medium mb-2">
              Enter your name:
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="John Doe"
              required
            />
          </div>

          <div>
            <label className="block text-gray-600 font-medium mb-2">
              Enter your phone:
            </label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="123-456-7890"
              required
            />
          </div>

          <div>
            <label className="block text-gray-600 font-medium mb-2">
              Enter your location:
            </label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="City, Country"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 text-white py-3 rounded-lg shadow-lg hover:bg-green-600 transition duration-300"
          >
            Submit Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default FarmerProfile;

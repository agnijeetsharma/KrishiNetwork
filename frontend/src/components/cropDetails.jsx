import { useState } from "react";
import axios from "axios";

export const CropDetails = () => {
  const [cropName, setCropName] = useState("");
  const [cropPrice, setCropPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmUxYzFmYjZiNTBmMGY0YjdmMTU0MGYiLCJyb2xlIjoiZmFybWVyIiwiaWF0IjoxNzI2MDc0NDA5LCJleHAiOjE3MjYxNjA4MDl9.4XsYmKkXIlsFX6S5lTt32Ssg3gx7d2nrNs_vDfTC6KE";

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("cropImage", image);
    formdata.append("title", cropName);
    formdata.append("description", description);
    formdata.append("price", cropPrice);

    const response = await axios.post(
      "http://localhost:3000/api/v1/users/addCrop",
      formdata,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(response);
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <div className="w-1/2 mx-auto mt-10 p-8 border border-green-500 rounded-lg">
      <h1 className="text-2xl font-bold text-green-700 text-center mb-6">
        Add Crop and Its Details
      </h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <input
            type="text"
            value={cropName}
            onChange={(e) => setCropName(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter crop name"
            required
          />
        </div>
        <div>
          <input
            type="number"
            value={cropPrice}
            onChange={(e) => setCropPrice(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter crop price"
            required
          />
        </div>
        <div>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter crop description"
            required
          />
        </div>
        <div>
          <input
            type="file"
            onChange={handleImageChange}
            className="mt-1 block w-full p-2"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-green-700 text-white p-2 rounded-lg hover:bg-green-600 transition"
        >
          Submit Crop Details
        </button>
      </form>
    </div>
  );
};

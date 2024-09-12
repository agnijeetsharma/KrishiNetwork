import { useState, useEffect } from "react";
import axios from "axios";
import { CropCard } from "../components/crop.Card";

const CropContainer = () => {
  const [crops, setCrops] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCrops = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/v1/users/allCrops");
        setCrops(response.data.data); 
        setLoading(false);
      } catch (error) {
        console.error("Error fetching crops:", error);
        setLoading(false);
      }
    };

    fetchCrops();
  }, []); 

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex flex-wrap gap-4 justify-between">
        {crops.map((crop) => (
          <CropCard key={crop.title} crop={crop} />
        ))}
      </div>
    </div>
  );
};

export { CropContainer };

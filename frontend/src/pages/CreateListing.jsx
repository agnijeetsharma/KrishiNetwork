import  { useState } from 'react';
// import { DetailCard } from '../components/UserDetailsCard';

const CreateListing = () => {
  const [cropName, setCropName] = useState('');
  const [cropImage, setCropImage] = useState(null);
  const [price, setPrice] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  
  // Farmer details state
  const [farmerName, setFarmerName] = useState('John Doe');
  const [farmerAddress, setFarmerAddress] = useState('123 Farm Lane');

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.size < 5 * 1024 * 1024) { // Limit to 5MB
        setCropImage(file);
    } else {
        alert("Please select an image smaller than 5MB");
    }
  };

  const handleReset = () => {
    setCropName('');
    setCropImage(null);
    setPrice('');
    setAmount('');
    setDate('');
    setDescription('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      cropName,
      cropImage,
      price,
      amount,
      date,
      description,
      farmerName,
      farmerAddress,
    };

    console.log('Form Data:', formData);
    handleReset();
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 md:flex-row ">
      {/* <div className="bg-[#c2deb6] p-4 md:pr-[5vw] shadow-md">
        <FarmerDetailCard name={farmerName} address={farmerAddress} />
      </div> */}
      <div className="flex-1 flex items-center justify-center p-4 md:p-0 ">
        <div className="max-w-md w-full p-5 bg-white rounded-lg shadow-lg border border-green-400">
          <h1 className="text-2xl font-bold text-center text-green-700 mb-4  p-3 rounded-lg shadow-md">
            Create a New Listing
          </h1>
          <form onSubmit={handleSubmit}>
            {/* Crop Name Input */}
            <div className="mb-3">
              <label className="block text-sm  font-medium text-gray-700">Name of Crop:</label>
              <input
                type="text"
                className="mt-1 p-2 block text-center w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 transition duration-200 shadow-sm"
                value={cropName}
                 placeholder='Wheat'
                onChange={(e) => setCropName(e.target.value)}
                required
              />
            </div>

            {/* Crop Image Input */}
            <div className="mb-3">
              <label className="block text-sm font-medium text-gray-700">Image of Crop:</label>
              <input
                type="file"
                accept="image/*"
                className="mt-1 block w-full text-gray-500 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 transition duration-200 shadow-sm"
                onChange={handleImageChange}
                required
              />
            </div>

            {/* Price Input */}
            <div className="mb-3">
              <label className="block  text-sm font-medium text-gray-700">Price of Crop (In Lacks) :</label>
              <input
                type="number"
                className="mt-1 p-2 block text-center w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 transition duration-200 shadow-sm"
                value={price}
                 placeholder='20 '
                onChange={(e) => setPrice(e.target.value)}
                required
              />
            </div>

            {/* Amount Input */}
            <div className="mb-3">
              <label className="block text-center text-sm font-medium text-gray-700">Amount of Crop (In Kg) :</label>
              <input
                type="number"
                className="mt-1 p-2 block text-center w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 transition duration-200 shadow-sm"
                value={amount}
                placeholder='10 '
                onChange={(e) => setAmount(e.target.value)}
                required
              />
            </div>

            {/* Date Input */}
            <div className="mb-3">
              <label className="block text-sm font-medium text-gray-700">Date of Harvest:</label>
              <input
                type="date"
                className="mt-1 p-2 block text-center w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 transition duration-200 shadow-sm"
                value={date}
                 
                onChange={(e) => setDate(e.target.value)}
                required
              />
            </div>

            {/* Description Input */}
            <div className="mb-3">
              <label className="block text-sm font-medium text-gray-700">Description of Crop:</label>
              <textarea
                className="mt-1 p-2 block w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 transition duration-200 shadow-sm"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows="2"
                required
              />
            </div>

            <div className="flex flex-col md:flex-row justify-between mt-4">
              <button
                type="submit"
                className="w-full md:w-[48%] py-2 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-300 mb-2 md:mb-0 shadow-md"
              >
                Create Listing
              </button>
              <button
                type="button"
                onClick={handleReset}
                className="w-full md:w-[48%] py-2 bg-gray-600 text-white font-bold rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-gray-400 transition duration-300 shadow-md"
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateListing;

import React, { useEffect, useState } from 'react';

const BuyerProfile = () => {
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    address: '',
    gstNumber: '', // Changed from farmerID to gstNumber
    aadhar: '',
    photo: null,
  });

  const fetchBuyerData = async () => {
    const response = {
      name: 'Ramesh Singh',
      phoneNumber: '7855561237',
      address: 'Gandhi Maidan, Patna',
      gstNumber: 'GST123456789', // Changed from farmerID to gstNumber
      aadhar: '1234-5678-9012',
      photo: null,
    };
    setFormData(response);
  };

  useEffect(() => {
    fetchBuyerData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, photo: file });
  };

  const validateForm = () => {
    if (!formData.name || !formData.phoneNumber || !formData.aadhar || !formData.gstNumber) {
      alert("Please fill all required fields.");
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Updated Data:', formData);
      alert("Profile Updated!");
    }
  };

  return (
    <div className="min-h-screen bg-[#c2deb6] flex justify-center items-center ">
      <div className="max-w-3xl w-full p-8 bg-white rounded-lg shadow mt-10">
        <h1 className="text-2xl font-bold text-gray-700 mb-6">Edit Buyer's Profile</h1>

        <div className="bg-gray-50 p-4 rounded-lg shadow-sm mb-4">
          <div className="flex flex-col md:flex-row items-center mb-4 relative">
            <input 
              type="file" 
              name="photo" 
              onChange={handleFileChange} 
              className="hidden" 
              id="photo"
            />
            <label htmlFor="photo" className="cursor-pointer">
              <div className="relative">
                <img 
                  src={formData.photo ? URL.createObjectURL(formData.photo) : 'https://via.placeholder.com/150'} 
                  alt="Profile" 
                  className="w-32 h-32 rounded-full object-cover border-2 border-gray-300 transition-transform duration-200 hover:scale-105" 
                />
                {/* + sign */}
                <div className="absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-200">
                  <span className="text-white text-3xl">+</span>
                </div>
              </div>
            </label>
            <div className="ml-4">
              <span className="text-sm font-semibold">{formData.name || "N/A"}</span>
              <div className="flex items-center">
                <span className="text-xs text-gray-500">{formData.gstNumber || "N/A"}</span>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name */}
            <div className="flex justify-between items-center">
              <label className="text-sm font-semibold text-gray-600">Name:</label>
              <input 
                type="text" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                className="text-center border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400" 
              />
            </div>
            {/* Phone Number */}
            <div className="flex justify-between items-center">
              <label className="text-sm font-semibold text-gray-600">Phone Number:</label>
              <input 
                type="text" 
                name="phoneNumber" 
                value={formData.phoneNumber} 
                onChange={handleChange} 
                className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 text-center" 
              />
            </div>
            {/* Address */}
            <div className="flex justify-between items-center">
              <label className="text-sm font-semibold text-gray-600">Address:</label>
              <input 
                type="text" 
                name="address" 
                value={formData.address} 
                onChange={handleChange} 
                className="text-center border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400" 
              />
            </div>
            {/* GST Number */}
            <div className="flex justify-between items-center">
              <label className="text-sm font-semibold text-gray-600">GST Number:</label>
              <input 
                type="text" 
                name="gstNumber"  // Updated the name to gstNumber
                value={formData.gstNumber} 
                onChange={handleChange} 
                className="text-center border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400" 
              />
            </div>
            {/* Aadhar */}
            <div className="flex justify-between items-center">
              <label className="text-sm font-semibold text-gray-600">Aadhar:</label>
              <input 
                type="text" 
                name="aadhar" 
                value={formData.aadhar} 
                onChange={handleChange} 
                className="text-center border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400" 
              />
            </div>

            <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200">Update Profile</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default BuyerProfile;

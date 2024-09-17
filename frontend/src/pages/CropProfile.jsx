import axios from "axios";
import {  useState } from "react";
import { useSelector } from "react-redux";


const CropProfile = () => {
    const [message ,setmessage]=useState(false)
    const selector=useSelector(store=>store.crop);
    console.log(selector);
    const handleMessageClick=async(e)=>{
        e.preventDefault();
        setmessage(!message);
        // useEffect(()=>{
        //     const response=await axios.post("http://localhost:3000/api/v1/users/dendMessage",{
        //         "content":message,
        //        " receiverId":,
        //        " senderId":,
        //     }) 
        // // })

    }
  return (
    <div className="crop-profile-container p-8 bg-white shadow-md rounded-lg ml-60 mr-60 mt-28">
  <div className=" ">
 
      <div className="crop-details mb-8">
        <h1 className="text-3xl font-semibold text-green-700">{"Crop Details"}</h1>
        <p className="text-lg text-gray-600">Type: {}</p>
        {/* <p className="text-lg text-gray-600">Price: ${crop.price} per unit</p> */}
        <p className="text-lg text-gray-600">Description: {}</p>
      </div>

     
      <div className="farmer-details mb-8 p-4 border-t border-gray-200">
        <h2 className="text-2xl font-semibold text-green-700">Farmer Details</h2>
        <p className="text-lg text-gray-600">Name: {}</p>
        <p className="text-lg text-gray-600">Location: {}</p>
        <p className="text-lg text-gray-600">Phone: {}</p>
      </div>

      <div className="text-center">
        <button
          className="bg-green-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-600 transition-colors duration-300"
          onClick={(e) => handleMessageClick(e)}
        >
          Message Farmer
        </button>
      </div>
     { message&&<div className="text-center">
           <div className="">
              <label />
              <input type="text" placeholder="enter your message" className="w-full p-4 border border-gray-200 rounded"/>
           </div>
      </div>}
  </div>
    </div>
  );
};

export default CropProfile;

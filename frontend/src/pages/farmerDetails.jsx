import { CropDetails } from "../components/cropDetails";
import { DetailCard } from "../components/UserDetailsCard";
import { useSelector } from 'react-redux'
import Profile from "./Profile"
import { FarmerContent } from "./farmerContent";
import { useState } from "react";

export const FarmerDetails = () => {
  const [add ,setAdd]=useState(false);
  const selector=useSelector(store=>store.user.farmer)
  // const selector=null;
  // console.log(selector)
  // console.log(selector);
  const handleAddCrop=async ()=>{
   
        setAdd(!add)
  }
  return (

    <div className="flex h-screen mt-20">

      <div className="shadow-xl w-1/4">
        <DetailCard />
      </div>


      <div className=" w-4/5 flex flex-1 justify-center items-center">
        <div className=" w-full text-center items-center">
       {selector&& <div>
        
        <h1>your crops!</h1>
          <button onClick={()=>handleAddCrop()} className="bg-green-500 p-1 rounded-lg hover:bg-green-600">
                { add===true?'View Crops':'ADD More'}
          </button>
        </div>}
      {  add&&<div className="flex "> <CropDetails/></div>}
         { !add&&selector&&<FarmerContent />}
        {  !add&&!selector&&<Profile/>}
        </div>
      </div>
    </div>
  );

  
}

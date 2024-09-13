import { CropDetails } from "../components/cropDetails";
import { FarmerDetailCard } from "../components/farmerDetailsCard";
import { useSelector } from 'react-redux'
import FarmerProfile from "./FarmerProfile"
import { FarmerContent } from "./farmerContent";
export const FarmerDetails = () => {
  const selector=useSelector(store=>store.user.farmer)
  // const selector=null;
  console.log(selector)
  // console.log(selector);
  return (

    <div className="flex h-screen ">

      <div className="shadow-xl w-1/4">
        <FarmerDetailCard />
      </div>


      <div className=" w-4/5 flex flex-1 justify-center items-center">
        <div className=" w-full text-center items-center">
         { !selector&&<FarmerContent />}
        {  selector&&<FarmerProfile/>}
        </div>
      </div>
    </div>
  );

  
}

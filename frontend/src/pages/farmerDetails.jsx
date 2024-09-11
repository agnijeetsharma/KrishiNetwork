import { CropDetails } from "../components/cropDetails";
import { FarmerDetailCard } from "../components/farmerDetailsCard";

export const FarmerDetails = () => {

  return (

    <div className="flex h-screen ">

      <div className="shadow-xl w-1/5">
        <FarmerDetailCard />
      </div>


      <div className=" w-4/5 flex flex-1 justify-center items-center">
        <div className=" w-full text-center items-center">
          <CropDetails />
        </div>
      </div>
    </div>
  );

  
}

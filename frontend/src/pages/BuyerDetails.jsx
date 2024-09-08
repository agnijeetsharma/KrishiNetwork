import { CropDetails } from "../components/cropDetails";
// import { FarmerDetailCard } from "../components/farmerDetailsCard";
import { BuyerDetailCard } from "../components/BuyerDetailsCard";
import CreateListing from "./CreateListing";

export const BuyerDetails = () => {
  return (
    <div className="flex h-screen">
     
      <div className="shadow-xl w-1/5">
        <BuyerDetailCard />
      </div>


      <div className=" w-4/5 flex flex-1 justify-center items-center">
        <div className=" w-full text-center items-center">
          <CreateListing/>
        </div>
      </div>
    </div>
  );
};

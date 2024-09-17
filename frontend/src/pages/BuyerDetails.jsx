import { BuyerDetailCard } from "../components/BuyerDetailsCard";
import {useSelector} from "react-redux"
// import CreateListing from "./CreateListing";
import {BuyerProfile }from "./BuyerProfile"
import {BuyerContent} from "./BuyerContent"
// import BuyerProfile from "./buyerDetails"
export const BuyerDetails = () => {
  const selector=useSelector(store=>store.user)
  return (
    <div className="flex h-screen">
     
      <div className="shadow-xl w-1/4">
        <BuyerDetailCard />
      </div>


      <div className=" w-4/5 flex flex-1 justify-center items-center">
        <div className=" w-full text-center items-center">
      {  selector.user&&<BuyerContent/>}
       {  !selector.user&&<BuyerProfile/>}
        </div>
      </div>
    </div>
  );
};

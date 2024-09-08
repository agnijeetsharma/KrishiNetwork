import { FaUserCheck } from "react-icons/fa"; 
import {  MdLocalShipping } from "react-icons/md"; 
import { FiShoppingCart } from "react-icons/fi"; 

export const WHyUsCard = () => {
  return (
    <div id="why-us-section" className="text-center mt-20 mb-20">
      <h1 className="text-green-700 font-semibold text-3xl ">Why Us </h1>
      <div className=" flex justify-around mt-10 gap-20">
        <div  className="text-center flex flex-col items-center">
          <FaUserCheck size={40} className="text-green-700 mr-4" />
          <h1 className="text-2xl ">
            Backed with an experienced team of professionals
          </h1>
         
        </div>
        <div  className="text-center flex flex-col items-center">
          <MdLocalShipping size={40} className="text-green-700 mr-4" />
          <h1 className="text-2xl  ">
            Rendered in hassle free manner
          </h1>
         
        </div>
        <div className="text-center flex flex-col items-center">
          <FiShoppingCart size={40} className="text-green-700 mr-4" />

          <h1 className="text-2xl ">
            Solutions are provided according to clients needs
          </h1>
        </div>
      </div>
    </div>
  );
};

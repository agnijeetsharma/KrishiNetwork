import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
  FaJediOrder,
} from "react-icons/fa";
export const FotterCard = () => {
  return (
    <div className="mt-20">
      <div className="">
        <div className="bg-green-600 h-28 flex justify-between  gap-8">
          <div>
            <h1 className="text-white text-3xl font-semibold ml-5 mt-3">
              NINIJAFARM
            </h1>
            <ul className="text-white flex justify-self-start gap-5 ml-5">
              <li className="cursor-pointer hover:text-green-900">Home</li>
              <li className="cursor-pointer hover:text-green-900">Services</li>
              <li className="cursor-pointer hover:text-green-900">About Us</li>
              <li className="cursor-pointer hover:text-green-900">Contact Us</li>
            </ul>
          </div>
          <div className="flex space-x-4 justify-center mt-3 mr-3">
            <div className="bg-green-700 p-3 h-12 rounded-full text-white hover:bg-green-900 transition duration-300">
              <FaFacebookF size={24} />
            </div>
            <div className="bg-green-700 p-3 h-12 rounded-full text-white hover:bg-green-900 transition duration-300">
              <FaLinkedinIn size={24} />
            </div>
            <div className="bg-green-700 p-3 h-12 rounded-full text-white hover:bg-green-900 transition duration-300">
              <FaInstagram size={24} />
            </div>
            <div className="bg-green-700 p-3 h-12 rounded-full text-white hover:bg-green-900 transition duration-300">
              <FaTwitter size={24} />
            </div>
            <div className="bg-green-700 p-3 h-12 rounded-full text-white hover:bg-green-900 transition duration-300">
              <FaJediOrder size={24} /> 
            </div>
          </div>
        </div>
        <div className="bg-green-700 h-12 text-right text-white  text-sm">
          <h1 className="mr-3">© Copyrights 2024 NINIJAFARM All Rights Reserved</h1>
        </div>
      </div>
    </div>
  );
};

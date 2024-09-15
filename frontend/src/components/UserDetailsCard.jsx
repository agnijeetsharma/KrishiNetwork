import { FaUser } from "react-icons/fa";
import { FiMessageSquare } from "react-icons/fi";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { MdVerified } from "react-icons/md";
import { useSelector } from "react-redux";

export const DetailCard = () => {
  const selector = useSelector((store) => store.user.farmer);

  return (
    <div className="flex ml-20 gap-10 h-fit items-start w-1/4 mt-20">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2 items-center text-sm">
          <div className="border border-green-500 w-24 h-24 rounded-full flex items-center justify-center">
            <FaUser size={40} className="text-green-700" />
          </div>
          <h2 className="text-lg font-semibold">{selector ? selector.name : "Farmer Name"}</h2>
          <h2 className="text-gray-600">{selector ? selector.location : "location"}</h2>
          <h2 className="text-gray-600">{selector ? selector.phone : "Phone"}</h2>

          <div className={`flex flex-row cursor  items-center gap-2 rounded-xl ${selector ? "bg-green-900" : "bg-red-500"}`}>
            {selector && <MdVerified size={20} className="text-green-400 pl-1" />}
            <h2 className=" cursor-pointer font-mono  text-lg text-white hover:text-white rounded-lg px-2 py-1">
              {selector ? "Verified" : "Verify"}
            </h2>
          </div>
        </div>

        <div className="flex flex-col gap-4 text-green-600">
          <div className="flex items-center gap-2">
            <FiMessageSquare size={20} className="text-green-700" />
            <h2 className="font-semibold hover:bg-green-700 hover:text-white rounded-lg px-2 py-1">
              Ongoing Talks
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <AiOutlineCheckCircle size={20} className="text-green-700" />
            <h2 className="font-semibold hover:bg-green-700 hover:text-white rounded-lg px-2 py-1">
              Completed
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <MdVerified size={20} className="text-green-700" />
            <h2 className="font-semibold hover:bg-green-700 hover:text-white rounded-lg px-2 py-1">
              Confirmed
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

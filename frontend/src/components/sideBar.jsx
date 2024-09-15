import { FaBell } from 'react-icons/fa';
import { FaHome, FaUser, FaSignOutAlt, FaSeedling } from "react-icons/fa"; // Importing icons
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
export const SideBar = () => {
    const selector=useSelector(store=>store.user)
  return (
    <div className="fixed top-14 left-0 h-full w-16 flex flex-col z-50 ">
      <ul className="flex flex-col items-center mt-20 gap-8">
        <li className="flex flex-col items-center group">
          <Link to="/">
            {" "}
            <FaHome className="text-green-800 text-3xl group-hover:text-green-400 transition duration-300" />
          </Link>

          <span className="text-xs text-green mt-2 group-hover:text-green-400">
            Home
          </span>
        </li>

        <li className="flex flex-col items-center group">
          <Link to="/farmer-details">
            {" "}
            <FaUser className="text-green-800 text-3xl group-hover:text-green-400 transition duration-300" />
          </Link>
          <span className="text-xs text-green mt-2 group-hover:text-green-400">
            Profile
          </span>
        </li>

       { selector.user&&<li className="flex flex-col items-center group">
          <FaSignOutAlt className="text-green-800 text-3xl group-hover:text-green-400 transition duration-300" />
          <span className="text-xs text-green mt-2 group-hover:text-green-400">
            Logout
          </span>
        </li>
}
        <li className="flex flex-col items-center group">
        <Link to="/crops"> <FaSeedling className="text-green-800 text-3xl group-hover:text-green-400 transition duration-300" /></Link>
         
          <span className="text-xs text-green mt-2 group-hover:text-green-400">
            Crops
          </span>
        </li>
        {
          selector.user&&<li className="flex flex-col items-center group">
           <FaBell className="text-green-800 text-3xl group-hover:text-green-400 transition duration-300" ></FaBell>
          <span className="text-xs text-green mt-2 group-hover:text-green-400">
           Message
          </span>
        </li>
        }
      </ul>
    </div>
  );
};

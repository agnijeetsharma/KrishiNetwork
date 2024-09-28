import { useEffect } from "react";
import axios from "axios";
import {useSelector} from "react-redux"
import { Link } from "react-router-dom";
import { PendingRequest } from "../components/pendingRequestCard";
const Followers = () => {
  const token=useSelector(store=>store.user.accessToken)
  // console.log(token)
  // useEffect(() => {
  //   const fetchPendingConnection = async () => {
  //     try {
  //       const response = await axios.post(
  //         "http://localhost:3000/api/v1/users/accept-request",{
  //           // sender:,
  //         },
  //         {
  //           Headers:{
  //             "Content-Type": "application/json",
  //             Authorization: `Bearer ${token}`, 
  //           }
  //         }
  //       );
  //       console.log(response);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   fetchPendingConnection();
  // }, []);

// console.log(token)

 


  return (
    <div className="min-h-screen min-w-full bg-gray-100 ">
      <div className="container min-w-full flex flex-row justify-around py-10 pl-20">
       
        <div className="w-1/4 min-h-screen bg-white rounded-lg shadow-lg p-4">
          <h2 className="text-xl font-semibold mb-4">Manage my network</h2>
          <ul className="space-y-7">
            <li className="flex justify-between items-center">
            <Link to="/connections/message">

              <span>Connections</span>
            </Link>
              <span className="font-bold">559</span>
            </li>
            <li className="flex justify-between items-center">
              <span>Contacts</span>
              <span className="font-bold">42</span>
            </li>
            <li className="flex justify-between items-center">
              <span>Following & followers</span>
              <span className="font-bold">120</span>
            </li>
            <li className="flex justify-between items-center">
              <span>Groups</span>
              <span className="font-bold">5</span>
            </li>
            <li className="flex justify-between items-center">
              <span>Events</span>
              <span className="font-bold">3</span>
            </li>
            <li className="flex justify-between items-center">
              <span>Pages</span>
              <span className="font-bold">29</span>
            </li>
            <li className="flex justify-between items-center">
              <span>Newsletters</span>
              <span className="font-bold">4</span>
            </li>
          </ul>
        </div>

         <PendingRequest/>
      </div>
    </div>
  );
};

export default Followers;


// import React from 'react';

const Followers = () => {
  return (
    <div className="min-h-screen min-w-full bg-gray-100 ">
      
     <div className="container min-w-full flex flex-row justify-around py-10 pl-20">
        {/* Left Side - Manage My Network */}
        <div className="w-1/4 min-h-screen bg-white rounded-lg shadow-lg p-4">
          <h2 className="text-xl font-semibold mb-4">Manage my network</h2>
          <ul className="space-y-7">
            <li className="flex justify-between items-center">
              <span>Connections</span>
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

        {/* Right Side - Connection Requests */}
        <div className="w-2/3 bg-white rounded-lg shadow-lg p-4 ml-8 mr-20 ">
          <h2 className="text-xl font-semibold mb-4">Grow</h2>
          <div className="bg-gray-50 p-4 rounded-lg mb-4">
            <p>No pending invitations</p>
          </div>

          <h2 className="text-xl font-semibold mb-4">Catch up</h2>
          <div className="grid grid-cols-3 gap-4">
            {/* Example of showing games/other content */}
            <div className="bg-gray-50 p-4 rounded-lg flex flex-col items-center">
              <span>Queens #148</span>
              <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-lg">
                Play
              </button>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg flex flex-col items-center">
              <span>Pinpoint #148</span>
              <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-lg">
                Play
              </button>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg flex flex-col items-center">
              <span>Crossclimb #148</span>
              <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-lg">
                Play
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Followers;

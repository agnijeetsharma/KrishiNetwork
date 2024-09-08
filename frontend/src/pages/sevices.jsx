import { service_image1, service_image2, service_image3, service_image4 } from "../constant";
import { Link } from "react-router-dom";
export const Services = () => {
  return (
    <div id="service-section" className="mt-20 mb-10 mx-8">
      <h1 className="text-green-700 text-4xl text-center">Services</h1>
      <div className="flex h-auto justify-around mt-10 gap-6">
       
        <div className="hover:shadow-xl text-center flex flex-col">
          <div>
            <img
              alt="service image 1"
              className="rounded-full w-48 h-48 mx-auto object-cover"
              src={service_image1}
            />
          </div>
          <div className="mt-4 flex-grow text-center">
            <h5 className="text-xl font-semibold">Contract Crop Cultivation</h5>
            <p className="mt-2 text-gray-600">
              Contract Crop Cultivation ensures a reliable partnership for large-scale farming projects, providing support from planting to harvesting.
            </p>
          <button className="bg-green-700 mb-4  text-center  text-white rounded-2xl mt-4 w-32 py-3 hover:bg-green-900">
            <Link to="/enqurie">   Enquire Now</Link>
         
          </button>
          </div>
        </div>

        <div className="hover:shadow-xl text-center flex flex-col">
          <div>
            <img
              alt="service image 2"
              className="rounded-full w-48 h-48 mx-auto object-cover"
              src={service_image2}
            />
          </div>
          <div className="mt-4 flex-grow">
            <h5 className="text-xl font-semibold">Horticultural Assistance</h5>
            <p className="mt-2 text-gray-600">
              Our Horticultural Assistance program helps farmers with expert advice and tools to grow fruits, vegetables, and ornamental plants effectively.
            </p>
            <button className="bg-green-700 mb-4  text-center  text-white rounded-2xl mt-4 w-32 py-3 hover:bg-green-900">
            <Link to="/enqurie">   Enquire Now</Link>
          </button>
          </div>
        </div>

      
        <div className="hover:shadow-xl text-center flex flex-col">
          <div>
            <img
              alt="service image 3"
              className="rounded-full w-48 h-48 mx-auto object-cover"
              src={service_image3}
            />
          </div>
          <div className="mt-4 flex-grow">
            <h5 className="text-xl font-semibold">Livestock Management</h5>
            <p className="mt-2 text-gray-600">
              Livestock Management services provide care and breeding support for cattle, sheep, and goats, ensuring the best quality meat and dairy.
            </p>
            <button className="bg-green-700 mb-4  text-center  text-white rounded-2xl mt-4 w-32 py-3 hover:bg-green-900">
            <Link to="/enqurie">   Enquire Now</Link>
          </button>
          </div>
        </div>

       
        <div className="hover:shadow-xl text-center flex flex-col">
          <div>
            <img
              alt="service image 4"
              className="rounded-full w-48 h-48 mx-auto object-cover"
              src={service_image4}
            />
          </div>
          <div className="mt-4 flex-grow">
            <h5 className="text-xl font-semibold">Irrigation Solutions</h5>
            <p className="mt-2 text-gray-600">
              We offer advanced Irrigation Solutions to help farmers optimize water use and improve crop yields through modern, sustainable techniques.
            </p>
            <button className="bg-green-700 mb-4  text-center  text-white rounded-2xl mt-4 w-32 py-3 hover:bg-green-900">
            <Link to="/enqurie">   Enquire Now</Link>
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

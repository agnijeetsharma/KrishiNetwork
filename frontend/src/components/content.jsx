
import { FaTrash, FaEdit } from "react-icons/fa";
import { MdFavorite } from "react-icons/md";
import axios from "axios";
export const Content = (data) => {
    const { cropImage, like, description, farmerId, createdAt, updatedAt, title }=data.data
    const cropId=data.data._id;
  const handleDelete = async() => {
const response=await axios.post("http://localhost:3000/api/v1/users/removeCrop", {  
    cropId,
    farmerId
})

   console.log(response);
  
  }
   
  const handleUpdate = () => {
   
    // console.log("Crop update form");
  };

  return (
    <div className="mt-20 h-screen bg-gray-100 p-5">
      <div className="bg-white shadow-xl rounded-lg p-6 max-w-3xl mx-auto">
       
        <div className="flex justify-center mb-6">
          <img
            src={cropImage}
            alt={title}
            className="w-64 h-64 object-cover rounded-lg"
          />
        </div>

       
        <div className="text-center mb-4">
          <h1 className="text-3xl font-bold text-green-700">{title}</h1>
        </div>

       
        <div className="mb-6 text-gray-600">
          <p className="text-lg"><strong>Description:</strong> {description}</p>
          <p className="text-lg"><strong>Farmer ID:</strong> {farmerId}</p>
          <p className="text-lg"><strong>Likes:</strong> {like}</p>
          <p className="text-sm text-gray-500"><strong>Created At:</strong> {new Date(createdAt).toLocaleDateString()}</p>
          <p className="text-sm text-gray-500"><strong>Updated At:</strong> {new Date(updatedAt).toLocaleDateString()}</p>
        </div>

     
        <div className="flex justify-around mt-6">
       
          <h1 className="flex items-center gap-2 bg-green-500 text-white py-2 px-4 rounded-lg shadow hover:bg-red-400 transition">
            <MdFavorite size={20} /> Like:-0{like}
          </h1>

         
          <button
            onClick={e=>handleUpdate(e)}
            className="flex items-center gap-2 bg-green-500 text-white py-2 px-4 rounded-lg shadow hover:bg-yellow-400 transition"
          >
            <FaEdit size={20} /> Update
          </button>

         
          <button
            onClick={handleDelete}
            className="flex items-center gap-2 bg-green-600 text-white py-2 px-4 rounded-lg shadow hover:bg-red-500 transition"
          >
            <FaTrash size={20} /> Delete
          </button>
        </div>
      </div>
    </div>
  );
};

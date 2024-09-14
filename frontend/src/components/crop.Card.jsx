
import { MdFavorite } from "react-icons/md";
import { useSelector } from "react-redux";
import axios from "axios";
export const CropCard= (data) => {
  const selector=useSelector(store=>store.user.user)
  console.log("user",selector)
  // console.log(data)
  const { cropImage,_id, like, description, createdAt, updatedAt, title }=data.crop
 const handleLikes=async()=>{
  try{
      const response=await axios.post("http://localhost:3000/api/v1/users/like",{
            userId:selector._id,
            modelId:_id,
            modelType:'Crop'
          })
          console.log(response)
  }
  catch(err){
    console.log(err);
  }
 }

  return (
    <div className="mt-20 h-screen bg-gray-100 p-5">
      <div className="bg-white shadow-xl rounded-lg p-6 h-96 w-80 mx-auto">
       
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
          <p className="text-lg"><strong>Likes:</strong> {like.length}</p>
          <p className="text-sm text-gray-500"><strong>Created At:</strong> {new Date(createdAt).toLocaleDateString()}</p>
          <p className="text-sm text-gray-500"><strong>Updated At:</strong> {new Date(updatedAt).toLocaleDateString()}</p>
        </div>
        <div className="flex justify-around mt-6">
         
          <button onClick={()=>handleLikes()} className="flex items-center gap-2 bg-red-500 text-white py-2 px-4 rounded-lg shadow hover:bg-red-400 transition">
            <MdFavorite size={20} /> Like
          </button>
         
        </div>
      </div>
    </div>
  );
};

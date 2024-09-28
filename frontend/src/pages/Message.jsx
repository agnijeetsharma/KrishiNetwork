import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { ConnectionCard } from "../components/connectionCard";
export const Message = () => {

  const [validConnections,setValidConnections]=useState([]);
  const [loding, setLoding] = useState(true);
  const user = useSelector((store) => store.user);
const token=user.accessToken
const userId=user.user._id
// console.log(userId,user)
  useEffect(() => {
    const fetchConnection = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/v1/users/all-connections",
          {
            headers: {
              "Content-Type": "application/json",
             'Authorization': `Bearer ${token}`,
            },
          }
        );
       
        const connections = response?.data?.data || [];
        console.log(response)
        const filteredConnections = connections.map((item) => {
            if (item?.receiver?._id === userId) {
                return item?.sender; 
            } else if (item?.sender?._id === userId) {
                return item?.receiver; 
            }
            return null; 
        }).filter((item) => item !== null); 
        
        setValidConnections(filteredConnections); 
        setLoding(false);
    } catch (err) {
        console.log(err);
    }
};

fetchConnection();
}, []);
if (loding) return <div>Loding.......</div>;

 
  return (
    <div>
      <div>
        {validConnections.map((item, index) => (
          <ConnectionCard key={index} data={item} />
        ))}
      </div>
    </div>
  );
};

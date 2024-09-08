
import HomePage from "./pages/homepage"

import Listing from "./pages/listing"
import Signup from "./pages/signup"
import Login from "./pages/login"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Completed from "./pages/Completed"
import { FarmerDetails } from "./pages/farmerDetails"
import FarmerProfile from "./pages/FarmerProfile"
import { BuyerDetails } from "./pages/BuyerDetails"
import BuyerProfile from "./pages/BuyerProfile"

function App() {

  return (
    <div>

    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/listing" element={<Listing />} />

          <Route path="/completed" element={<Completed/>} />
          <Route path="/farmer-details" element={<FarmerDetails/>} />
          {/* <Route path="/createListing" element={<CreateListing/>} /> */}
          <Route path="/farmerProfile" element={<FarmerProfile/>} />
          <Route path="/buyer-details" element={<BuyerDetails/>} />
          <Route path="/buyerProfile" element={<BuyerProfile/>} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App

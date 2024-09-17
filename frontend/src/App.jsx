import HomePage from "./pages/homepage";

import Signup from "./pages/signup";
import Login from "./pages/login";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { FarmerDetails } from "./pages/farmerDetails";
import FarmerProfile from "./pages/Profile";
import { BuyerDetails } from "./pages/BuyerDetails";
import { CropContainer } from "./pages/cropContainer";
import { Store } from "./utils/store";
import Parent from "./pages/parent";
import CropProfile from "./pages/CropProfile";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Parent />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "/farmer-details",
        element: <FarmerDetails />,
      },
      {
        path: "/farmerProfile",
        element: <FarmerProfile />,
      },
      {
        path: "/buyer-details",
        element: <BuyerDetails />,
      },
      {
        path: "/crops",
        element: <CropContainer />,
      },
      {
        path: "/crops-details",
        element: <CropProfile/> 
      }
    ],
  },
]);

function App() {
  return (
    <div>
      <Provider store={Store}>
        <div>
          <RouterProvider router={appRouter}></RouterProvider>
        </div>
      </Provider>
    </div>
  );
}

export default App;

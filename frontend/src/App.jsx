import HomePage from "./pages/homepage";

import Signup from "./pages/signup";
import Login from "./pages/login";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { FarmerDetails } from "./pages/farmerDetails";
import FarmerProfile from "./pages/FarmerProfile";
import { BuyerDetails } from "./pages/BuyerDetails";
import { CropContainer } from "./pages/cropContainer";
import { Store } from "./utils/store";
import Parent from "./pages/parent";

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

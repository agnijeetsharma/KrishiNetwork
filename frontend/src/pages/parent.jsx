
import { Outlet } from "react-router-dom";
import { SideBar } from "../components/sideBar";

const Parent = () => {
  return (
    <div>
      {/* <h1>Welcome to the Home Page</h1> */}
      <SideBar/>
      <Outlet />
    </div>
  );
};

export default Parent;

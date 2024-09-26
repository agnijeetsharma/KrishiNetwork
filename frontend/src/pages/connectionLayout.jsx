import { Outlet } from "react-router"
// import Followers from "./Followers"

export const ConnectioLayout=()=>{
return (
    <div>
        {/* <Followers/> */}
        <Outlet/>
    </div>
)
}
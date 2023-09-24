import { Outlet } from "react-router-dom";
import { Navbar } from "../components/navber/Navbar";
const Mainlayout = () => {
  return (
    <div>
        <Navbar/>
        <Outlet/>
    </div>
    
  )
}

export default Mainlayout
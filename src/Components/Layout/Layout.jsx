import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div className="h-[1000px]">
        <Navbar />
        <Outlet  />
      </div>
    </>
  );
};

export default Layout;

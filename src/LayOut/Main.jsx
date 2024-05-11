/** @format */

import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="max-w-screen-lg mx-auto">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Main;

/** @format */

import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Main;

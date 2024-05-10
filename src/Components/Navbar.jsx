/** @format */

import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from '../../public/logo-2.png'

const Navbar = () => {
  const links = (
    <>
      <NavLink className= "text-xl mr-4 underline" to={'/'}>
        <a>Home</a>
      </NavLink>
      <NavLink className= "text-xl mr-4 underline" to={'/'}>
        <a>All Foods</a>
      </NavLink>
      <NavLink className= "text-xl mr-4 underline" to={'/'}>
        <a>Gallery</a>
      </NavLink>
     
    </>
  );
  return (
    <div>
      <div className="navbar text-gray-800 bg-white">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {links}
            </ul>
          </div>
          <img className="w-40" src={logo} alt="" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
           {links}
          </ul>
        </div>
        <div className="navbar-end">
          <Link to={'/login'} className="btn">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

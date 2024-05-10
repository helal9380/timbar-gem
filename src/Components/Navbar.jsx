/** @format */

import React, { useContext } from "react";
import { Link, NavLink, Navigate } from "react-router-dom";
import logo from '../../public/logo-2.png'
import { authContext } from "../AuthProvider/AuthProvider";
import toast from "react-hot-toast";

const Navbar = () => {
  const {user, logOut} = useContext(authContext)
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

  const handleLogOut = () => {
    logOut()
    .then(() => {
      toast.success('Successfully log out')
      Navigate('/')
    })
  }
  return (
    <div>
      <div className="navbar bg-[#9d0b0be1]">
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
          {
            user ? <Link onClick={handleLogOut} className="btn">Log out</Link>
            : <Link to={'/login'} className="btn">Login</Link>
          }
        </div>
      </div>
    </div>
  );
};

export default Navbar;

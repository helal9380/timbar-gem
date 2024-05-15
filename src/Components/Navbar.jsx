/** @format */

import React, { useContext } from "react";
import { Link, NavLink, Navigate } from "react-router-dom";
import logo from "../../public/logo-2.png";
import { authContext } from "../AuthProvider/AuthProvider";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, logOut } = useContext(authContext);
  const links = (
    <>
      <NavLink
        className="md:text-xl mr-4 underline"
        to={"/"}>
        <a>Home</a>
      </NavLink>
      <NavLink
        className="md:text-xl mr-4 underline"
        to={"/allFoods"}>
        <a>All Foods</a>
      </NavLink>
      <NavLink
        className="md:text-xl mr-4 underline"
        to={"/gallery"}>
        <a>Gallery</a>
      </NavLink>
    </>
  );

  const handleLogOut = () => {
    logOut().then(() => {
      toast.success("Successfully log out");
      window.location.reload();
    });
  };
  return (
    <div>
      <div className="flex items-center justify-between px-2">
        <div className="navbar w-60">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className=" mr-2 lg:hidden">
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
              className="menu space-y-2 menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-base-100 rounded-box w-52">
              {links}
            </ul>
          </div>
          <h3 className="text-2xl font-semibold w-60">Bite Spot Cafe</h3>
        </div>
        <div className="flex">
          <div className=" hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{links}</ul>
          </div>
        </div>
        {user ? (
          <div className="dropdown flex gap-5 dropdown-end">
            <button
              className="font-semibold"
              onClick={handleLogOut}>
              Logout
            </button>
            <div
              tabIndex={0}
              role="button"
              className="btn  btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src={user?.photoURL}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-12 space-y-2 z-10 p-2 shadow menu menu-md dropdown-content bg-base-100 rounded-box text-white w-52">
              <li className="border-b border-[#b65a18]">
                <Link
                  to={"/myFoods"}
                  className="justify-between">
                  My foods
                </Link>
              </li>
              <li className="border-b border-[#b65a18]">
                <Link to={"/addFood"}>Add a food</Link>
              </li>
              <li className="border-b border-[#b65a18]">
                <Link to={"/myOrders"}>My ordered</Link>
              </li>
            </ul>
          </div>
        ) : (
          <Link
            className="text-lg font-semibold"
            to={"/login"}>
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;

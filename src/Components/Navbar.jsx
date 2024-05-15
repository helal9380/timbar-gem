/** @format */

import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink, Navigate } from "react-router-dom";
import logo from "../../public/logo-2.png";
import { authContext } from "../AuthProvider/AuthProvider";
import toast from "react-hot-toast";

const Navbar = () => {
  const [theme, setTheme] = useState("light");
  const { user, logOut } = useContext(authContext);
  const links = (
    <>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "bg-[#b63518] md:text-xl font-semibold ml-2 text-white py-1 lg:px-5 px-3 rounded-lg"
            : "py-1 lg:px-3 px-3 md:text-xl font-semibold"
        }
        to={"/"}>
        <a>Home</a>
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "bg-[#b63518] md:text-xl font-semibold ml-2 text-white py-1 lg:px-5 px-3 rounded-lg"
            : "py-1 lg:px-3 px-3 md:text-xl font-semibold"
        }
        to={"/allFoods"}>
        <a>All Foods</a>
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "bg-[#b63518] md:text-xl font-semibold ml-2 text-white py-1 lg:px-5 px-3 rounded-lg"
            : "py-1 lg:px-3 px-3 md:text-xl font-semibold"
        }
        to={"/gallery"}>
        <a>Gallery</a>
      </NavLink>
    </>
  );
  const handleTheme = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("ligth");
    }
  };
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const locathem = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", locathem);
  }, [theme]);
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
            <label className="swap swap-rotate">
              {/* this hidden checkbox controls the state */}
              <input
                onChange={handleTheme}
                type="checkbox"
                className="theme-controller"
                // value="synthwave"
              />

              {/* sun icon */}
              <svg
                className="swap-off fill-current w-10 h-10"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24">
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>

              {/* moon icon */}
              <svg
                className="swap-on fill-current w-10 h-10"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24">
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>
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
              className="mt-12 space-y-2 z-10 p-2 shadow menu menu-md dropdown-content bg-base-100 rounded-box text-xl font-semibold w-52">
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

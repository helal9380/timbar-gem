/** @format */

import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div
      style={{
        backgroundImage: "url(https://i.ibb.co/cygdknh/15.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "32px",
        backgroundRepeat: "no-repeat",
      }}>
      <div className="w-[40%] mx-auto rounded-xl border border-gray-400 bg-[rgba(0,0,0,0.4)] text-white">
        <h1 className=" text-xl md:text-4xl font-bold text-center mt-5">Login now!</h1>
        <form className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <p>
                Do not have an account? <Link className="text-[#e7272d]" to="/register">Register</Link>
              </p>
            </label>
          </div>
          <div className="form-control mt-6">
          <button type="button" class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

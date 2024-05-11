/** @format */

import React, { useContext } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { authContext } from "../../AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
  const {signIn, user, signInWithGoogle} = useContext(authContext);
  const navigate = useNavigate()


  const handleLogin = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password)
    .then(result => {
      console.log(result.user);
      toast.success('Successfully login')
    })
    .catch(error => {
      console.log(error.message);
      toast.error(error)
    })
  }
  const handleGoogle = () => {
    signInWithGoogle()
    .then(result => {
      console.log(result.user);
      navigate('/')
    })
    .catch(err => {
      console.log(err);
    })
  }
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
        <form onSubmit={handleLogin} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
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
              name="password"
              placeholder="Password"
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
          <input className="bg-[#e7272d] cursor-pointer py-2 rounded-lg" type="submit" value="Login" />
          </div>
        </form>
        <div onClick={handleGoogle} className="my-2 flex justify-center">
          <FaGoogle className="border border-red-400 w-10 h-10 p-2 rounded-full cursor-pointer"></FaGoogle>
        </div>
      </div>
    </div>
  );
};

export default Login;

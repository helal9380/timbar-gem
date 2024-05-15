/** @format */

import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { authContext } from "../../AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import { FaGoogle } from "react-icons/fa";
import { Helmet } from "react-helmet-async";

const Login = () => {
  const [err, setErr] = useState('')
  const navigate = useNavigate()
  const location = useLocation();
  const {signIn, signInWithGoogle} = useContext(authContext);
 
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
      navigate(location?.state ? location.state : "/");
    })
    .catch(error => {
      console.log(error.message);
      toast.error(error)
      setErr('Please provide correct infomation')
    })
  }
  const handleGoogle = () => {
    signInWithGoogle()
    .then(result => {
      console.log(result.user);
      navigate(location?.state ? location.state : "/");
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
   <Helmet>
    <title>Bite Spot Cafe | login</title>
   </Helmet>
      <div className="w-[40%] mx-auto rounded-xl text-white border border-gray-400 bg-[rgba(0,0,0,0.4)] ">
        <h1 className=" text-xl md:text-4xl font-bold text-center mt-5">Login now!</h1>
        <form onSubmit={handleLogin} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Email</span>
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
              <span className="label-text text-white">Password</span>
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
          <p className="text-red-500 font-semibold">{err}</p>
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

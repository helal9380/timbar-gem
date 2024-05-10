/** @format */

import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../../AuthProvider/AuthProvider";
import toast from "react-hot-toast";

const Register = () => {
  const  {createUser} = useContext(authContext)

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email,password);
    createUser(email, password)
    .then(result => {
      console.log(result.user);
      toast.success('Registeration successful')
    })
    .catch(error => {
      console.log(error);
      toast.error('Somthing error')
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
        <h1 className="text-xl md:text-4xl font-bold text-center mt-5">Sign Up now!</h1>
        <form onSubmit={handleRegister} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="input input-bordered"
            />
          </div>
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
                Have you already account? please{" "}
                <Link
                  className="text-[#e7272d]"
                  to="/login">
                  Login
                </Link>
              </p>
            </label>
          </div>
          <div className="form-control mt-6">
         <input className="bg-[#e7272d] py-2 rounded-lg" type="submit" value="Register" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;

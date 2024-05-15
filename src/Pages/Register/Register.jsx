/** @format */

import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authContext } from "../../AuthProvider/AuthProvider";
import toast from "react-hot-toast";

const Register = () => {
  const  {createUser} = useContext(authContext)
  const [err, setErr] = useState('')
  const navigate = useNavigate()

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;
    const uppercase = /[A-Z]/.test(password);
    const lowercase = /[a-z]/.test(password);
    if(!uppercase) {
      return toast.error('Password must contain at least one uppercase character.')
    }
    else if(!lowercase) {
      return toast.error('Password must contain at least one lowercase character.')
    }
    else if (password.length < 6) {
      return toast.error('Password must be six charecter or longer')
    }
    const user = {name, email, photo};
    console.log(name, email,password);
    createUser(email, password)
    .then(result => {
      console.log(result.user);
      toast.success('Registeration successful')
      navigate('/')
    })
    .catch(error => {
      console.log(error);
      toast.error('Somthing error')
    })

    fetch('https://restaurant-server-ten.vercel.app/users', {
      method: 'POST',
      headers: {
        'content-type' : 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(result => {
      console.log(result);
      toast.success('User successfully added')
    })
    .catch(err => {
      console.log(err);
      setErr('Sorry somthing wrong')
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
              <span className="label-text">Photo url</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Photo URL"
              className="input input-bordered"
          
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
          <p className="text-red-500 font-semibold">{err}</p>
          <div className="form-control mt-6">
         <input className="bg-[#e7272d] py-2 rounded-lg" type="submit" value="Register" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;

import React from 'react';
import {
    FaFacebook,
    FaHome,
    FaInstagram,
    FaPhone,
    FaTwitter,
  } from "react-icons/fa";
  import { MdEmail } from "react-icons/md";
  import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <div>
        <footer className="footer footer-center p-10 bg-[#4f311b] text-white rounded">
          <div>
            <h2 className="text-3xl font-semibold">
            Bite Spot  <span className="text-[#ffa667]">Cafe</span>
            </h2>
          </div>
          <div className="md:flex justify-between md:w-full md:px-40">
            <div>
              <h2 className="text-xl font-semibold text-start mb-5">Contact us</h2>
              <div className="flex items-center gap-3">
                <div className="w-[30px] flex items-center justify-center rounded-full h-[30px] bg-[#b65a18]">
                  <FaPhone></FaPhone>
                </div>
                <p>
                  <span className="font-semibold">Phone:</span> 01875639815
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-[30px] my-5 flex items-center justify-center rounded-full h-[30px] bg-[#b65a18]">
                  <MdEmail></MdEmail>
                </div>
                <p>
                  <span className="font-semibold text-start">Email:</span>{" "}
                  asadurrahman9380@gmail.com
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-[30px] flex items-center justify-center rounded-full h-[30px] bg-[#b65a18]">
                  <FaHome></FaHome>
                </div>
                <p>
                  <span className="font-semibold">Address:</span> Chattagram,
                  Bangladesh
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-xl text-start font-semibold mb-5">Menu</h2>
              <div className="flex flex-col gap-5 text-start">
                <Link className="underline" to={"/"}>Home</Link>
                <Link className="underline" to={"/register"}>Register</Link>
                <Link className="underline" to={"/login"}>Login</Link>
                <Link className="underline" to={"/allFoods"}>All Foods</Link>
              </div>
            </div>
          </div>
          <div className="w-full h-[1px] bg-[#b65a18]"></div>
         
          <nav>
            <div className="grid grid-flow-col gap-4">
              <a href="https://www.facebook.com/profile.php?id=100053803277283">
                <FaFacebook></FaFacebook>
              </a>
              <a href="https://twitter.com/i/flow/single_sign_on">
                <FaTwitter></FaTwitter>
              </a>
              <a href="https://www.instagram.com/md9981rahman/">
                <FaInstagram></FaInstagram>
              </a>
            </div>
          </nav>
          <aside>
            <p>Copyright © 2024 - All right reserved by Timber Gem</p>
          </aside>
        </footer>
      </div>
    );
};

export default Footer;
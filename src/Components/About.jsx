/** @format */

import { Helmet } from "react-helmet-async";
import { FaLongArrowAltRight } from "react-icons/fa";

const About = () => {
  return (
    <div>
      <Helmet>
        <title>Bite Spot Cafe | about</title>
      </Helmet>
      <div className="text-center">
        <h2 className="text-3xl font-semibold my-4">
          About 
          <span className="text-[#b65a18]">Us</span>
        </h2>
        <p className="md:w-1/2 mx-auto mb-5">
          Step into the world of TimberGem, where passion for craftsmanship
          meets reverence for nature. Founded with a vision to celebrate the
          timeless elegance of wood and the rustic charm of jute,{" "}
        </p>
      </div>
      <div className="md:flex">
        <div className="md:w-1/2">
          <img
            src="https://i.ibb.co/C2HFCMy/shourav-sheikh-a66s-Gf-Onnq-Q-unsplash-3.jpg"
            alt=""
          />
        </div>
        <div className="md:w-1/2">
          <div className=" text-white bg-[#4f311b] right-0 w-full h-full">
            <div className="px-10 py-5">
              <h2 className="">Bite Spot Cafe</h2>
              <p>
              Welcome to [Bite Spot Cafe], where culinary passion meets exceptional dining experiences. Nestled in the heart of [india], our restaurant offers a delightful blend of contemporary and classic cuisine, crafted with the freshest ingredients and a dash of creativity. 
              </p>
              <p className="text-2xl font-semibold my-6">
                We are available for 24/7 for you requirements
              </p>
              <div className="flex justify-between">
                <p className="flex gap-3 items-center">
                  {" "}
                  <FaLongArrowAltRight /> <span>Complete Savety Analysis</span>
                </p>
                <p className="flex gap-3 items-center">
                  {" "}
                  <FaLongArrowAltRight /> <span>Open 7 days a week</span>
                </p>
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

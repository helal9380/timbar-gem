/** @format */

import { FaLongArrowAltRight } from "react-icons/fa";

const About = () => {
  return (
    <div>
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
      <div className="flex">
        <div className="w-1/2">
          <img
            src="https://i.ibb.co/C2HFCMy/shourav-sheikh-a66s-Gf-Onnq-Q-unsplash-3.jpg"
            alt=""
          />
        </div>
        <div className="flex-1 relative fluid-work-area work-promo">
          <div className="absolute top-0 text-white bg-[#4f311b] right-0 w-full h-full">
            <div className="px-10 ">
              <h2 className="my-5">Bite Spot Cafe</h2>
              <p>
              Welcome to [Bite Spot Cafe], where culinary passion meets exceptional dining experiences. Nestled in the heart of [india], our restaurant offers a delightful blend of contemporary and classic cuisine, crafted with the freshest ingredients and a dash of creativity. 
              </p>
              <p className="text-2xl font-semibold my-5">
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

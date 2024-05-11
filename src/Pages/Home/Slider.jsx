/** @format */
import { Typewriter } from "react-simple-typewriter";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import "./slide.css";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

const Slider = () => {
  return (
    <div>
      <Swiper
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Autoplay, Pagination]}
        loop={true}>
        <SwiperSlide>
          <div className="slide slide1">
            <div
              data-aos="fade-down"
              data-aos-duration="1000"
              className=" text-white md:w-[70%] mx-auto text-center">
              <h2 className="md:text-2xl lg:text-6xl leading-snug text-2xl font-bold mb-3">
                <span className="text-[#b65a18]">Choosing The  .</span>
                <Typewriter  
                  loop
                  cursor
                  words={["Best", "Food", "Items"]}
                  cursorStyle="|"
                />
              </h2>

              <p className="mb-5 hidden md:block">
              Embark on a culinary journey around the world with TastyTrekker.com. Discover exotic flavors, traditional recipes
              </p>
              <Link to={'/all_foods'}
                className="py-2 px-4 border border-[#b65a18] rounded-lg font-bold">
                All Foods
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide slide2">
            <div
              data-aos="fade-down"
              data-aos-duration="1000"
              className=" text-white md:w-[70%] mx-auto text-center">
              <h2 className="md:text-4xl lg:text-6xl leading-snug text-2xl font-bold mb-3">
                {" "}
                <span className="text-[#b65a18]">Global:</span>
                <Typewriter
                  loop
                  cursor
                  words={['Adventures', 'Gastronomic', 'Food']}
                  cursorStyle="_"
                />
              </h2>
              <p className="mb-5 hidden md:block">
              Delight your taste buds with the freshest ingredients and seasonal delights. From vibrant spring salads to cozy winter stews, TastyTrekker.com brings you recipes that celebrate the flavors of each season.
              </p>
              <Link to={'/all_foods'}
                className="py-2 px-4 border border-[#b65a18] rounded-lg font-bold">
                All Foods
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide slide3">
            <div
              data-aos="fade-down"
              data-aos-duration="1000"
              className=" text-white md:w-[70%] mx-auto text-center">
              <h2 className="md:text-4xl lg:text-6xl leading-snug text-2xl font-bold mb-3">
             
                <span className="text-[#b65a18]">Weekend :</span>
                <Typewriter
                  loop
                  cursor
                  words={['Brunch ','Edition', 'Rice']}
                  cursorStyle="_"
                />
              </h2>
              <p className="mb-5 hidden md:block">
              Elevate your weekend brunch experience with mouthwatering recipes and creative twists on classic favorites. Whether you're hosting a gathering or enjoying a leisurely morning at home,
              </p>
              <Link to={'/all_foods'}
                className="py-2 px-4 border border-[#b65a18] rounded-lg font-bold">
                All Foods
              </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;

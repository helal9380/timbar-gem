/** @format */

import { Helmet } from "react-helmet-async";
import { Link, useLoaderData } from "react-router-dom";

const FoodDEtails = () => {
  const data = useLoaderData();
  const { _id, imgUrl, name, userName, pric,shortDes,country, subcategory } = data;
  console.log(data);
  return (
    <div>
      <Helmet>
        <title>Bite Spot Cafe | food details</title>
      </Helmet>
      <div
        className="flex my-5 rounded-xl justify-center items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url(${imgUrl})`,
          backgroundPosition: "center",
          height: "50vh",
        }}>
        <h3 className="text-center text-white font-semibold text-3xl">Details food</h3>
      </div>

      <div className="flex items-center mb-10 border-t-2 py-5  gap-5">
        <div className="w-1/2">
          <img
            src={imgUrl}
            alt=""
            className="rounded-lg"
          />
        </div>
        <div className="w-[2px] h-[224px] bg-red-700"></div>
        <div className="flex-1 items-center space-y-3">
          <h2>
            <span className="font-semibold">Name : </span>
            {name}
          </h2>
          <h2>
            <span className="font-semibold">Category : </span>
            {subcategory}
          </h2>
          <p>
            <span className="font-semibold">Description : </span>
            {shortDes}
          </p>
          <h2>
            <span className="font-semibold">Made by : </span>
            {userName}
          </h2>
          <h2>
            <span className="font-semibold">Country : </span>
            {country || 'INDIA'}
          </h2>
          <h2>
            <span className="font-semibold">Price : </span>
            {pric}
          </h2>
          <div className="py-2 px-5 text-white font-semibold text-center bg-[#b61818] rounded-lg mt-3">
            <Link to={`/purchass/${_id}`}>Purchase</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDEtails;

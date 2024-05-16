/** @format */

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import Food from "./Food";

const TopFoods = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    fetch("https://restaurant-server-ten.vercel.app/topFoods")
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, []);
  console.log(foods);
  return (
    <div>
      <div className="text-center my-10">
        <h2 className="text-xl font-semibold">Top Food</h2>
        <h2 className="text-3xl font-semibold my-2">
          Culinary Adventures Await!
        </h2>
        <p className="md:w-1/2 mx-auto">
          Dive into a world of tantalizing flavors and culinary inspiration with
          Gourmet Delights! Explore a treasure trove of mouthwatering recipes,{" "}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {foods?.map((food) => (
          <div key={food._id} className="">
            <div className=" h-[300px] mb-5">
              <figure className="mb-5 pt-10">
                <img
                  src={food?.foodImg}
                  alt=""
                  className="rounded-xl h-full object-fit"
                />
              </figure>
            </div>
            <span>
              Order : {food?.count}{" "}
            </span>
            <div className="space-y-2 mt-2">
              <h2 className="card-title">Food Name : {food?.foodName}</h2>
              <h2 className="card-title">Buyer Name : {food?.buyerName}</h2>
              <p>
                <span className="font-semibold">Price : </span>
                {food?.price}
              </p>

              <div className="card-actions">
                <Link
                  to={`/details/${food?._id}`}
                  className="text-white font-semibold rounded-lg py-2 px-5 bg-[#de2020] border border-[#de2020]">
                  Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopFoods;

/** @format */

import { Link } from "react-router-dom";

const Food = ({ food }) => {
  const { _id, foodImg, foodName, price, count } = food;
  return (
    <div className="">
      <div className=" h-[300px]">
        <figure className="mb-5 pt-10">
          <img
            src={foodImg}
            alt=""
            className="rounded-xl h-full object-fit"
          />
        </figure>
      </div>
      <span className="font-semibold bg-[#38543c] py-1 px-4 rounded-xl">
        Order : {count}{" "}
      </span>

      <div className="space-y-2 mt-5">
        <h2 className="card-title">{foodName}</h2>
        <p>
          <span className="font-semibold">Price : </span>
          {price}
        </p>

        <div className="card-actions">
          <Link
            to={`/details/${_id}`}
            className=" rounded-lg py-2 px-5 bg-[#de2020] border border-[#de2020]">
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Food;

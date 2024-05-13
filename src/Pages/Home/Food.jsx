/** @format */

import { Link } from "react-router-dom";

const Food = ({ food }) => {
  const { _id, imgUrl, name, subcategory } = food;
  return (
    <div className="">
      <figure className=" pt-10">
        <img
          src={imgUrl}
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <div className="space-y-2 mt-5">
        <h2 className="card-title">{name}</h2>
        <p>
          <span className="font-semibold">Category :</span>
          {subcategory}
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

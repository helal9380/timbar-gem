/** @format */

import { Link } from "react-router-dom";

const Food = ({ food }) => {
  const { _id, food_image,imgUrl, name, food_origin, price,subcategory } = food;
  return (
    <div className="">
      <figure className="px-10 pt-10">
        <img
          src={imgUrl}
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p><span>Category :</span>{subcategory}</p>
        <div className="card-actions">
          <Link to={`/details/${_id}`} className="btn btn-primary">Details</Link>
        </div>
      </div>
    </div>
  );
};

export default Food;

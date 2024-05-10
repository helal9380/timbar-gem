/** @format */

import { Link } from "react-router-dom";

const FoodCard = ({ food }) => {
  console.log(food);
  const { _id, food_name, food_image, food_category,price } = food;
  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={food_image}
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{food_name}</h2>
          <p><span>Category : </span>{food_category}</p>
          <h3>Price : {price}</h3>
          <div className="card-actions">
            <Link to={`/details/${_id}`} className="py-2 px-5 border border-red-500 rounded-lg">Details</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;

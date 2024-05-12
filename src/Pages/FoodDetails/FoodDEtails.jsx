/** @format */

import { Link, useLoaderData } from "react-router-dom";

const FoodDEtails = () => {
  const data = useLoaderData();
  const {
    _id,
    food_image,
    food_name,
    food_origin,
    price,
    description,
    food_category,
  } = data;
  console.log(data);
  return (
    <div>
      <div className="flex my-5 rounded-xl justify-center items-center" style={{backgroundImage: `url(${food_image})`, backgroundPosition: 'center', height: '50vh'}}>
        <h3 className="text-center font-semibold text-3xl">Details food</h3>
      </div>

      <div className="flex mb-10  gap-5">
        <div className="w-1/2">
            <img src={food_image} alt="" />
        </div>
        <div className="flex-1 items-center space-y-3 text-white">
            <h2><span className="font-semibold">Name : </span>{food_name}</h2>
            <h2><span className="font-semibold">Category : </span>{food_category}</h2>
            <p><span className="font-semibold">Description : </span>{description}</p>
            <h2><span className="font-semibold">Made by : </span>{food_origin}</h2>
            <h2><span className="font-semibold">Price : </span>{price}</h2>
            <div className="py-2 px-5 font-semibold text-center bg-[#b61818] rounded-lg mt-3">
            <Link to={`/purchass/${_id}`} >Purchase</Link>
            </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDEtails;

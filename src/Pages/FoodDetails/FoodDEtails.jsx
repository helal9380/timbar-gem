/** @format */

import { Helmet } from "react-helmet-async";
import { Link, useLoaderData } from "react-router-dom";

const FoodDetails = () => {
  const data = useLoaderData();
  const { _id, imgUrl, name, userName, quantity, pric, shortDes, country, subcategory } = data;
  console.log(data);
console.log(quantity);
  return (
    <div>
      <Helmet>
        <title>Bite Spot Cafe | Food Details</title>
      </Helmet>
      <div
        className="flex my-5 rounded-xl justify-center items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url(${imgUrl})`,
          backgroundPosition: "center",
          height: "50vh",
        }}>
        <h3 className="text-center text-white font-semibold text-3xl">Details Food</h3>
      </div>

      <div className="flex items-center mb-10 border-t-2 py-5 gap-5">
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
            <span className="font-semibold">Name: </span>
            {name}
          </h2>
          <h2>
            <span className="font-semibold">Category: </span>
            {subcategory}
          </h2>
          <p>
            <span className="font-semibold">Description: </span>
            {shortDes}
          </p>
          <h2>
            <span className="font-semibold">Made by: </span>
            {userName}
          </h2>
          <h2>
            <span className="font-semibold">Country: </span>
            {country || 'INDIA'}
          </h2>
          <h2>
            <span className="font-semibold">Price: </span>
            {pric}
          </h2>
          <h2>
            <span className="font-semibold">Quantity: </span>
            {quantity}
          </h2>
          {quantity == 0 ? (
            <div className="font-semibold flex flex-col text-red-600">
              This item is not available.
              <button
                className="py-2 px-5 text-white font-semibold text-center bg-gray-400 rounded-lg mt-3 cursor-not-allowed"
                disabled>
                Purchase
              </button>
            </div>
          ) : (
            <div className="py-2 px-5 text-white font-semibold text-center bg-[#b61818] rounded-lg mt-3">
              <Link to={`/purchass/${_id}`}>Purchase</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;

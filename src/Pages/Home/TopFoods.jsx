/** @format */

import { useEffect, useState } from "react";
import Food from "./Food";

const TopFoods = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    fetch("https://restaurant-server-ten.vercel.app/all_foods")
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
        {
            foods.map(food => <Food key={food._id} food={food}></Food>)
        }
      </div>
    </div>
  );
};

export default TopFoods;

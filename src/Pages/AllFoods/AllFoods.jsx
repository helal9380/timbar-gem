/** @format */

import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useLoaderData } from "react-router-dom";

const AllFoods = () => {
  const data = useLoaderData();
  const [searchResults, setSearchResults] = useState(data);

  const handleSearch = async (e) => {
    e.preventDefault();
    const form = e.target;
    const search = form.search.value;

    fetch(
      `https://restaurant-server-ten.vercel.app/searchFoods?name=${encodeURIComponent(
        search
      )}`
    )
      .then((res) => res.json())
      .then((data) => {
        setSearchResults(data);
      });
  };

  return (
    <div className="mt-5">
       <Helmet>
    <title>Bite Spot Cafe | all foods</title>
   </Helmet>
      <div
        className="rounded-lg flex justify-center items-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(https://i.ibb.co/r0t9sGb/stefan-vladimirov-Q-Moi2xjie-U-unsplash.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: "50vh",
        }}>
        <div>
          <h3 className="text-3xl text-center my-2 text-white font-semibold">All Food</h3>
          <form className="flex gap-2" onSubmit={handleSearch}>
           
            <input type="text" name="search"
              placeholder="Search Food" className="input input-bordered w-full max-w-xs" />
            <input
              className="py-2 px-5 bg-[#b63518] font-semibold text-white rounded-md ml-2"
              type="submit"
              value="Search"
            />
          </form>
        </div>
      </div>
      <div className="flex justify-center mt-5"></div>
      <div className="grid grid-cols-1 mt-10 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {searchResults.map((item) => (
          <div
            key={item._id}
            className="card card-compact">
            <figure>
              <img
                src={item?.imgUrl}
                alt="Food"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{item?.name}</h2>
              <p>
                <span className="font-semibold">Category : </span>
                {item.subcategory}
              </p>
              <p>
                <span className="font-semibold">Price : </span>
                {item?.pric}
              </p>
              <p>
                <span className="font-semibold">Add By : </span>
                {item?.userName}
              </p>
              <div className="card-actions">
                <Link
                  to={`/details/${item._id}`}
                  className="rounded py-2 px-5 bg-[#cd2828]">
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

export default AllFoods;

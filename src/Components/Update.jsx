/** @format */

import { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { authContext } from "../AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";

const Update = () => {
  const updatedData = useLoaderData();
  const { user } = useContext(authContext);
  console.log(updatedData);
  const navigate = useNavigate();
  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const imgUrl = form.imageUrl.value;
    const name = form.foodName.value;
    const subcategory = form.subCategory.value;
    const shortDes = form.shortDescription.value;
    const pric = form.price.value;
    console.log(subcategory);
    const updatedFood = {
      imgUrl,
      name,
      subcategory,
      shortDes,
      pric,
    };

    fetch(`https://restaurant-server-ten.vercel.app/update/${updatedData._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedFood),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          toast.success("Successfully added");
          navigate("/myFoods");
        }
        e.target.reset();
      });
  };
  return (
    <div className="text-center bg-[] max-w-screen-lg mx-auto">
      <Helmet>
        <title>Bite Spot Cafe | update</title>
      </Helmet>
      <h3 className="text-3xl font-semibold mt-5"> Update Food item</h3>
      <form
        onSubmit={handleUpdate}
        className="my-10">
        <div className="md:flex gap-5 justify-center">
          <div className="md:w-1/2 space-y-5">
            <label className="input input-bordered flex items-center gap-2">
              <p className="md:w-24 w-28">Image URL</p>
              <input
                type="text"
                name="imageUrl"
                defaultValue={updatedData?.imgUrl}
                className="grow w-full"
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <p className="md:w-32 w-28">Food Name</p>
              <input
                type="text"
                name="foodName"
                defaultValue={updatedData?.name}
                className="grow w-full"
              />
            </label>
            <label className="input  input-bordered flex items-center gap-2">
              <p className="w-32">Category name</p>
              <select
                name="subCategory"
                id=""
                type="text"
                defaultValue={updatedData?.subcategory}
                className="grow w-ful bg-transparent">
                <option
                  className="font-semibold"
                  disabled
                  selected
                  value=""></option>
                <option
                  className="font-semibold"
                  value="Recipes Galore">
                  Recipes Galore
                </option>
                <option
                  className="font-semibold"
                  value="Kitchen Tips & Tricks">
                  Kitchen Tips & Tricks
                </option>
                <option
                  className="font-semibold"
                  value="Ingredient Spotlight">
                  Ingredient Spotlight
                </option>
                <option
                  className="font-semibold"
                  value="Foodie Travel">
                  Foodie Travel
                </option>
              </select>
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <p className="w-48">Short description</p>
              <input
                type="text"
                name="shortDescription"
                className="grow w-full"
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <p className="w-28">Quantity</p>
              <input
                type="text"
                defaultValue={updatedData?.quantity}
                name="quantity"
                className="grow w-full"
              />
            </label>
          </div>
          <div className="flex-1 space-y-5">
            <label className="input input-bordered flex items-center gap-2">
              <p className=""> Price</p>
              <input
                type="text"
                name="price"
                defaultValue={updatedData?.pric}
                className="grow w-full"
              />
            </label>

            <label className="input input-bordered flex items-center gap-2">
              <p className="">Email</p>
              <input
                readOnly
                type="text"
                name="email"
                defaultValue={user?.email}
                className="grow w-full"
              />
            </label>

            <label className="input input-bordered flex items-center gap-2">
              <p className="md:w-24 w-28">Add by</p>
              <input
                readOnly
                type="text"
                name="username"
                className="grow w-full"
                defaultValue={user?.displayName}
              />
            </label>
            <label className="input text-white input-bordered flex items-center gap-2">
              <p className="w-20">Country</p>
              <select
                name="country"
                id=""
                type="text"
                className="grow w-ful">
                <option
                  className="font-semibold"
                  disabled
                  selected
                  defaultValue="Category">
                  Category
                </option>
                <option
                  className="font-semibold"
                  value="INDIAN">
                  INDIAN
                </option>
                <option
                  className="font-semibold"
                  value="THILANT">
                  THILANT
                </option>
                <option
                  className="font-semibold"
                  value="BANGLA">
                  BANGLA
                </option>
                <option
                  className="font-semibold"
                  value="CHINISS">
                  CHINISS
                </option>
              </select>
            </label>
            <button className="py-2 px-5 bg-[#b65a18] text-white font-semibold w-full my-5">
              Update food
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Update;

/** @format */

import { useContext } from "react";
import toast from "react-hot-toast";
import { authContext } from "../AuthProvider/AuthProvider";

const AddFood = () => {
  const { user } = useContext(authContext);
  const handleAdd = (e) => {
    e.preventDefault();
    const form = e.target;
    const imgUrl = form.imageUrl.value;
    const name = form.foodName.value;
    const subcategory = form.subCategory.value;
    const shortDes = form.shortDescription.value;
    const quantity = form.quantity.value;
    const pric = form.price.value;
    const userName = form.username.value;
    const userEmail = form.email.value;
    const country = form.country.value;
    console.log(country);
    const foods = {
 
      imgUrl,
      name,
      country,
      subcategory,
      shortDes,
      pric,
      quantity,
      userEmail,
      userName,
      count: 0
    };
console.log(foods);
    fetch("http://localhost:5000/addFood", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(foods),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success("Successfully added");
        }
        e.target.reset();
      });
  };
  return (
    <div className="text-center max-w-screen-lg mx-auto">
      <h3 className="text-3xl font-semibold mt-5"> Add Food Item</h3>
      <form
        onSubmit={handleAdd}
        className="my-10">
        <div className="md:flex gap-5 justify-center">
          <div className="md:w-1/2 space-y-5">
            <label className="input input-bordered flex items-center gap-2">
              <p className="md:w-24 w-28">Image URL</p>
              <input
                type="text"
                name="imageUrl"
                className="grow w-full"
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <p className="md:w-28 w-28">Food Name</p>
              <input
                type="text"
                name="foodName"
                className="grow w-full"
              />
            </label>
            <label className="input  input-bordered flex items-center gap-2">
              <p className="w-40">Category name</p>
              <select
                name="subCategory"
                id=""
                type="text"
                className="grow w-full">
                <option
                  className="font-semibold"
                  disabled
                  selected
                  value="Category"></option>
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
              <p className="">ID</p>
              <input
                type="text"
                name="id"
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
                  value="Category">
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
          </div>
        </div>
        <button className="py-2 px-5 bg-[#b65a18] text-white font-semibold w-full my-5">
          Add Food
        </button>
      </form>
    </div>
  );
};

export default AddFood;

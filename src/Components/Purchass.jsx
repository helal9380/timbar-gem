/** @format */

import { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { authContext } from "../AuthProvider/AuthProvider";
import toast from "react-hot-toast";

const Purchass = () => {
  const purchassed = useLoaderData();
  const naviate = useNavigate()
  const { user } = useContext(authContext);
  console.log(purchassed);

  const handlePurchass = (e) => {
    e.preventDefault();
    const form = e.target;
    const foodName = form.foodName.value;
    const quantity = form.quantity.value;
    const buyerName = form.buyerName.value;
    const price = form.price.value;
    const email = form.email.value;
    const date = form.date.value;
    const purchassedInformation = {
      foodName,
      quantity,
      buyerName,
      price,
      email,
      date,
    };
    console.log(purchassedInformation);
    fetch('http://localhost:5000/addPurchass', {
        method: 'POST',
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify(purchassedInformation)
    })
    .then(data => {
        console.log(data);
        toast.success('Congratulation!!')
        naviate('/')

    })
    .catch(err => {
        console.log(err);
    })
  };
  return (
    <div className="w-[80%] mx-auto">
      <h3 className="text-3xl font-semibold my-5 text-center">
        Food purchase information
      </h3>
      <div className="w-40 h-[2px] bg-[#b65a18] mx-auto mb-5"></div>
      <form
        onSubmit={handlePurchass}
        className=" p-4 border border-[#b65a18] rounded-md ">
        <div className="flex gap-5 w-full mb-5">
          <div className="w-full space-y-8">
            <label className="input input-bordered flex items-center gap-2">
              <span className="w-32">Food name :</span>
              <input
                type="text"
                name="foodName"
                className="grow w-full"
                defaultValue={purchassed.food_name}
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <span className="w-24">Quantity :</span>
              <input
                name="quantity"
                type="text"
                className="grow w-full"
                placeholder=""
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <span className="w-40">Buyer Name :</span>
              <input
                type="text"
                name="buyerName"
                readOnly
                className="grow w-full"
                defaultValue={user.displayName}
              />
            </label>
          </div>
          <div className="w-full space-y-8">
            <label className="input input-bordered flex items-center gap-2">
              <span className="w-16">Price :</span>
              <input
                type="text"
                name="price"
                className="grow w-full"
                defaultValue={purchassed.price}
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <span className="w-40">Buyer Email :</span>
              <input
                type="text"
                name="email"
                className="grow w-full"
                defaultValue={user?.email}
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <span className="w-20">Date :</span>
              <input
                type="text"
                name="date"
                className="grow w-full"
                defaultValue={new Date().toLocaleTimeString()}
              />
            </label>
          </div>
        </div>
        <input
          className="text-center font-semibold btn w-full hover:bg-[#b61818bf] bg-[#b61818]"
          type="submit"
          value="Purchass now"
        />
      </form>
    </div>
  );
};

export default Purchass;

/** @format */

import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const MyOrdered = () => {
  const myOrder = useLoaderData();
  const [foods, setFoods] = useState(myOrder)
  console.log(myOrder);

  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/all_foods/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
          const remaing = foods.filter(item => item._id !== id);
          setFoods(remaing)
      }
    });
    // fetch(`http://localhost:5000/all_foods/${id}`, {
    //   method: "DELETE",
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //   });
  };
  return (
    <div>
      <h3 className="text-3xl font-semibold my-5 text-center">
        My Ordered Foods
      </h3>
      <div className="w-40 h-[2px] bg-red-500 mx-auto mb-5"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {foods.map((item) => (
          <div
            key={item._id}
            className=" p-4 border-2 flex gap-4 border-[#b65a18] rounded">
            <figure className="">
              <img
                className="w-1/2"
                src={item?.imgUrl}
                alt="Shoes"
              />
            </figure>
            <div className="flex-1">
              <h2 className="text-xl font-semibold my-3">{item?.foodName}</h2>
              <div className="px-4 space-y-2 border-l-2 border-[#b65a18]">
                <p>
                  <span className="font-semibold">Food owner :</span>{" "}
                  {item?.buyerName}
                </p>
                <p>
                  <span className="font-semibold">Date :</span> {item?.date}
                </p>

                <p>
                  <span className="font-semibold">Price :</span> {item.price}
                </p>
              </div>
              <div className=" justify-end my-5">
                <button
                  onClick={() => handleDelete(item._id)}
                  className="py-2 px-5 transition-all border border-[#b65a18] text-[#b65a18] font-bold rounded-bl-full hover:bg-[#b65a18] hover:text-white ease-in">
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyOrdered;

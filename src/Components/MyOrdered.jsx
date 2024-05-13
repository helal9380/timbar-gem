/** @format */

import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { authContext } from "../AuthProvider/AuthProvider";

const MyOrdered = () => {
  const { user } = useContext(authContext);
  const [myFoods, setMyfoods] = useState([]);

  console.log(myFoods);
  useEffect(() => {
    fetch(`http://localhost:5000/myOrders/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyfoods(data));
  }, []);

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
        const remaing = myFoods.filter(item => item._id !== id);
        setMyfoods(remaing)
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
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Food Name</th>
              <th>Email</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {myFoods.map((item, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>{item?.foodName}</td>
                <td>{item?.email}</td>
                <td>{item.price}</td>
                <th>
                  <button
                  onClick={() => handleDelete(item._id)}
                    className="btn btn-ghost btn-xs">
                    Delete
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrdered;

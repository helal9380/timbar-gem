/** @format */

import { useContext, useEffect, useState } from "react";
import { authContext } from "../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const MyFoods = () => {
  const [myFoods, setMyfoods] = useState([]);
  const { user } = useContext(authContext);

  console.log(user?.email);
  useEffect(() => {
    fetch(`https://restaurant-ec162.web.app/myFoods/${user?.email}`, {credentials: 'include'})
      .then((res) => res.json())
      .then((data) => setMyfoods(data));
  }, []);
  console.log(myFoods);
  return (
    <div className="my-10">
      <Helmet>
        <title>Bite Spot Cafe | my foods</title>
      </Helmet>
      <h3 className="text-3xl font-semibold text-center">
        My all foods {myFoods.length}
      </h3>
      <div>
        <div className="overflow-x-auto max-w-screen-md mx-auto border rounded-lg border-white mt-5">
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr className="text-white border-b border-white font-semibold text-[16px]">
                  <th>Food Image</th>
                  <th>Food Name</th>
                  <th>Email</th>
                  <th>Price</th>
                  <th>Status</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {myFoods.map((food) => (
                  <tr>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={food?.imgUrl}
                              alt="img"
                            />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>{food?.name}</td>
                    <td>{food?.userEmail}</td>
                    <td>{food?.pric}</td>
                    <th>
                      <Link to={`/all_foods/${food?._id}`} className="btn btn-ghost btn-xs">Update</Link>
                    </th>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyFoods;

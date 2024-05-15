/** @format */

import { useContext } from "react";
import { useEffect, useState } from "react";
import { authContext } from "../../AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";

const Gallery = () => {
  const [images, setImages] = useState([]);
  const navigate = useNavigate();
  const { user } = useContext(authContext);
  useEffect(() => {
    fetch("https://restaurant-server-ten.vercel.app/gallery")
      .then((res) => res.json())
      .then((data) => setImages(data));
  }, []);


  console.log(images);
  const handleUpdate = (e,id) => {
    const form = e.target;
    const feedback = form.feedback.value;
    const img = form.img.value;
    const feedbackUser = {feedback, img};
    console.log(feedbackUser);
 
    fetch(`https://restaurant-server-ten.vercel.app/feedback/${id}`, {
      method: 'PUT',
      headers: {
        'content-type' : 'application/json'
      },
      body: JSON.stringify(feedbackUser)
    })
  };
  return (
    <div>
      <div
        className="flex justify-center items-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(https://i.ibb.co/QMWMz2Q/ella-olsson-o-PBj-WBCc-AEo-unsplash.jpg)",
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: "30vh",
        }}>
        <h2 className="text-4xl font-semibold text-white">Gallery</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 my-10">
        {images?.map((item) => (
          <div
            className="relative"
            key={item?.id}>
            <img
              src={item?.imgUrl}
              alt=""
              style={{
                transition: "transform 0.3s ease",
                ":hover": { transform: "scale(1.05)" },
              }}
            />
            <div className="absolute top-0 p-5 bg-[#000000ab] w-full h-full opacity-0 hover:opacity-100">
              <h3>
                <span className="font-semibold">Name : </span>
                {item?.name}
              </h3>
              <h3>
                <span className="font-semibold">Price : </span>
                {item?.pric}
              </h3>
             
              {/* You can open the modal using document.getElementById('ID').showModal() method */}
              <button
                className="py-1 mt-5 px-4 border border-red-600 rounded-lg"
                onClick={() =>
                  document.getElementById("my_modal_3").showModal()
                }>
                Add
              </button>
              <dialog
                id="my_modal_3"
                className="modal">
                <div className="modal-box">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                      ✕
                    </button>
                  </form>
                  <form>
                  <input
                    type="text"
                    name="name"
                    readOnly
                    defaultValue={user?.displayName || "user name"}
                    className="input input-bordered input-md w-full "
                  />

                  <input
                    type="text"
                    name="feedback"
                    placeholder="Feedback"
                    className="input input-bordered mt-5 input-md w-full "
                  />
                  <input
                    type="text"
                    name="img"
                    placeholder="Image Url"
                    defaultValue={item?.imgUrl}
                    className="input input-bordered mt-5 input-md w-full "
                  />
           
                  <button onClick={() => handleUpdate(item._id)}  className="cursor-pointer my-3 py-1 px-4 bg-red-600 font-white font-semibold rounded">Feedback</button>
                  </form>
                </div>
              </dialog>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;

/** @format */

import { useEffect, useState } from "react";

const Gallery = () => {
    const [images, setImages] = useState([])
    useEffect( () => {
        fetch('http://localhost:5000/gallery')
        .then(res => res.json())
        .then(data => setImages(data))
    },[])
    console.log(images);
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
      <h2 className="text-4xl font-semibold text-white">Our Gallery</h2>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 my-10">
        {
            images.map(image => (
                <div className="relative" key={image.id}>
                    <img 
                        src={image.food_image} 
                        alt=""
                        style={{
                            transition: "transform 0.3s ease",
                            ":hover": { transform: "scale(1.05)" }
                        }}
                    />
                    <div className="absolute top-0 p-5 bg-[#000000ab] w-full h-full opacity-0 hover:opacity-100">
                        <h3><span>Name : </span>{image.food_name}</h3>
                        <h3><span>Price : </span>{image.price}</h3>
                    </div>
                </div>
            ))
        }
    </div>
    </div>
  );
};

export default Gallery;

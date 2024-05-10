import { useEffect, useState } from "react";
import FoodCard from "./FoodCard";


const Foods = () => {
    const [foods, setFoods] = useState([])

    useEffect( () => {
        fetch('http://localhost:5000/foods')
        .then(res => res.json())
        .then(data => setFoods(data))
    },[])
    return (
        <div className="my-10">
            <h2 className="text-center text-4xl ">All foods {foods.length}</h2>
            <p className="md:w-1/2 mx-auto text-center">Explore a world of culinary delights with Flavorful Fare! From tantalizing recipes to mouthwatering food stories, embark on a journey where every bite tells a story. Join us as we celebrate the joy of cooking, savoring, and sharing delicious experiences together</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {
                    foods.map(food => <FoodCard key={food._id} food={food}></FoodCard>)
                }
            </div>
        </div>
    );
};

export default Foods;
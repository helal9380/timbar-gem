import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AllFoods from "../Pages/AllFoods/AllFoods";
import FoodDEtails from "../Pages/FoodDetails/FoodDEtails";
import Purchass from "../Components/Purchass";
import Gallery from "../Pages/Gallery/Gallery";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element:<Home></Home>
        },
        {
            path: '/login',
            element:<Login></Login>
        },
        {
            path: '/register',
            element:<Register></Register>
        },
        {
            path: '/all_foods',
            element:<AllFoods></AllFoods>
        },
        {
            path: '/gallery',
            element:<Gallery></Gallery>
        },
        {
            path: '/details/:id',
            element:<FoodDEtails></FoodDEtails>,
            loader: ({params}) => fetch(`http://localhost:5000/details/${params.id}`)
        },
        {
            path: '/purchass/:id',
            element:<Purchass></Purchass>,
            loader: ({params}) => fetch(`http://localhost:5000/purchass/${params.id}`)
            
        },
      ]
    },
  ]);
  export default router
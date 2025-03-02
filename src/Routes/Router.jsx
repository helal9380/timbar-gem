/** @format */

import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AllFoods from "../Pages/AllFoods/AllFoods";
import FoodDEtails from "../Pages/FoodDetails/FoodDEtails";
import Purchass from "../Components/Purchass";
import Gallery from "../Pages/Gallery/Gallery";
import AddFood from "../Components/AddFood";
import MyFoods from "../Components/MyFoods";
import Update from "../Components/Update";
import PrivateRoute from "./PrivateRoute";
import MyOrdered from "../Components/MyOrdered";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/allFoods",
        element: <AllFoods></AllFoods>,
        loader: () => fetch('https://restaurant-server-ten.vercel.app/allFoods')
      },
      {
        path: "/addFood",
        element: (
          <PrivateRoute>
            <AddFood></AddFood>
          </PrivateRoute>
        ),
      },
      {
        path: "/myFoods",
        element: (
          <PrivateRoute>
            <MyFoods></MyFoods>
          </PrivateRoute>
        ),
      },
      {
        path: "/all_foods/:id",
        element: (
          <PrivateRoute>
            <Update></Update>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://restaurant-server-ten.vercel.app/all_foods/${params.id}`),
      },
      {
        path: "/myOrders",
        element: <PrivateRoute><MyOrdered></MyOrdered></PrivateRoute>,
       
      },
      {
        path: "/gallery",
        element: <Gallery></Gallery>,
      },
     
      {
        path: "/details/:id",
        element: <FoodDEtails></FoodDEtails>,
        loader: ({ params }) =>
          fetch(`https://restaurant-server-ten.vercel.app/details/${params.id}`),
      },
      {
        path: "/purchass/:id",
        element: (
          <PrivateRoute>
            <Purchass></Purchass>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://restaurant-server-ten.vercel.app/purchass/${params.id}`),
      },
    ],
  },
]);
export default router;

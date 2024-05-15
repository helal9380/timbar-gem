/** @format */

import React from "react";
import { Toaster } from "react-hot-toast";
import ReactDOM from "react-dom/client";
import "./index.css";
import router from "./Routes/Router.jsx";
import AuthProvider from "./AuthProvider/AuthProvider.jsx";
import { RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </HelmetProvider>
    <Toaster></Toaster>
  </React.StrictMode>
);

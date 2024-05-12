/** @format */

import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { authContext } from "../AuthProvider/AuthProvider";

const PrivateRoute = ({children}) => {
  const { user, loading } = useContext(authContext);
  const location = useLocation();
  if (loading) {
    return <span className="loading loading-bars loading-lg"></span>;
  }
  if (user) {
    return children;
  }
  return (
    <Navigate
      state={location.pathname}
      replace></Navigate>
  );
};

export default PrivateRoute;

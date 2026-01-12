// import React from 'react'
import Cookies from "js-cookie";
import { Navigate, Outlet } from "react-router-dom";
const ProtectedRoutes = () => {
  const token = Cookies.get("token");
  const role = Cookies.get("role");
  return token && role === "user" ? (
    <Outlet />
  ) : (
    <Navigate to="/" state={{ pleaseLogin: true }} replace />
  );
};

export default ProtectedRoutes;

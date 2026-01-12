// import React from 'react'
import Cookies from "js-cookie";
import { Navigate, Outlet } from "react-router-dom";
const AdminProtectedRoutes = () => {
  const token = Cookies.get("token");
  const role = Cookies.get("role");
  return token && role === "admin" ? (
    <Outlet />
  ) : (
    <Navigate to="/administrator-admin-login" />
  );
};

export default AdminProtectedRoutes;

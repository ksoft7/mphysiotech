import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const AdminProtectedRoute = () => {
  const adminInfo = JSON.parse(sessionStorage.getItem("adminInfo"));

  return adminInfo ? <Outlet /> : <Navigate to="/admin-login" />;
};

export default AdminProtectedRoute;

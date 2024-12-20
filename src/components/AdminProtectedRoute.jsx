import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const AdminProtectedRoute = () => {
  const adminInfo = JSON.parse(sessionStorage.getItem("adminInfo"));

  // console.log("Admin Info: ", adminInfo);

  if (!adminInfo || !adminInfo.isAdmin) {
    return <Navigate to="/admin" replace />;
  }

  return <Outlet />;
};

export default AdminProtectedRoute;

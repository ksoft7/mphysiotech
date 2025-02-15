import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Header";

const Layout = ({ children }) => {
  const location = useLocation();

  const noNavRoutes = [
    "/settings",
    "/editProfile",
    "/myAppointments",
    "/appiontmentDetails/:id",
  ];

  const shouldHideNavBar = noNavRoutes.some((route) =>
    location.pathname.startsWith(route.replace(":id", ""))
  );
  return (
    <div>
      {!shouldHideNavBar && <Navbar />}
      <main> {children}</main>
    </div>
  );
};

export default Layout;

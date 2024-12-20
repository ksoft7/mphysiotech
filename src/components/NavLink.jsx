import React from "react";
import { Link as ReactLink } from "react-router-dom";

const NavLink = ({ children, route }) => (
  <ReactLink to={route}>
    <button>{children}</button>
  </ReactLink>
);

export default NavLink;

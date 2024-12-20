import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { IoHomeOutline } from "react-icons/io5";
import { HiUsers } from "react-icons/hi2";
import { RiBloggerLine } from "react-icons/ri";
import { MdPayments } from "react-icons/md";
import { IoIosLogOut } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
// import { CiSettings } from "react-icons/ci";
import Logo from "../assets/imgs/logo_img.svg";
import { useFixedBar } from "../Context/Fixcontext.jsx";
import { useDispatch } from "react-redux";
import { logout } from "../redux/slices/admin.js";
import { toast } from "react-toastify";
import "../styles/trydasboard.css";
function Tryfixbar() {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    toast.success("Logged out successfully");
    window.location.href = "/admin";
  };
  const [activeLink, setActiveLink] = useState(null);
  const [isMenuActive, setIsMenuActive] = useState(false);

  const handleLinkHover = (index) => {
    setActiveLink(index);
  };
  const { barClass } = useFixedBar();

  const handleToggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };
  return (
    <>
      <div className={`fixBar  ${isMenuActive ? "active" : ""} ${barClass}`}>
        <ul>
          <li
            key={0}
            className={activeLink === 0 ? "hovered" : ""}
            onMouseOver={() => handleLinkHover(0)}
          >
            <figure className="title">
              <img src={Logo} alt="logo img" />
            </figure>
          </li>
          <li
            key={1}
            className={activeLink === 1 ? "hovered" : ""}
            onMouseOver={() => handleLinkHover(1)}
          >
            <Link to={"/admin-dashboard"}>
              <span className="icon">
                <IoHomeOutline />
              </span>
              <span className="title">Dashboard</span>
            </Link>
          </li>

          <li
            key={2}
            className={activeLink === 2 ? "hovered" : ""}
            onMouseOver={() => handleLinkHover(2)}
          >
            <Link to={"/users"}>
              <span className="icon">
                <HiUsers />
              </span>
              <span className="title">Users</span>
            </Link>
          </li>

          <li
            key={3}
            className={activeLink === 3 ? "hovered" : ""}
            onMouseOver={() => handleLinkHover(3)}
          >
            <Link to={"/BlogTab"}>
              <span className="icon">
                <RiBloggerLine />
              </span>
              <span className="title">Blog</span>
            </Link>
          </li>

          <li
            key={4}
            className={activeLink === 4 ? "hovered" : ""}
            onMouseOver={() => handleLinkHover(4)}
          >
            <a href="#">
              <span className="icon">
                <MdPayments />
              </span>
              <span className="title">Orders</span>
            </a>
          </li>

          <li
            key={5}
            className={activeLink === 5 ? "hovered" : ""}
            onMouseOver={() => handleLinkHover(5)}
          >
            <Link to={"/ProductsTab"}>
              <span className="icon">
                <IoCartOutline />
              </span>
              <span className="title">Products</span>
            </Link>
          </li>

          <li
            key={6}
            className={activeLink === 6 ? "hovered" : ""}
            onMouseOver={() => handleLinkHover(6)}
          >
            <a href="#">
              <span className="icon">
                <IoIosLogOut />
              </span>
              <span onClick={handleLogout} className="title">
                Sign Out
              </span>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
export default Tryfixbar;

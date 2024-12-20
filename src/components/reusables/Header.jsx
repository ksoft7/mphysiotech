import React from "react";
import { NavLink } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa6";
import Logo from "../../assets/imgs/Logo.png";
import Clock from "../../assets/imgs/clock-outline.png";
import style from "../../styles/header.module.css";

function Header() {
  return (
    <div className={style.header}>
      <div className={style.upheader}>
        <div className={style.upfirstheader}>
          <img src={Clock} alt="clock img" />
          <p>Open Hours/Mon-Fri/08:00-19:00.</p>
          <p className={style.navHelp}>
            <NavLink to="/">Need Help?</NavLink>
          </p>
        </div>

        <div className={style.upsecondheader}>
          <span>
            <FaPhoneAlt className={style.icon} />
            <p>0761-8523-398</p>
          </span>

          <span>
            <FaFacebookF className={style.icon} />
            <RiInstagramFill className={style.icon} />
            <FaTwitter className={style.icon} />
          </span>
        </div>
      </div>

      <div className={style.downheader}>
        <img src={Logo} alt="logo img" />

        <ul className={style.navUl}>
          <li className={style.navLi}>
            <NavLink to="/">Homepage</NavLink>
          </li>
          <li className={style.navLi}>
            <NavLink to="/about-us">About us</NavLink>
          </li>
          <li className={style.navLi}>
            <NavLink to="/services">Services</NavLink>
          </li>
          <li className={style.navLi}>
            <NavLink to="/product">Product</NavLink>
          </li>
          <li className={style.navLi}>
            <NavLink to="/contact-us">Contact Us</NavLink>
          </li>
        </ul>

        <button className={style.btn}>Appointment</button>
      </div>
    </div>
  );
}
export default Header;

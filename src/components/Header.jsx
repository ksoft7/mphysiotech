import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Link as ReactLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import Logo from "../assets/imgs/rehabLogo.png";
import { IoSettingsOutline } from "react-icons/io5";
import "../App.css";
import { FaUserCheck } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import { logout } from "../redux/actions/userActions";
import { FaCaretDown } from "react-icons/fa";
import "../styles/Dropdown.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { IoAlertCircleSharp } from "react-icons/io5";

const Links = [
  { name: "Homepage", route: "/" },
  { name: "About Us", route: "/aboutpage" },
  { name: "Store", route: "/products" },
  { name: "blog", route: "/blog" },
  { name: "Contact-us", route: "/contact-us" },
];

function Header() {
  const dispatch = useDispatch();
  const { favoritesToggled } = useSelector((state) => state.product);
  const { cartItems } = useSelector((state) => state.cart);
  const { userInfo } = useSelector((state) => state.user);
  const [showDropdown, setShowDropdown] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showBanner, setShowBanner] = useState(
    userInfo ? !userInfo.active : false
  );
  useEffect(() => {
    if (userInfo && !userInfo.active) {
      setShowBanner(true);
    }
  }, [favoritesToggled, dispatch, userInfo]);

  const handleLogout = () => {
    dispatch(logout());
  };

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  const toggleMenu = () => {
    if (isOpen) {
      setIsAnimating(true);
      setTimeout(() => {
        setIsOpen(false);
        setIsAnimating(false);
      }, 300);
    } else {
      setIsOpen(true);
    }
  };

  return (
    <>
      <header>
        <article>
          <ReactLink to={"/"}>
            <button>
              <img className="logo1" src={Logo} alt="" />
            </button>
          </ReactLink>

          <div className="headerCont1">
            {Links.map(({ name, route }) => (
              <ReactLink key={name} to={route} className="nav-link">
                <button>{name}</button>
              </ReactLink>
            ))}
          </div>
          <div className="headerCont2">
            <span className="cartIcon">
              <ReactLink to={"/cart"}>
                <button>
                  <FaShoppingCart className="icon" />
                </button>
              </ReactLink>
              {cartItems.length > 0 && <p>{cartItems.length}</p>}
            </span>

            <div>
              {userInfo ? (
                <article className="headercont">
                  {userInfo.googleImage ? (
                    <img
                      src={`${userInfo.googleImage}`}
                      alt={userInfo.name}
                      onError={(e) => {
                        e.target.src = "/default-avatar.png"; // Fallback image in case of error
                      }}
                    />
                  ) : (
                    <FaUserCheck size={22} />
                  )}
                  <div className={`dropdown ${showDropdown ? "show" : ""}`}>
                    <FaCaretDown
                      cursor={"pointer"}
                      className="icon hideNav"
                      onClick={toggleDropdown}
                    />
                    {showDropdown && (
                      <ul className="dropdown-menu">
                        <div className="dropdown-item">
                          <p>{userInfo.email}</p>
                        </div>
                        <div>
                          <ReactLink to={"/order-history"}>
                            <p className="dropdown-item">Order History</p>
                          </ReactLink>
                          <ReactLink to={"/editProfile"}>
                            <p className="dropdown-item">Profile</p>
                          </ReactLink>
                          <ReactLink to={"/settings"}>
                            <p className="dropdown-item">
                              <IoSettingsOutline /> Settings
                            </p>
                          </ReactLink>

                          <div className="dropdown-item">
                            <button onClick={handleLogout}>Logout</button>
                          </div>
                        </div>
                      </ul>
                    )}
                  </div>

                  <div className="menu-container">
                    <button className="hamburger"></button>
                    <RxHamburgerMenu
                      cursor={"pointer"}
                      onClick={toggleMenu}
                      size={24}
                    />
                    {isOpen && (
                      <div
                        className={`menu-content ${
                          isAnimating ? "slide-out" : "slide-in"
                        }`}
                      >
                        <button className="close-btn" onClick={toggleMenu}>
                          ✕
                        </button>
                        <nav>
                          <ul>
                            {Links.map(({ name, route }) => (
                              <li>
                                <ReactLink
                                  key={name}
                                  to={route}
                                  className="nav-link"
                                >
                                  <a>{name}</a>
                                </ReactLink>
                              </li>
                            ))}
                            <li>
                              <ReactLink to={"/book-an-appointment"}>
                                <button className="btn-style">
                                  Appointment
                                </button>
                              </ReactLink>
                            </li>
                            <li>
                              <ReactLink to={"/settings"}>
                                <IoSettingsOutline className="icon" /> Settings
                              </ReactLink>
                            </li>
                          </ul>
                        </nav>
                      </div>
                    )}

                    {isOpen && (
                      <div className="overlay" onClick={toggleMenu}></div>
                    )}
                  </div>
                </article>
              ) : (
                <div className="headerCont2">
                  <button>
                    <FaUser cursor={"pointer"} />
                    <ReactLink to={"/login-page"}>Sign in</ReactLink>
                    <ReactLink to={"/register-page"}>Sign up</ReactLink>
                  </button>
                  <div className="menu-container">
                    <button className="hamburger"></button>
                    <RxHamburgerMenu
                      cursor={"pointer"}
                      onClick={toggleMenu}
                      size={24}
                    />
                    {isOpen && (
                      <div
                        className={`menu-content ${
                          isAnimating ? "slide-out" : "slide-in"
                        }`}
                      >
                        <button className="close-btn" onClick={toggleMenu}>
                          ✕
                        </button>
                        <nav>
                          <ul>
                            {Links.map(({ name, route }) => (
                              <li key={name}>
                                <ReactLink
                                  key={name}
                                  to={route}
                                  className="nav-link"
                                >
                                  <a>{name}</a>
                                </ReactLink>
                              </li>
                            ))}
                            <li>
                              <ReactLink to={"/book-an-appointment"}>
                                <button className="btn-style">
                                  Appointment
                                </button>
                              </ReactLink>
                            </li>
                            <li>
                              <ReactLink to={"/settings"}>
                                <IoSettingsOutline className="icon" /> Settings
                              </ReactLink>
                            </li>
                          </ul>
                        </nav>
                      </div>
                    )}

                    {isOpen && (
                      <div className="overlay" onClick={toggleMenu}></div>
                    )}
                  </div>
                </div>
              )}
            </div>

            <ReactLink to={"/book-an-appointment"} className="hideNav">
              <button className="btn-style">Appointment</button>
            </ReactLink>
          </div>
        </article>

        {userInfo && !userInfo.active && showBanner && (
          <div className="banner-container">
            <span>
              <IoAlertCircleSharp className="icon" />
              <p>Email not verified!</p>
              <p>You must verify your email address.</p>
            </span>
            <IoClose
              className="icon"
              cursor={"pointer"}
              onClick={() => setShowBanner(false)}
            />
          </div>
        )}
      </header>
    </>
  );
}

export default Header;

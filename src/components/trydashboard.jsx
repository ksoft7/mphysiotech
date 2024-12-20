import React from "react";
import "../App.css";
import Fixbars from "../components/try.fixbar";
import "../styles/trydasboard.css";
import { useFixedBar } from "../Context/Fixcontext";
import { RxHamburgerMenu } from "react-icons/rx";
import { LuMenu } from "react-icons/lu";
import Profile from "../assets/imgs/womanprofile.jpg";
import { FaChartLine } from "react-icons/fa";
import { GiWallet } from "react-icons/gi";
import { TbStarsFilled } from "react-icons/tb";
import { BsStack } from "react-icons/bs";
import { IoSearchOutline } from "react-icons/io5";
import { BellIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { useState } from "react";

function Trydashboard() {
  const { toggleWidth } = useFixedBar();
  const [isVisible, setIsVisible] = useState(true);
  return (
    <>
      <section className="trydashboard_wrapper">
        <Fixbars />
        <main className="Dashboard-contents">
          <nav className="dashNav">
            <div className="icons-in">
              <LuMenu
                cursor={"pointer"}
                onClick={() => {
                  toggleWidth();
                  setIsVisible(true);
                }}
                className="icon"
              />
              {isVisible && (
                <LuMenu
                  cursor={"pointer"}
                  onClick={() => {
                    toggleWidth();
                    setIsVisible(false);
                  }}
                  color="#fff"
                  className="icon3"
                />
              )}
              <form action="#">
                <IoSearchOutline className="icon2" />
                <input type="text" />
              </form>
            </div>
            <span className="profile">
              <BellIcon className="iconss2" />
              <img src={Profile} alt="Woman profile" />
            </span>
          </nav>

          <section className="card-1">
            <div className="dashboard-card-style">
              <div>
                <p>Total User</p>
                <h2>22</h2>
              </div>
              <span>
                <FaChartLine className="icons2" />
              </span>
            </div>

            <div className="dashboard-card-style">
              <div>
                <p>Total Orders</p>
                <h2>1.2K</h2>
              </div>
              <span>
                <GiWallet className="icons2" />
              </span>
            </div>

            <div className="dashboard-card-style">
              <div>
                <p>Total Reviews</p>
                <h2>395</h2>
              </div>
              <span>
                <TbStarsFilled className="icons2" />
              </span>
            </div>

            <div className="dashboard-card-style">
              <div>
                <p>Active Listings</p>
                <h2>12</h2>
              </div>
              <span>
                <BsStack className="icons2" />
              </span>
            </div>
          </section>
        </main>
      </section>
    </>
  );
}

export default Trydashboard;

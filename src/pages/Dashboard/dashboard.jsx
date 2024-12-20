import React from "react";
// import Logo from "../../assets/imgs/logo_img.svg";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import "../../App.css";
import Fixbars from "../../components/try.fixbar";
import { getAllUsers } from "../../redux/actions/AdminActions";
import { getProducts } from "../../redux/actions/productActions";
import "../../styles/trydasboard.css";
import { IoCartOutline } from "react-icons/io5";
import { useFixedBar } from "../../Context/Fixcontext";
import { LuMenu } from "react-icons/lu";
import Profile from "../../assets/imgs/womanprofile.jpg";
import { FaChartLine } from "react-icons/fa";
import { GiWallet } from "react-icons/gi";
// import { CiHeart } from "react-icons/ci";
import { TbStarsFilled } from "react-icons/tb";
// import { BsStack } from "react-icons/bs";
import { IoSearchOutline } from "react-icons/io5";
// import { MdCircleNotifications } from "react-icons/md";
// import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { BellIcon } from "@heroicons/react/24/solid";
function Dashboard() {
  const dispatch = useDispatch();
  const { adminInfo } = useSelector((state) => state.admin);
  const { toggleWidth } = useFixedBar();
  const [isVisible, setIsVisible] = useState(true);
  const { userList } = useSelector((state) => state.admin);
  const { products } = useSelector((state) => state.product);
  const { payload: users = [] } = userList || {};

  useEffect(() => {
    dispatch(getAllUsers());
    dispatch(getProducts());
  }, [dispatch]);
  if (!adminInfo) {
    return <Navigate to="/admin" replace />;
  }

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
                <p>Total Users</p>
                <h2>{users.length}</h2>
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
                <p></p>
              </div>
              <span>
                <TbStarsFilled className="icons2" />
              </span>
            </div>

            <div className="dashboard-card-style">
              <div>
                <p>Total Products</p>
                <h2>{products.length}</h2>
              </div>
              <span>
                <IoCartOutline className="icons2" />
              </span>
            </div>
          </section>
        </main>
      </section>
    </>
  );
}

export default Dashboard;

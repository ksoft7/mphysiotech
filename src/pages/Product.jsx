import React from "react";
import Header from "../components/reusables/Header";
import Footer from "../components/reusables/Footer";
import style from "../styles/product.module.css";
import { NavLink } from "react-router-dom";
import Logo from "../assets/imgs/Logo.png";
import Bands from "../assets/imgs/bands.png";
import Tennis from "../assets/imgs/tennis.png";
import { FaFacebookF } from "react-icons/fa6";

function Product() {
  return (
    <>
      <Header />
      <div className={style.header}>
        <p className={style.category}>All Categories</p>

        <form className={style.inputForm}>
          <input
            type="search"
            className={style.input}
            placeholder="Enter your search"
          />
          <button className={style.btn}>Search</button>
        </form>

        <div className={style.link}>
          <li className={style.navLi}>
            <NavLink to="/user-login">Login</NavLink>
          </li>

          <li className={style.navLi}>
            <NavLink to="/user-signup">Sign Up</NavLink>
          </li>
        </div>
      </div>

      <div className={style.products}>
        <div className={style.product}>
          <img src={Logo} alt="logo img" />
          <div className={style.productDescription}>
            <p>Compression socks</p>
            <FaFacebookF className={style.icon} />
          </div>

          <p className={style.productPrice}>NGN 25,000</p>

          <button className={style.productBtun}>
            <FaFacebookF className={style.icon} />
            <p>Add to cart</p>
          </button>
        </div>

        <div className={style.product}>
          <img src={Logo} alt="logo img" />
          <div className={style.productDescription}>
            <p>Compression socks</p>
            <FaFacebookF className={style.icon} />
          </div>

          <p className={style.productPrice}>NGN 25,000</p>

          <button className={style.productBtun}>
            <FaFacebookF className={style.icon} />
            <p>Add to cart</p>
          </button>
        </div>

        <div className={style.product}>
          <img src={Logo} alt="logo img" />
          <div className={style.productDescription}>
            <p>Compression socks</p>
            <FaFacebookF className={style.icon} />
          </div>

          <p className={style.productPrice}>NGN 25,000</p>

          <button className={style.productBtun}>
            <FaFacebookF className={style.icon} />
            <p>Add to cart</p>
          </button>
        </div>

        <div className={style.product}>
          <img src={Logo} alt="logo img" />
          <div className={style.productDescription}>
            <p>Compression socks</p>
            <FaFacebookF className={style.icon} />
          </div>

          <p className={style.productPrice}>NGN 25,000</p>

          <button className={style.productBtun}>
            <FaFacebookF className={style.icon} />
            <p>Add to cart</p>
          </button>
        </div>
      </div>

      <div className={style.section}>
        <div className={style.bands}>
          <img src={Bands} alt="band img" />

          <div className={style.sectionDetail}>
            <p>Resistance Bands</p>
            <p>NGN 25,000</p>
            <button className={style.btnProduct}>Explore Products</button>
          </div>
        </div>

        <div className={style.tennis}>
          <img src={Tennis} alt="tennis img" />

          <div className={style.sectionDetail}>
            <p>Resistance Bands</p>
            <p>NGN 25,000</p>
            <button className={style.btnProduct}>Explore Products</button>
          </div>
        </div>
      </div>

      <div className={style.products}>
        <div className={style.product}>
          <img src={Logo} alt="logo img" />
          <div className={style.productDescription}>
            <p>Compression socks</p>
            <FaFacebookF className={style.icon} />
          </div>

          <p className={style.productPrice}>NGN 25,000</p>

          <button className={style.productBtun}>
            <FaFacebookF className={style.icon} />
            <p>Add to cart</p>
          </button>
        </div>

        <div className={style.product}>
          <img src={Logo} alt="logo img" />
          <div className={style.productDescription}>
            <p>Compression socks</p>
            <FaFacebookF className={style.icon} />
          </div>

          <p className={style.productPrice}>NGN 25,000</p>

          <button className={style.productBtun}>
            <FaFacebookF className={style.icon} />
            <p>Add to cart</p>
          </button>
        </div>

        <div className={style.product}>
          <img src={Logo} alt="logo img" />
          <div className={style.productDescription}>
            <p>Compression socks</p>
            <FaFacebookF className={style.icon} />
          </div>

          <p className={style.productPrice}>NGN 25,000</p>

          <button className={style.productBtun}>
            <FaFacebookF className={style.icon} />
            <p>Add to cart</p>
          </button>
        </div>

        <div className={style.product}>
          <img src={Logo} alt="logo img" />
          <div className={style.productDescription}>
            <p>Compression socks</p>
            <FaFacebookF className={style.icon} />
          </div>

          <p className={style.productPrice}>NGN 25,000</p>

          <button className={style.productBtun}>
            <FaFacebookF className={style.icon} />
            <p>Add to cart</p>
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Product;

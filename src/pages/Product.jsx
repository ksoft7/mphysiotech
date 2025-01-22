import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { FaChevronRight } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import style from "../styles/product.module.css";
import { NavLink } from "react-router-dom";
import Logo from "../assets/imgs/Logo.png";
import Bands from "../assets/imgs/bands.png";
import Tennis from "../assets/imgs/tennis.png";
import { FaFacebookF } from "react-icons/fa6";

function Product() {
  return (
    <>
      <section className={style.header}>
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
      </section>

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

      <footer className="footer">
        <article>
          <div>
            <img src={Logo} alt="logo img" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et.
            </p>
            <h5>Follow Us</h5>
            <span>
              <FaLinkedinIn className="icon" />
              <FaTwitter className="icon" />
              <RiInstagramFill className="icon" />
              <FaFacebookF className="icon" />
            </span>
          </div>

          <ul>
            <h4>How Can Help</h4>
            <li>
              <FaChevronRight className="icon" />
              Homepage
            </li>
            <li>
              <FaChevronRight className="icon" />
              About Us
            </li>
            <li>
              <FaChevronRight className="icon" />
              Services
            </li>
            <li>
              <FaChevronRight className="icon" />
              Blog & Article
            </li>
            <li>
              <FaChevronRight className="icon" />
              Testimonials
            </li>
            <li>
              <FaChevronRight className="icon" />
              FAQ
            </li>
          </ul>
          <ul>
            <h4>Services</h4>
            <li>
              <FaChevronRight className="icon" />
              Physiotherapy & <br /> Rehabilitation
            </li>
            <li>
              <FaChevronRight className="icon" />
              Chiropractic
            </li>
            <li>
              <FaChevronRight className="icon" />
              Gym facility
            </li>
            <li>
              <FaChevronRight className="icon" />
              Massage and Sport <br />
              massage
            </li>
            <li>
              <FaChevronRight className="icon" />
              Pain clinic
            </li>
          </ul>
          <div>
            <h4>Newsletter</h4>
            <p>
              Subscribe our latest news & articles. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et.
            </p>
            <form>
              <input type="email" placeholder="Your Email" />
              <button>
                <FaTelegramPlane className="icon" />
              </button>
            </form>
          </div>
        </article>
        <hr />
        <div className="copy_right">
          <p>Copyright &copy; 2024 Rometheme All Rights Reserved.</p>
          <span>
            <p>Privacy Terms & Service</p>
          </span>
        </div>
      </footer>
    </>
  );
}

export default Product;

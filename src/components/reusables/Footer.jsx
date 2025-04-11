import React from "react";
import "../../styles/footer.css";
import "../../App.css";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import Logo from "../../assets/imgs/rehabLogo.png";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="footerup">
      <article className="footer-cards">
        <div className="footer_card1">&nbsp;</div>
        <div className="footer_card2">
          <h6>. Contact Us</h6>
          <h3>Staying In Touch</h3>
          <p className="text-wd">
            We value our relationship with you. Keep the conversation going by
            connecting with us through our various channels. Whether it's email,
            phone, or social media, we look forward to hearing from you and
            staying engaged.
          </p>
          <div>
            <FaLocationDot className="icon" />
            <span>
              <h4>Location</h4>
              <p>(Coming soon)</p>
            </span>
          </div>
          <div>
            <MdEmail className="icon" />
            <span>
              <h4>Email</h4>
              <p>rehabnrecoveryng.com</p>
            </span>
          </div>
          <div>
            <FaPhoneAlt className="icon" />
            <span>
              <h4>Phone</h4>
              <p>+234-8161-756-637</p>
            </span>
          </div>
        </div>
      </article>
      <article className="footer-contents">
        <div>
          <img src={Logo} alt="logo img" />
          {/* <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et.
          </p> */}
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
            <Link to={"/aboutpage"}>About Us</Link>
          </li>
          <li>
            <FaChevronRight className="icon" />
            <Link to={"/products"}>Store</Link>
          </li>
          <li>
            <FaChevronRight className="icon" />
            <Link to={"/blog"}>Blog & Article</Link>
          </li>
          <li>
            <FaChevronRight className="icon" />
            <Link to={"/testimonials"}>Testimonials</Link>
          </li>
          <li>
            <FaChevronRight className="icon" />
            <Link to={"/faq"}>FAQ</Link>
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
            Massage and Sport <br /> massage
          </li>
          <li>
            <FaChevronRight className="icon" />
            Pain clinic
          </li>
        </ul>
        <div>
          <h4>Newsletter</h4>
          <p>
            Enhance your well-being by subscribing to our newsletter. Stay
            connected with exclusive offers, wellness tips, and the latest
            updates from our website. Join our community and receive all the
            support you need to thrive, delivered directly to your inbox.
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
  );
}

export default Footer;

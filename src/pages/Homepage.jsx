import React from "react";
import "../App.css";
import "../styles/home.css";
import Footer from "../components/reusables/Footer";
// import Icon1 from "../assests/imgs/about_icon1.svg";
// import Icon2 from "../assests/images/about_icon2.svg";
import Cutedoc from "../assets/imgs/cutedoc.jpeg";
import Signature from "../assets/imgs/signature1.png";
import VideoPlayer from "../components/VideoPlayer";
import { FaUserDoctor } from "react-icons/fa6";
import ProtectIcon from "../assets/imgs/protectIcon.png";
import ElderlyHome from "../assets/imgs/elderlyHome.png";
import Firstaid from "../assets/imgs/firstaid.jpg";
import Retirementicon from "../assets/imgs/retirement-home.png";
import Ederlyicon from "../assets/imgs/010-elderly.png";
import Ederlyicon2 from "../assets/imgs/034-elderly.png";
import { Link } from "react-router-dom";
import TeamCard from "../components/reusables/TeamCard";
import Testimonial from "../components/testimonialSlide";
import Journey from "../components/reusables/Journey";
function Homepage() {
  return (
    <>
      <section className="hero_sec">
        <article>
          <h6>. Welcome to Yourcare</h6>
          <h1>Trusted Navigation for Better Senior Care</h1>
          <p>
            Aliquam vestibulum morbi blandit cursus risus. Id interdum velit
            laoreet id donec ultrices tincidunt. Condimentum id venenatis a
            condimentum vitae sapien.
          </p>
          <button className="btn-style">Discover More</button>
        </article>
      </section>

      <section className="aboutCard">
        <div className="about-contents">
          <article>
            <h6>. About Us</h6>
            <h3>Our Story Senior Living with Compassionate Guidance</h3>
            <p className="about_text">
              Aliquam vestibulum morbi blandit cursus risus. Id interdum velit
              laoreet id donec ultrices tincidunt.
            </p>
            <div className="iconPar">
              <div>
                {/* <img src={Icon1} alt="icon1" /> */}
                <span>
                  <h5>About Yourcare</h5>
                  <p>
                    Yourcare is dedicated to providing compassionate and
                    informed support for seniors and their families.
                  </p>
                </span>
              </div>
              <div>
                {/* <img src={Icon2} alt="icon2" /> */}
                <span>
                  <h5>Our Commitment</h5>
                  <p>
                    Yourcare is dedicated to providing compassionate and
                    informed support for seniors and their families.
                  </p>
                </span>
              </div>
            </div>
            <span>
              <button className="btn-style">Learn More</button>
            </span>
          </article>
          <form action="#">
            <h3>Book Appointment</h3>
            <p className="formtext">
              Aliquam vestibulum morbi blandit cursus risus. Id interdum velit
              laoreet id donec ultrices tincidunt.
            </p>
            <div>
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
              <input type="email" placeholder="Email Address" />
              <input type="tel" placeholder="Phone Number" />
              <input type="tel" placeholder="Date" />
              <input type="tel" placeholder="Services" />
            </div>
            <textarea placeholder="Message" />
            <p>
              <input type="checkbox" name="subscribe" id="sub" />
              Emile Subscribe
            </p>
            <span>
              <button className="btn-style">Book Now</button>
            </span>
          </form>
        </div>
      </section>

      <section className="story">
        <VideoPlayer />
        <div className="story_contents">
          <article>
            <h6>. Why choose Us</h6>
            <h1>Our Story Senior Living with Compassionate Guidance</h1>
            <p className="story_text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <div>
              <figure>
                <img src={Cutedoc} alt="cutedoc" />
              </figure>
              <span>
                <img src={Signature} alt="signature" />
                <h6>Senior Care Consultant</h6>
              </span>
            </div>
          </article>

          <article>
            <div>
              <FaUserDoctor className="icon" />
              <span>
                <h5>Expertise and Experience</h5>
                <p>
                  Yourcare boasts a team of experienced professionals with
                  expertise in various aspects of senior care.
                </p>
              </span>
            </div>
            <div>
              <img className="iconimg" src={ProtectIcon} alt="protect Icon" />
              <span>
                <h5>Trusted Guidance</h5>
                <p>
                  We prioritize transparency and integrity in all our
                  interactions with clients and guidance to help clients.
                </p>
              </span>
            </div>
            <div>
              <img className="iconimg" src={ElderlyHome} alt="Early home" />
              <span>
                <h5>Service to Families</h5>
                <p>
                  Since its establishment, served over 500 families in selecting
                  suitable care solutions for their elderly loved ones.
                </p>
              </span>
            </div>
          </article>
        </div>
      </section>
      <Journey />
      <section className="homecardsCon">
        <div className="home_headings">
          <h6>. Our Service</h6>
          <h3>Our Comprehensive Senior Care Solutions</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </p>
        </div>
        <article>
          <div>
            <figure>
              <img src={Firstaid} alt="First aid icon" />
            </figure>
            <h5>Medical Check-Up</h5>
            <p>
              Aliquam vestibulum morbi blandit cursus risus. Id interdum velit
              laoreet id donec ultrices tincidunt.
            </p>
          </div>
          <div>
            <figure>
              <img src={Retirementicon} alt="Home Heatlh Care icon" />
            </figure>
            <h5>In-Home Heatlh Care</h5>
            <p>
              Aliquam vestibulum morbi blandit cursus risus. Id interdum velit
              laoreet id donec ultrices tincidunt.
            </p>
          </div>
          <div>
            <figure>
              <img src={Ederlyicon} alt="Senior Citizen Care icon" />
            </figure>
            <h5>Senior Citizen Care</h5>
            <p>
              Aliquam vestibulum morbi blandit cursus risus. Id interdum velit
              laoreet id donec ultrices tincidunt.
            </p>
          </div>
          <div>
            <figure>
              <img src={Ederlyicon2} alt="034-elderly icon" />
            </figure>
            <h5>Personalized Care</h5>
            <p>
              Aliquam vestibulum morbi blandit cursus risus. Id interdum velit
              laoreet id donec ultrices tincidunt.
            </p>
          </div>
        </article>
        <span>
          <button className="btn-style">Explore All Service</button>
        </span>
      </section>

      <section className="home_team">
        <div className="home_headings">
          <h6>. Our Service</h6>
          <h3>Our Comprehensive Senior Care Solutions</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </p>
        </div>
        <article>
          <TeamCard />
          <TeamCard />
          <TeamCard />
        </article>
      </section>

      <Testimonial />
      <Footer />
    </>
  );
}

export default Homepage;

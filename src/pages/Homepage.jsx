import React from "react";
import "../App.css";
import "../styles/home.css";
import Footer from "../components/reusables/Footer";
import Cutedoc from "../assets/imgs/cutedoc.jpeg";
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
          <h6>. Welcome to rehab & recovery</h6>
          <h1>
            Your ultimate Solution for Complete recovery and total rejuvenation
          </h1>
          <p>
            Unlock your best health with our expert team! From comprehensive
            assessments to personalized therapeutic exercises and powerful
            non-drug pain management solutions, we're here to help you reach
            your peak potential.
          </p>
          <button className="btn-style">Discover More</button>
        </article>
      </section>

      <section className="aboutCard">
        <div className="about-contents">
          <article>
            <h3>Shop Now</h3>
            <p className="about_text">
              Browse our extensive catalogue of physiotherapy and medical
              consumables, alongside fitness products. We offer unique,
              hard-to-find items at competitive prices. Enjoy the convenience of
              delivery anywhere in Lagos—simply place your order and relax while
              we bring it to you.
            </p>
            <span>
              <Link to={"/products"}>
                <button className="btn-style">Visit our store</button>
              </Link>
            </span>
          </article>
          <form action="#">
            <h3>Book Appointment</h3>
            <p className="formtext">
              Schedule an appointment with our specialist Musculoskeletal/Sport
              Physiotherapist, boasting over 9 years of expertise in treating
              back pain, sports injuries, trauma cases, and post-surgical
              rehabilitation.
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
            <h1>
              Comprehensive Pain Management & Specialized Physiotherapy Care
            </h1>
            <p className="story_text">
              Rehab & Recovery features a team of seasoned professionals, adept
              in pain management and specialized physiotherapy care, offering
              comprehensive solutions tailored to your needs.
            </p>
            <div>
              <figure>
                <img src={Cutedoc} alt="cutedoc" />
              </figure>
              <span>
                <h6>
                  <b style={{ color: "#4b413f" }}>Modupe Ola-Ojo</b>
                </h6>
                <h6>Lead Therapist</h6>
              </span>
            </div>
          </article>

          <article>
            <div>
              <FaUserDoctor className="icon" />
              <span>
                <h5>Patient centered care</h5>
                <p>
                  Each decision at Rehab & Recovery is centered on prioriƟzing
                  your needs, ensuring a healthcare experience tailored to your
                  individual needs.
                </p>
              </span>
            </div>
            <div>
              <img className="iconimg" src={ProtectIcon} alt="protect Icon" />
              <span>
                <h5>Excellence</h5>
                <p>
                  At Rehab & Recovery, we are dedicated to delivering
                  high-quality care. Our commitment to evidence-based pracƟces
                  ensures that you receive the best possible care.
                </p>
              </span>
            </div>
            <div>
              <img className="iconimg" src={ElderlyHome} alt="Early home" />
              <span>
                <h5>Respect</h5>
                <p>
                  At Rehab & Recovery, we treat our patients like royalty,
                  ensuring they receive the utmost respect and care they
                  deserve.
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

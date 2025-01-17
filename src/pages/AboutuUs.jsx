import React from "react";
import Footer from "../components/reusables/Footer";
import Journey from "../components/reusables/Journey";
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
import Logoimg1 from "../assets/imgs/logoipsum-1.png";
import Logoimg2 from "../assets/imgs/logoipsum-2.png";
import Logoimg3 from "../assets/imgs/logoipsum-3.png";
import Logoimg4 from "../assets/imgs/logoipsum-4.png";
import Logoimg5 from "../assets/imgs/logoipsum-5.png";

import "../App.css";

function AboutuUs() {
  return (
    <>
      <section className="hero_section herosm">
        <h1>About Us</h1>
        <p>
          Homepage/<span>About Us</span>
        </p>
      </section>
      <section className="aboutCard">
        <div className="about-contents">
          <article>
            <h6>. About Us</h6>
            <h3>Delivering compassionate excellent care</h3>
            <p className="about_text">
              At Rehab & Recovery, we are driven by the belief that everyone
              deserves to lead an active, pain-free, and healthy life. We firmly
              believe that no pain or disability should be considered normal.
            </p>
            <div className="iconPar">
              <div>
                {/* <img src={Icon1} alt="icon1" /> */}
                <span>
                  <h5>About rehab & recovery</h5>
                  <p>
                    rehab & recovery is dedicated to providing compassionate and
                    informed support for seniors and their families.
                  </p>
                </span>
              </div>
              <div>
                {/* <img src={Icon2} alt="icon2" /> */}
                <span>
                  <h5>Our Commitment</h5>
                  <p>
                    rehab & recovery is dedicated to providing compassionate and
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
                  rehab & recovery boasts a team of experienced professionals
                  with expertise in various aspects of senior care.
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
      <section className="page_links">
        <h5>Trusted By The 1000+ Modern Teams And Companies</h5>
        <figure>
          <img src={Logoimg1} alt="logoisum" />
          <img src={Logoimg2} alt="logoisum" />
          <img src={Logoimg3} alt="logoisum" />
          <img src={Logoimg4} alt="logoisum" />
          <img src={Logoimg5} alt="logoisum" />
        </figure>
      </section>
      <Footer />
    </>
  );
}

export default AboutuUs;

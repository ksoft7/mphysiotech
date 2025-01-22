import React from "react";
import "../App.css";
import "../styles/testimonials.css";
import TestimonialImg1 from "../assets/imgs/testimonial1.png";
import TestimonialImg2 from "../assets/imgs/testimonial2.png";
import TestimonialImg3 from "../assets/imgs/testimonial3.png";
import TestimonialImg4 from "../assets/imgs/testimonial4.png";
import { RiDoubleQuotesR } from "react-icons/ri";
import Journey_component from "../components/reusables/Journey.jsx";
import Footer from "../components/reusables/Footer.jsx";
function Testimonials() {
  return (
    <>
      <section className="hero_section">
        <h1>Testimonials</h1>
        <p>
          Homepage/<span>Testimonials</span>
        </p>
      </section>
      <section className="testimonial_card_sec">
        <div className="headings">
          <h6>. Testimonials</h6>
          <h3>Hear What Others Have to Say</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <article>
          <div className="tes_card">
            <RiDoubleQuotesR className="icon" />
            <div>
              <p>
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam”
              </p>
              <h5>Neon Miles</h5>
              <h6>Reviewer</h6>
            </div>
            <figure>
              <img src={TestimonialImg1} alt="wowan1" />
            </figure>
          </div>

          <div className="tes_card">
            <RiDoubleQuotesR className="icon" />
            <div>
              <p>
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam”
              </p>
              <h5>Neon Miles</h5>
              <h6>Reviewer</h6>
            </div>
            <figure>
              <img src={TestimonialImg2} alt="man1" />
            </figure>
          </div>

          <div className="tes_card">
            <RiDoubleQuotesR className="icon" />
            <div>
              <p>
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam”
              </p>
              <h5>Neon Miles</h5>
              <h6>Reviewer</h6>
            </div>
            <figure>
              <img src={TestimonialImg3} alt="man2" />
            </figure>
          </div>

          <div className="tes_card">
            <RiDoubleQuotesR className="icon" />
            <div>
              <p>
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam”
              </p>
              <h5>Neon Miles</h5>
              <h6>Reviewer</h6>
            </div>
            <figure>
              <img src={TestimonialImg4} alt="man3" />
            </figure>
          </div>
        </article>
      </section>

      <Journey_component />

      <Footer />
    </>
  );
}

export default Testimonials;

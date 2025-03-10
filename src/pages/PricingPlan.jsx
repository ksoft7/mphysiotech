import React from "react";
import Header from "../components/reusables/Header";
import "../App.css";
import Journeycomponent from "../components/reusables/Journey.jsx";
import Footer from "../components/reusables/Footer.jsx";
import Pricingplancard from "../components/reusables/PricingPlanCards.jsx";
function PricingPlan() {
  return (
    <>
      <section className="hero_section">
        <h1>Pricing Plan</h1>
        <p>
          Homepage/<span>Pricing Plan</span>
        </p>
      </section>
      <section className="card_con">
        <div className="headings">
          <h6>. Our Team</h6>
          <h3>Book Appointment</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <Pricingplancard />
      </section>

      <Journeycomponent />

      <Footer />
    </>
  );
}

export default PricingPlan;

import React from "react";
import Header from "../components/reusables/Header";
import "../App.css";
import Journey_component from "../components/reusables/Journey.jsx";
import Footer from "../components/reusables/Footer.jsx";
import Pricing_plan_card from "../components/reusables/PricingPlanCards.jsx";
function PricingPlan() {
  return (
    <>
      <Header />
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
        <Pricing_plan_card />
      </section>

      <Journey_component />

      <Footer />
    </>
  );
}

export default PricingPlan;

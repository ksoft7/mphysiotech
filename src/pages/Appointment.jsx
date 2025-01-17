import React from "react";
import "../App.css";
import Journey_card from "../components/reusables/Journey.jsx";
import Footer from "../components/reusables/Footer.jsx";
import "../styles/book_appointment.css";
import Header from "../components/reusables/Header";

function Appointment() {
  return (
    <>
      <section className="hero_section herosm">
        <h1>Book Appointment</h1>
        <p>
          Homepage/<span>Book Appointment</span>
        </p>
      </section>
      <section className="form-cont">
        <div className="headings-form">
          <h6>. Our Team</h6>
          <h3>Book Appointment</h3>
          <p>
            Schedule an appointment with our specialist Musculoskeletal/Sport
            Physiotherapist, boasting over 9 years of expertise in treating back
            pain, sports injuries, trauma cases, and post-surgical
            rehabilitation.
          </p>
        </div>
      </section>

      <form action="#" className="appointment_form">
        <div className="inputHol">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
          <input type="email" placeholder="Email Address" />
          <input type="tel" placeholder="Phone Number" />
          <input type="text" placeholder="Date" />
          <input type="text" placeholder="Services" />
        </div>
        <div>
          <textarea placeholder="Message"></textarea>
        </div>
        <span>
          <p>
            <input type="checkbox" name="check" id="" /> Emile Subscribe
          </p>
          <button className="btn-style">Book Now</button>
        </span>
      </form>

      <Journey_card />

      <Footer />
    </>
  );
}

export default Appointment;

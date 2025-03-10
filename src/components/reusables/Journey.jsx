import React from "react";
import "../../App.css";
import style from "../../styles/journey.module.css";
import { Link } from "react-router-dom";
function Journey() {
  return (
    <section className={style.journey}>
      <h2>Start Your Journey to Complete & Total Recovery Today !</h2>
      <p>Book an appointment today by clicking on the button below</p>
      <span>
        <Link to={"/book-an-appointment"}>
          <button className={style.btnSty2}>Book Now</button>
        </Link>
      </span>
    </section>
  );
}

export default Journey;

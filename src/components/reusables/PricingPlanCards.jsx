import React from "react";
import "../../App.css";
import { IoMdCheckmark } from "react-icons/io";
import "../../styles/pricing_plan.css";
import Line from "../../assets/imgs/Line2.png";

function PricingPlanCard() {
  return (
    <>
      <section className="price_card">
        <article>
          <div>
            <h5>Basic Plan</h5>
            <span>
              <h2>$89</h2>
              <h5>/month</h5>
            </span>
          </div>
          <ul>
            <li>
              <IoMdCheckmark className="icon" />
              Initial consultation and assessment
            </li>
            <img src={Line} alt="line" />
            <li>
              <IoMdCheckmark className="icon" />
              Assistance with facility placement
            </li>
            <img src={Line} alt="line" />

            <li>
              <IoMdCheckmark className="icon" />
              Referral to financial planning resources
            </li>
            <img src={Line} alt="line" />

            <li>
              <IoMdCheckmark className="icon" />
              Access to basic home modification
            </li>
          </ul>
          <span className="btn-hol">
            <button className="btn-style">Book now</button>
          </span>
        </article>
        <article className="card_long">
          <div>
            <h5>Standard Plan</h5>
            <span>
              <h2>$199</h2>
              <h5>/month</h5>
            </span>
          </div>
          <ul>
            <li>
              <IoMdCheckmark className="icon" />
              Initial consultation and assessment
            </li>
            <img src={Line} alt="line" />
            <li>
              <IoMdCheckmark className="icon" />
              Assistance with facility placement
            </li>
            <img src={Line} alt="line" />

            <li>
              <IoMdCheckmark className="icon" />
              Referral to financial planning resources
            </li>
            <img src={Line} alt="line" />

            <li>
              <IoMdCheckmark className="icon" />
              Access to basic home modification
            </li>
          </ul>
          <span className="btn-hol">
            <button className="btn-style">Book now</button>
          </span>
        </article>
        <article>
          <div>
            <h5>Premium Plan</h5>
            <span>
              <h2>$189</h2>
              <h5>/month</h5>
            </span>
          </div>
          <ul>
            <li>
              <IoMdCheckmark className="icon" />
              Initial consultation and assessment
            </li>
            <img src={Line} alt="line" />
            <li>
              <IoMdCheckmark className="icon" />
              Assistance with facility placement
            </li>
            <img src={Line} alt="line" />

            <li>
              <IoMdCheckmark className="icon" />
              Referral to financial planning resources
            </li>
            <img src={Line} alt="line" />

            <li>
              <IoMdCheckmark className="icon" />
              Access to basic home modification
            </li>
          </ul>
          <span className="btn-hol">
            <button className="btn-style">Book now</button>
          </span>
        </article>
      </section>
      <div></div>
    </>
  );
}

export default PricingPlanCard;

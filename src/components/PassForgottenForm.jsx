import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { sendResetEmail } from "../redux/actions/userActions";
import "../styles/submissionsty.css";
const PassForgottenForm = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <>
      <div className="passforsty">
        <b>Enter your email address below.</b>
        <p>We'll send you an email with a link to reset your password.</p>
        <form>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Your Email Address"
            value={email}
            onChange={(e) => handleChange(e)}
          />
          <button onClick={() => dispatch(sendResetEmail(email))}>
            Send Reset Email
          </button>
        </form>
      </div>
    </>
  );
};

export default PassForgottenForm;

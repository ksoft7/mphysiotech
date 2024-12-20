import React from "react";
import style from "../styles/usersignup.module.css";
function UserSignUp() {
  return (
    <div className={style.signUp}>
      <div className={style.signHead}>
        <h2>Sign Up</h2>

        <p>Already have an account? Log in</p>
      </div>

      <label>Email Address</label>
      <input type="email" name="" id="" placeholder="Email" />

      <label htmlFor="">Enter Password</label>
      <input type="password" name="" id="" placeholder="Password" />

      <label htmlFor="">Re-enter Password</label>
      <input type="password" name="" id="" placeholder="Password" />

      <button>Sign Up</button>

      <div>
        <img src="../images/Line" alt="line" />
        <p>Or sign up with</p>
        <img src="../images/Line" alt="line" />
      </div>

      <div>
        <p>Google</p>
        <p>Facebook</p>
      </div>
    </div>
  );
}

export default UserSignUp;

import React from "react";
import style from "../styles/userlogin.module.css";
function UserLogin() {
  return (
    <div className={style.diff}>
      <h2>Welcome Back</h2>

      <label>Email Address</label>
      <input type="email" name="" id="" placeholder="Email" />

      <label htmlFor="">Enter Password</label>
      <input type="password" name="" id="" placeholder="Password" />

      <div>
        <span>
          <p>Remember me</p>
        </span>
        <p>Forgot Password</p>
      </div>

      <button>Login</button>

      <div>
        <img src="../images/Line" alt="line" />
        <p>Or login with</p>
        <img src="../images/Line" alt="line" />
      </div>

      <div>
        <p>Google</p>
        <p>Facebook</p>
      </div>

      <p>Dont have an account? Sign Up</p>
    </div>
  );
}

export default UserLogin;

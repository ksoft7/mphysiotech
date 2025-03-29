import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation, Link } from "react-router-dom";
import * as Yup from "yup";
import { Formik } from "formik";
import PasswordField from "../components/PasswordField";
import PasswordForgottenForm from "../components/PassForgottenForm";
import TextField from "../components/TextField";
import Alert from "../components/reusables/Alert";
import "../styles/submissionsty.css";
import { toast } from "react-toastify";
// import { useGoogleLogin } from "@react-oauth/google";
import { login } from "../redux/actions/userActions";
// import axios from "axios";
// import { FcGoogle } from "react-icons/fc";

const LoginScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const redirect = "/";
  const [showAlert, setShowAlert] = useState(true);

  const { loading, error, userInfo, serverMsg } = useSelector(
    (state) => state.user
  );
  console.log(error);
  const [showPasswordReset, setShowPasswordReset] = useState(false);

  useEffect(() => {
    if (userInfo) {
      navigate(location.state?.from || redirect);
      toast.success("Login successful");
    }

    if (serverMsg) {
      toast.success(`${serverMsg}`);
    }
  }, [userInfo, redirect, navigate, location.state, serverMsg]);

  // const handleGoogleLogin = useGoogleLogin({
  //   onSuccess: async (response) => {
  //     const userInfo = await axios
  //       .get("https://www.googleapis.com/oauth2/v3/userinfo", {
  //         headers: { Authorization: `Bearer ${response.access_token}` },
  //       })
  //       .then((res) => res.data);
  //     const { sub, email, name, googleImage } = userInfo;
  //     dispatch(googleLogin(sub, email, name, googleImage));
  //     // console.log(userInfo);
  //   },
  // });

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={Yup.object({
        email: Yup.string()
          .email("Invalid email.")
          .required("An email address is required."),
        password: Yup.string()
          .min(1, "Password is too short - must contain at least 1 character.")
          .required("Password is required."),
      })}
      onSubmit={(values) => {
        dispatch(login(values.email, values.password));
      }}
    >
      {(formik) => (
        <section className="formsubsty">
          <div className="logHeading">
            <h1>Log in to your account</h1>
            <p>
              Don't have an account? &nbsp;
              <Link to="/register-page" style={{ color: "#07a4b5" }}>
                Sign up
              </Link>
            </p>
          </div>
          <article>
            <div>
              <form onSubmit={formik.handleSubmit}>
                {error && showAlert && (
                  <Alert
                    type="error"
                    title="Error!"
                    description={error}
                    onClose={() => setShowAlert(false)}
                  />
                )}
                <div className="inputhlos">
                  <TextField
                    type="text"
                    name="email"
                    placeholder="you@example.com"
                    label="Email"
                  />
                  <span>
                    <label htmlFor="Password">Password</label>
                    <aside>
                      <PasswordField
                        type="password"
                        name="password"
                        placeholder="your password"
                      />
                    </aside>
                  </span>
                  <span>
                    <button
                      className="forgotbtn"
                      type="button"
                      onClick={() => setShowPasswordReset(!showPasswordReset)}
                    >
                      Forgot Password?
                    </button>
                  </span>
                  {showPasswordReset && <PasswordForgottenForm />}
                </div>

                <button className="submitform" type="submit" disabled={loading}>
                  {loading ? "Signing in..." : "Sign in"}
                </button>
                {/* <button
                  className="submitform"
                  onClick={() => handleGoogleLogin()}
                  disabled={loading}
                >
                  <FcGoogle /> Google Sign in
                </button> */}
              </form>
            </div>
          </article>
        </section>
      )}
    </Formik>
  );
};

export default LoginScreen;

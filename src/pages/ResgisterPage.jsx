import React from "react";
import { Formik } from "formik";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link as ReactLink, useNavigate, useParams } from "react-router-dom";
import * as Yup from "yup";
import PasswordField from "../components/PasswordField";
import { toast } from "react-toastify";
import Alert from "../components/reusables/Alert";
import {
  register,
  resetPassword,
  resetState,
} from "../redux/actions/userActions";
import TextField from "../components/TextField";

const RegistrationPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const redirect = "/products";
  const { loading, error, userInfo } = useSelector((state) => state.user);
  const [showAlert, setShowAlert] = useState(true);

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
      toast.success(
        userInfo.firstLogin
          ? "Account created. Welcome aboard."
          : `Welcome back ${userInfo.name}`
      );
    } else if (error) {
      toast.error(error || "Signup  failed.");
    }
  }, [userInfo, redirect, error, navigate, toast]);

  return (
    <Formik
      initialValues={{ email: "", password: "", name: "" }}
      validationSchema={Yup.object({
        name: Yup.string().required("A name is required."),
        email: Yup.string()
          .email("Invalid email")
          .required("This email address is required."),
        password: Yup.string()
          .min(1, "Password is too short - must contain at least 1 character.")
          .required("Password is required."),
        confirmPassword: Yup.string()
          .min(1, "Password is too short - must contain at least 1 character.")
          .required("Password is required.")
          .oneOf([Yup.ref("password"), null], "Passwords must match"),
      })}
      onSubmit={(values) => {
        dispatch(register(values.name, values.email, values.password));
      }}
    >
      {(formik) => (
        <section className="formsubsty">
          <div className="logHeading">
            <h1>Create an account.</h1>
            <p>
              Already a user?
              <ReactLink to={"/login-page"}>Sign in</ReactLink>
            </p>
          </div>
          <article>
            <div>
              <form onSubmit={formik.handleSubmit}>
                {error && showAlert && (
                  <Alert
                    type="error"
                    title="Error!"
                    description="Sorry Something went wrong."
                    onClose={() => setShowAlert(false)}
                  />
                )}
                <div className="inputhlos">
                  <TextField
                    type="text"
                    name="name"
                    placeholder="Your first and last name."
                    label="Full name"
                  />
                  <span>
                    <label htmlFor="Email">Email</label>
                    <aside>
                      <TextField
                        type="text"
                        name="email"
                        placeholder="you@example.com"
                        // label="Email"
                      />
                    </aside>
                  </span>
                  <span>
                    <label htmlFor="Password">Password</label>
                    <aside>
                      <PasswordField
                        type="password"
                        name="password"
                        placeholder="Your password"
                        // label="Password"
                      />
                    </aside>
                  </span>
                  <span>
                    <label htmlFor="Confirm your password">
                      Confirm your password
                    </label>
                    <aside>
                      <PasswordField
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm your new password"
                        // label="Confirm your password"
                      />
                    </aside>
                  </span>
                </div>

                <button className="submitform" type="submit" disabled={loading}>
                  {loading ? "Creating account..." : "Sign Up"}
                </button>
              </form>
            </div>
          </article>
        </section>
      )}
    </Formik>
  );
};

export default RegistrationPage;

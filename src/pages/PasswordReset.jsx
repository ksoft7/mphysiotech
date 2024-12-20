import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import PasswordField from "../components/PasswordField";
import { resetPassword, resetState } from "../redux/actions/userActions";

const PasswordResetScreen = () => {
  const { token } = useParams(); // Extract token from the URL
  const dispatch = useDispatch();

  const { loading, error, serverStatus, serverMsg } = useSelector(
    (state) => state.user
  );

  useEffect(() => {
    if (serverStatus && serverMsg) {
      toast.success(serverMsg);
      dispatch(resetState());
    }
  }, [serverStatus, serverMsg, dispatch]);

  return serverStatus ? (
    <section style={{ marginTop: "15rem" }}>
      <p>Password reset successful!</p>
      {/* Add a link to navigate back to the login page */}
    </section>
  ) : (
    <Formik
      initialValues={{ password: "", confirmPassword: "" }}
      validationSchema={Yup.object({
        password: Yup.string()
          .min(8, "Password must be at least 8 characters long.")
          .required("Password is required."),
        confirmPassword: Yup.string()
          .oneOf([Yup.ref("password")], "Passwords must match")
          .required("Confirm password is required."),
      })}
      onSubmit={(values) => {
        dispatch(resetPassword(values.password, token));
      }}
    >
      {(formik) => (
        <form style={{ marginTop: "15rem" }} onSubmit={formik.handleSubmit}>
          <PasswordField
            name="password"
            type="password"
            label="New Password"
            placeholder="Enter your new password"
          />
          <PasswordField
            name="confirmPassword"
            type="password"
            label="Confirm Password"
            placeholder="Confirm your new password"
          />
          {error && <p style={{ color: "red" }}>{error}</p>}
          <button type="submit" disabled={loading}>
            {loading ? "Resetting..." : "Reset Password"}
          </button>
        </form>
      )}
    </Formik>
  );
};

export default PasswordResetScreen;

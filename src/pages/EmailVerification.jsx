import React, { useEffect } from "react";
import { useParams, Link as ReactLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Spinner from "../components/reusables/Spinner";
import "../App.css";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { verifyEmail } from "../redux/actions/userActions";

const EmailVerification = () => {
  const { token } = useParams();
  const dispatch = useDispatch();
  const { loading, error, success } = useSelector((state) => state.user);

  useEffect(() => {
    if (token) {
      dispatch(verifyEmail(token));
    }
  }, [token, dispatch]);

  useEffect(() => {
    if (success) {
      toast.success("Email verified successfully!");
    } else if (error) {
      toast.error(error || "Email verification failed.");
    }
  }, [success, error]);

  console.log(token, error);

  return (
    <section className="emailVerifysty">
      <article>
        {loading ? (
          <div>
            <p>We are working on verifying your email...</p>
            <Spinner />
          </div>
        ) : success ? (
          <div className="emailVerifysty2">
            <IoIosCheckmarkCircle
              style={{ fontSize: "2rem", color: "green" }}
            />
            <p>Thanks for verifying your email!</p>
            <div>{!loading && <p>You can close this window now.</p>}</div>
            {/* <p>You can close this window now .</p> */}
          </div>
        ) : (
          <div className="emailVerifysty2">
            <IoIosCheckmarkCircle style={{ fontSize: "3rem", color: "red" }} />
            <p>We are sorry!</p>
            <h3>{error || "An error occurred while verifying your email."}</h3>
          </div>
        )}
      </article>
    </section>
  );
};

export default EmailVerification;

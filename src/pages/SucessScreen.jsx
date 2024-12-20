import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { BsBoxSeamFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { resetCart } from "../redux/actions/cartActions";

const SuccessScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetCart());
  }, [dispatch]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        textAlign: "center",
      }}
    >
      <p style={{ fontSize: "24px", marginBottom: "20px" }}>
        Thank you for your order.
      </p>
      <div style={{ marginBottom: "20px" }}>
        <BsBoxSeamFill size="50px" />
      </div>
      <p style={{ marginBottom: "20px" }}>
        You can see your order in the order history.
      </p>
      <Link
        to="/order-history"
        style={{
          display: "inline-block",
          padding: "10px 20px",
          backgroundColor: "#007BFF",
          color: "#fff",
          textDecoration: "none",
          borderRadius: "5px",
          marginTop: "10px",
        }}
      >
        Check your order history
      </Link>
    </div>
  );
};

export default SuccessScreen;

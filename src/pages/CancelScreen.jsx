import React from "react";
import { Link } from "react-router-dom";
import { BsBoxSeamFill } from "react-icons/bs";

const CancelScreen = () => {
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
        You have canceled the payment process.
      </p>
      <div style={{ marginBottom: "20px" }}>
        <BsBoxSeamFill size="50px" />
      </div>
      <p style={{ marginBottom: "20px" }}>
        But we have saved your cart, just in case.
      </p>
      <Link
        to="/cart"
        style={{
          display: "inline-block",
          padding: "10px 20px",
          backgroundColor: "#007BFF",
          color: "#fff",
          textDecoration: "none",
          borderRadius: "5px",
        }}
      >
        Go to your cart
      </Link>
    </div>
  );
};

export default CancelScreen;

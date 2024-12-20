import React from "react";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
function OrderSuccess() {
  return (
    <div
      style={{
        display: "flex",
        flexFlow: "column nowrap",
        gap: "3rem",
        justifyContent: "center",
        alignItems: "center",
        maxHeight: "100vh",
        minHeight: "100vh",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontSize: "3rem",
          fontFamily: "Poppins, san-serif",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
        }}
      >
        Payment sucessful
        <IoIosCheckmarkCircle style={{ fontSize: "3rem", color: "green" }} />
      </h1>
      <Link to={"/products"}>
        <button
          style={{
            textAlign: "center",
            fontSize: "1.7rem",
            fontFamily: "Poppins, san-serif",
            backgroundColor: "#07a4b5",
            border: "none",
            padding: "1rem 2rem",
            cursor: "pointer",
            width: "25rem",
            color: "#fff",
            borderRadius: "8px",
          }}
        >
          Continue shopping
        </button>
      </Link>
    </div>
  );
}

export default OrderSuccess;

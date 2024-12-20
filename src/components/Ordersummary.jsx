import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../App.css";
function Ordersummary() {
  const { subtotal, shipping } = useSelector((state) => state.cart);

  return (
    <>
      <section className="ordersty">
        <h2>Order Summary</h2>
        <span>
          <p>Subtotal</p>
          <p>${subtotal}</p>
        </span>
        <span>
          <p>Shipping</p>
          <p>${shipping}</p>
        </span>
        <span>
          <p>Total</p>
          <p>${Number(subtotal) + Number(shipping)}</p>
        </span>
        <Link to={"/checkout"}>
          <button>
            Checkout <FaArrowRight />
          </button>
        </Link>
      </section>
    </>
  );
}

export default Ordersummary;

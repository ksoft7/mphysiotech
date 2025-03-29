import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { useSelector } from "react-redux";
import "../App.css";

function Ordersummary() {
  const { subtotal, shipping } = useSelector((state) => state.cart);
  const total = Number(subtotal) + Number(shipping);

  return (
    <section className="ordersty">
      <h2>Order Summary</h2>

      <span>
        <p>Subtotal</p>
        <p>₦{subtotal.toLocaleString()}</p>
      </span>

      <span>
        <p>Shipping</p>
        <p>₦{shipping.toLocaleString()}</p>
      </span>

      <span
        style={{
          fontWeight: "bold",
          borderTop: "1px solid #ccc",
          paddingTop: "0.5rem",
        }}
      >
        <p>Total</p>
        <p>₦{total.toLocaleString()}</p>
      </span>

      {/* Note: Checkout button handled in Cartscreen */}
      <button type="button" disabled>
        Checkout <FaArrowRight />
      </button>
    </section>
  );
}

export default Ordersummary;

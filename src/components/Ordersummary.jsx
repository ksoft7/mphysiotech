import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { useSelector } from "react-redux";
import "../App.css";

function Ordersummary() {
  const { cartItems, subtotal, shipping } = useSelector((state) => state.cart);
  const total = Number(subtotal) + Number(shipping);

  const productDetails = cartItems
    .map((item) => {
      if (!item.variants || item.variants.length === 0) return "";

      return item.variants
        .map((variant) => {
          const lineTotal = variant.qty * variant.price;
          return `• ${item.name} - ${variant.specification} (x${
            variant.qty
          }) = ₦${lineTotal.toLocaleString()}`;
        })
        .join("\n");
    })
    .filter(Boolean)
    .join("\n");

  const message = `Hello, I want to place an order:\n
${productDetails}

Subtotal: ₦${subtotal.toLocaleString()}
Shipping: ₦${shipping.toLocaleString()}
Total: ₦${total.toLocaleString()}

Please confirm availability.
From Rehab&Recovery website`;

  const phoneNumber = "+2348139436133";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

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

      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="checkout-btn"
      >
        Checkout via WhatsApp <FaArrowRight />
      </a>
    </section>
  );
}

export default Ordersummary;

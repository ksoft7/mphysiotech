import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import CartItem from "../components/reusables/CartItem";
import Ordersummary from "../components/Ordersummary";
import Spinner from "../components/reusables/Spinner";

function Cartscreeen() {
  const { loading, error, cartItems } = useSelector((state) => state.cart);

  return (
    <section className="move">
      {loading ? (
        <Spinner />
      ) : error ? (
        <p style={{ color: "red", textAlign: "center" }}>An error occurred</p>
      ) : cartItems.length <= 0 ? (
        <div style={{ textAlign: "center", marginTop: "15rem" }}>
          <h1>Your cart is empty</h1>
          <Link to={"/products"}>Click here to see your products.</Link>
        </div>
      ) : (
        <section className="cartitems">
          <div className="styitem_row">
            {cartItems.map((cartItem) => (
              <CartItem key={cartItem.id} cartItem={cartItem} />
            ))}
          </div>

          <div>
            <Ordersummary />
          </div>
        </section>
      )}
    </section>
  );
}

export default Cartscreeen;

import React from "react";
import "../App.css";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import CartItem from "../components/reusables/CartItem";
import Ordersummary from "../components/Ordersummary";
import Spinner from "../components/reusables/Spinner";

function Cartscreeen() {
  const { loading, error, cartItems } = useSelector((state) => state.cart);

  const navigate = useNavigate();

  // Calculate the total price
  const totalAmount = cartItems.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  // Prepare selected products for checkout
  const selectedProducts = cartItems.map((item) => ({
    id: item.id,
    name: item.name,
    qty: item.qty,
    price: item.price,
  }));

  const handleCheckout = () => {
    if (cartItems.length > 0) {
      navigate("/checkout", {
        state: {
          amount: totalAmount,
          products: selectedProducts,
        },
      });
    } else {
      alert("Your cart is empty");
    }
  };

  const getHeadingContent = () =>
    cartItems.length === 1 ? `(1 Item)` : `(${cartItems.length} Items)`;

  return (
    <section className="move">
      {loading ? (
        <Spinner />
      ) : error ? (
        <p>error</p>
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
            <h3>Total Amount: ${totalAmount.toFixed(2)}</h3>
            <button className="btn-primary" onClick={handleCheckout}>
              Proceed to Checkout
            </button>
            <Link to={"/products"}>
              <button className="btn-secondary">Or Continue Shopping</button>
            </Link>
          </div>
        </section>
      )}
    </section>
  );
}

export default Cartscreeen;

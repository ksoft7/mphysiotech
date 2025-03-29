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

  // ✅ Calculate total from all variants
  const totalAmount = cartItems.reduce((acc, product) => {
    return (
      acc +
      product.variants.reduce(
        (variantTotal, v) => variantTotal + v.price * v.qty,
        0
      )
    );
  }, 0);

  // ✅ Flatten product-variant combinations for checkout
  const selectedProducts = cartItems.flatMap((product) =>
    product.variants.map((variant) => ({
      id: product.id,
      name: product.name,
      variantId: variant.variantId,
      specification: variant.specification,
      qty: variant.qty,
      price: variant.price,
    }))
  );

  const handleCheckout = () => {
    if (selectedProducts.length > 0) {
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
            <h3>Total Amount: ₦{totalAmount.toFixed(2)}</h3>
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

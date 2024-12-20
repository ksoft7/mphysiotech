import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  initializePayment,
  verifyPayment,
} from "../redux/actions/orderActions";
import { useLocation, useNavigate } from "react-router-dom";

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { userInfo } = useSelector((state) => state.user);
  const { paymentUrl, paymentReference, paymentStatus, loading, error } =
    useSelector((state) => state.order);

  const { amount, products } = location.state || { amount: 0, products: [] };
  console.log(products);

  const email = userInfo?.email;
  const userId = userInfo?._id;
  const userName = userInfo?.name;
  const userEmail = userInfo?.email;

  useEffect(() => {
    if (paymentReference && paymentStatus === "success") {
      navigate(`/order-success`);
    }

    return () => {
      dispatch({ type: "ORDER_PAYMENT_RESET" });
    };
  }, [paymentReference, paymentStatus, navigate, dispatch]);

  const handlePay = () => {
    const orderId = `order_${Date.now()}`;

    dispatch(
      initializePayment({
        orderId,
        email,
        amount,
        userId,
        userName,
        userEmail,
        orderItems: products,
      })
    );
  };

  const handleVerify = () => {
    if (paymentReference) {
      dispatch(verifyPayment(paymentReference));
    }
  };

  return (
    <div style={{ marginTop: "20rem" }}>
      <h1>Checkout</h1>
      <h3>Total Amount: ${amount.toFixed(2)}</h3>

      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price} x {product.qty}
          </li>
        ))}
      </ul>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {paymentUrl ? (
        <>
          <a href={paymentUrl} target="_blank" rel="noopener noreferrer">
            <button>Complete Payment</button>
          </a>
          <button onClick={handleVerify}>Verify Payment</button>
        </>
      ) : (
        <button onClick={handlePay}>Pay Now</button>
      )}
    </div>
  );
};

export default Checkout;

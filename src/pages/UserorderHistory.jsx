import "../App.css";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrderHistory } from "../redux/actions/orderActions";
import Spinner from "../components/reusables/Spinner";

const UserOrder = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Select data from Redux store
  const { loading, orders = [], error } = useSelector((state) => state.order);
  console.log(error);
  useEffect(() => {
    dispatch(fetchOrderHistory());
  }, [dispatch]);

  return (
    <div className="order-page">
      <h2>My Orders</h2>

      {loading ? (
        <Spinner />
      ) : error ? (
        <p className="error-message">{error}</p>
      ) : (
        <div className="order-list">
          {orders.length === 0 ? (
            <p className="no-orders-message">You have no orders yet.</p>
          ) : (
            <table className="order-table">
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Date</th>
                  <th>Total</th>
                  <th>Status</th>
                  <th>Details</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order._id}>
                    <td>{order._id}</td>
                    <td>{new Date(order.createdAt).toLocaleDateString()}</td>
                    <td>${order.totalPrice?.toFixed(2)}</td>
                    <td>{order.paymentStatus}</td>
                    <td>
                      <button
                        className="view-order-button"
                        onClick={() => navigate(`/order/${order._id}`)}
                      >
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      )}
    </div>
  );
};

export default UserOrder;

import axios from "axios";
import {
  paymentRequest,
  paymentSuccess,
  paymentFail,
  verificationRequest,
  verificationSuccess,
  verificationFail,
  orderHistoryRequest,
  orderHistorySuccess,
  orderHistoryFail,
} from "../slices/order.js";

const API_URL = `https://mphysiotech-backend.onrender.com/api/orders`;

export const initializePayment = (orderData) => async (dispatch) => {
  try {
    dispatch(paymentRequest());

    const { data } = await axios.post(`${API_URL}/pay`, orderData);

    dispatch(paymentSuccess(data));
  } catch (error) {
    dispatch(paymentFail(error.response?.data?.message || error.message));
  }
};

export const verifyPayment = (reference) => async (dispatch) => {
  try {
    dispatch(verificationRequest());
    const { data } = await axios.get(`${API_URL}/verify/${reference}`);
    dispatch(verificationSuccess(data));
  } catch (error) {
    dispatch(verificationFail(error.response?.data?.message || error.message));
  }
};

export const fetchOrderHistory = () => async (dispatch, getState) => {
  try {
    dispatch(orderHistoryRequest());

    const {
      user: { userInfo },
    } = getState();

    if (!userInfo || !userInfo.token) {
      throw new Error("User is not logged in or token is missing.");
    }

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(
      "https://mphysiotech-backend.onrender.com/api/orders/my-orders",
      config
    );
    dispatch(orderHistorySuccess(data));
  } catch (error) {
    dispatch(orderHistoryFail(error.response?.data?.message || error.message));
  }
};

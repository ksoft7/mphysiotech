import axios from "axios";
import {
  setUserOrders,
  setError,
  setLoading,
  setServerResponseStatus,
  setServerResponseMsg,
  userLogin,
  userLogout,
  verificationEmail,
  stateReset,
} from "../slices/user.js";

import { clearCart } from "../slices/cart.js";

export const login = (email, password) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const config = { headers: { "Content-Type": "application/json" } };

    const { data } = await axios.post(
      "https://mphysiotech-backend.onrender.com/api/users/login",
      { email, password },
      config
    );

    dispatch(userLogin(data));
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch(
      setError(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
          ? error.message
          : "An expected error has occured. Please try again later."
      )
    );
  }
};

export const logout = () => async (dispatch) => {
  try {
    const token = JSON.parse(localStorage.getItem("userInfo"))?.token;

    if (!token) {
      // throw new Error("No token found. Please log in.");
      localStorage.removeItem("userInfo");
      dispatch(userLogout());
    }

    await axios.post(
      "https://mphysiotech-backend.onrender.com/api/users/logout",
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch(clearCart());

    localStorage.removeItem("userInfo");
    dispatch(userLogout());
  } catch (error) {
    console.error("Logout error:", error);
    dispatch(setError(error.response?.data?.message || "Logout failed."));
  }
};

export const register = (name, email, password) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const config = { headers: { "Content-Type": "application/json" } };

    const { data } = await axios.post(
      "https://mphysiotech-backend.onrender.com/api/users/register",
      { name, email, password },
      config
    );

    dispatch(userLogin(data));
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch(
      setError(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
          ? error.message
          : "An expected error has occured. Please try again later."
      )
    );
  }
};

export const verifyEmail = (token) => async (dispatch) => {
  dispatch(setLoading(true));

  try {
    // Add token to the Authorization header
    const { data } = await axios.get(
      `https://mphysiotech-backend.onrender.com/api/users/verify-email`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    dispatch(verificationEmail());
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    if (userInfo) {
      userInfo.active = true;
      localStorage.setItem("userInfo", JSON.stringify(userInfo));
    }

    console.log(data.message);
  } catch (error) {
    dispatch(
      setError(
        error.response?.data?.message || error.message || "Verification failed."
      )
    );
  }
};

export const sendResetEmail = (email) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const config = { headers: { "Content-Type": "application/json" } };

    const { data, status } = await axios.post(
      `https://mphysiotech-backend.onrender.com/api/users/password-reset-request`,
      { email },
      config
    );

    dispatch(setServerResponseMsg(data));
    dispatch(setServerResponseStatus(status));
  } catch (error) {
    dispatch(
      setError(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
          ? error.message
          : "An expected error has occured. Please try again later."
      )
    );
  }
};

export const resetPassword = (password, token) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      `https://mphysiotech-backend.onrender.com/api/users/password-reset/${token}`, // Token in URL
      { password },
      config
    );

    dispatch(setServerResponseMsg(data.message));
    dispatch(setServerResponseStatus(200));
  } catch (error) {
    dispatch(
      setError(error.response?.data?.message || "An unexpected error occurred.")
    );
  }
};

export const resetState = () => async (dispatch) => {
  dispatch(stateReset());
};

export const googleLogin =
  (googleId, email, name, googleImage) => async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const config = { headers: { "Content-Type": "application/json" } };

      const { data } = await axios.post(
        "https://mphysiotech-backend.onrender.com/api/users/google-login",
        { googleId, email, name, googleImage },
        config
      );
      dispatch(userLogin(data));
      localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
      dispatch(
        setError(
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message
            ? error.message
            : "An expected error has occured. Please try again later."
        )
      );
    }
  };

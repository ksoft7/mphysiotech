import axios from "axios";
import {
  // setUserOrders,
  setError,
  setLoading,
  setServerResponseStatus,
  setServerResponseMsg,
  userLogin,
  userLogout,
  updateUser,
  verificationEmail,
  setSuccess,
  stateReset,
} from "../slices/user.js";

import { clearCart } from "../slices/cart.js";

import { API_URL } from "../../components/constant.js";
const Base_URL = `${API_URL}/users`;

export const updateUserProfile =
  (updatedUser) => async (dispatch, getState) => {
    dispatch(setLoading(true));
    try {
      const token = getState().user.userInfo?.token;

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      const { data } = await axios.patch(
        `${Base_URL}/updateUser`,
        updatedUser,
        config
      );

      dispatch(updateUser(data)); // Update Redux state

      localStorage.setItem("userInfo", JSON.stringify(data)); // Sync localStorage

      dispatch(setSuccess("Profile updated successfully!"));
    } catch (error) {
      dispatch(
        setError(
          error.response?.data?.message || "Profile update failed. Try again."
        )
      );
    }
  };

export const login = (email, password) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const config = { headers: { "Content-Type": "application/json" } };

    const { data } = await axios.post(
      `${Base_URL}/login`,
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
      `${Base_URL}/logout`,
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
      `${Base_URL}/register`,
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
    const { data } = await axios.get(`${Base_URL}/verify-email`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    dispatch(verificationEmail());
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    if (userInfo) {
      userInfo.active = true;
      localStorage.setItem("userInfo", JSON.stringify(userInfo));
    }

    console.log(userInfo);
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
      `${Base_URL}/password-reset-request`,
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
      `${Base_URL}/password-reset/${token}`, // Token in URL
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
        `${Base_URL}/google-login`,
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

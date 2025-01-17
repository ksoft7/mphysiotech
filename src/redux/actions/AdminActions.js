import axios from "axios";
import {
  getUsers,
  userDelete,
  resetError,
  setError,
  setLoading,
  orderDelete,
  setDeliveredFlag,
  getOrders,
  logout,
} from "../slices/admin.js";
import {
  setProducts,
  setProductUpdateFlag,
  setReviewRemovalFlag,
} from "../slices/product.js";

// Action for handling admin login
export const adminLogin = (email, password) => async (dispatch) => {
  try {
    const { data } = await axios.post(
      "https://mphysiotech-backend.onrender.com/api/users/login",
      {
        email,
        password,
      }
    );

    dispatch({
      type: "USER_LOGIN_SUCCESS",
      payload: {
        _id: data._id,
        name: data.name,
        email: data.email,
        token: data.token,
        isAdmin: data.isAdmin,
      },
    });

    // Store the token in sessionStorage for the session duration
    sessionStorage.setItem(
      "adminInfo",
      JSON.stringify({
        _id: data._id,
        name: data.name,
        email: data.email,
        token: data.token,
        isAdmin: data.isAdmin,
      })
    );
  } catch (error) {
    console.error("Login failed:", error.message);
    // Handle error case
  }
};

export const adminLogout = () => (dispatch) => {
  dispatch(logout());
  sessionStorage.removeItem("adminInfo");
};

export const getAllUsers = () => async (dispatch) => {
  const adminInfo = JSON.parse(sessionStorage.getItem("adminInfo"));

  try {
    if (!adminInfo || !adminInfo.token) {
      throw new Error("Not authorized as admin");
    }

    const config = {
      headers: {
        Authorization: `Bearer ${adminInfo.token}`,
      },
    };

    const { data } = await axios.get(
      "https://mphysiotech-backend.onrender.com/api/users/getusers",
      config
    );
    dispatch(getUsers(data));
  } catch (error) {
    dispatch({
      type: "GET_USERS_FAIL",
      payload: error.response?.data?.message || error.message,
    });
  }
};

export const deleteUser = (id) => async (dispatch) => {
  const adminInfo = JSON.parse(sessionStorage.getItem("adminInfo"));

  try {
    if (!adminInfo || !adminInfo.token) {
      throw new Error("Not authorized as admin");
    }

    const config = {
      headers: {
        Authorization: `Bearer ${adminInfo.token}`,
      },
    };

    const { data } = await axios.delete(
      `https://mphysiotech-backend.onrender.com/api/users/userdel/${id}`,
      config
    );

    dispatch(userDelete(data));
  } catch (error) {
    console.error("Error deleting user:", error);
    dispatch(
      setError(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message || "Users could not be deleted."
      )
    );
  }
};

export const getAllOrders = () => async (dispatch, getState) => {
  dispatch(setLoading(true));
  const {
    user: { userInfo },
  } = getState();

  try {
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.get(
      "https://mphysiotech-backend.onrender.com/api/orders",
      config
    );
    dispatch(getOrders(data));
  } catch (error) {
    dispatch(
      setError(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
          ? error.message
          : "Orders could not be fetched."
      )
    );
  }
};

export const deleteOrder = (id) => async (dispatch, getState) => {
  const {
    user: { userInfo },
  } = getState();

  try {
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.delete(
      `https://mphysiotech-backend.onrender.com/api/orders/${id}`,
      config
    );
    dispatch(orderDelete(data));
  } catch (error) {
    dispatch(
      setError(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
          ? error.message
          : "Order could not be removed."
      )
    );
  }
};

export const setDelivered = (id) => async (dispatch, getState) => {
  dispatch(setLoading(true));
  const {
    user: { userInfo },
  } = getState();

  try {
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
        "Content-Type": "application/json",
      },
    };
    await axios.put(
      `https://mphysiotech-backend.onrender.com/api/orders/${id}`,
      {},
      config
    );
    dispatch(setDeliveredFlag());
  } catch (error) {
    dispatch(
      setError(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
          ? error.message
          : "Order could not be updated."
      )
    );
  }
};

export const resetErrorAndRemoval = () => async (dispatch) => {
  try {
    dispatch({ type: "RESET_ERROR" });
    dispatch({ type: "RESET_REMOVAL" });
  } catch (error) {
    console.error("Error resetting:", error);
  }
};

export const deleteProduct = (id) => async (dispatch) => {
  const adminInfo = JSON.parse(sessionStorage.getItem("adminInfo"));

  try {
    if (!adminInfo || !adminInfo.token) {
      throw new Error("Not authorized as admin");
    }

    const config = {
      headers: {
        Authorization: `Bearer ${adminInfo.token}`,
      },
    };

    const { data } = await axios.delete(
      `https://mphysiotech-backend.onrender.com/api/products/${id}`,
      config
    );
    dispatch(setProducts(data));
    dispatch(setProductUpdateFlag());
    dispatch(resetError());
  } catch (error) {
    dispatch(
      setError(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
          ? error.message
          : "Product could not be removed."
      )
    );
  }
};

export const uploadProduct = (newProduct) => async (dispatch, getState) => {
  const {
    user: { userInfo },
  } = getState();

  try {
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post(
      `https://mphysiotech-backend.onrender.com/api/products`,
      newProduct,
      config
    );
    dispatch(setProducts(data));
    dispatch(setProductUpdateFlag());
  } catch (error) {
    dispatch(
      setError(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
          ? error.message
          : "Product could not be uploaded."
      )
    );
  }
};

export const removeReview =
  (productId, reviewId) => async (dispatch, getState) => {
    const {
      user: { userInfo },
    } = getState();

    try {
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.put(
        `https://mphysiotech-backend.onrender.com/api/products/${productId}/${reviewId}`,
        {},
        config
      );
      console.log(data);
      dispatch(setProducts(data));
      dispatch(setReviewRemovalFlag());
    } catch (error) {
      dispatch(
        setError(
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message
            ? error.message
            : "Review could not be removed."
        )
      );
    }
  };

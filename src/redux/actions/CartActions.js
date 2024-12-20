import axios from "axios";
import {
  setError,
  setLoading,
  setShippingCosts,
  cartItemRemove,
  cartItemAdd,
  clearCart,
} from "../slices/cart.js";

export const addCartItem = (id, qty) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const { data } = await axios.get(
      `https://mphysiotech-backend.onrender.com/api/products/${id}`
    );
    if (!data || !data._id) {
      throw new Error("Product data is missing or invalid");
    }
    const itemToAdd = {
      id: data._id,
      name: data.name,
      subtitle: data.subtitle,
      image: data.images[0],
      price: data.price,
      stock: data.stock,
      brand: data.brand,
      qty: Number(qty),
      stripeId: data.stripeId,
    };
    dispatch(cartItemAdd(itemToAdd));
    console.log("items added");
  } catch (error) {
    dispatch(
      setError(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
          ? error.message
          : "An error occurred. Please try again later."
      )
    );
  }
};

export const removeCartItem = (id) => async (dispatch) => {
  dispatch(setLoading(true));
  dispatch(cartItemRemove(id));
};

export const setShipping = (value) => async (dispatch) => {
  dispatch(setShippingCosts(value));
};

export const resetCart = () => async (dispatch) => {
  dispatch(clearCart);
};

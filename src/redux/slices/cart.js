import { createSlice } from "@reduxjs/toolkit";

const calculateSubtotal = (cartState) => {
  let result = 0;
  cartState.forEach((item) => {
    result += item.qty * item.price;
  });
  return result;
};

export const initialState = {
  loading: false,
  error: null,
  cartItems: JSON.parse(localStorage.getItem("cartItems")) ?? [],
  shipping: JSON.parse(localStorage.getItem("shipping")) ?? 4.99,
  subtotal: localStorage.getItem("cartItems")
    ? calculateSubtotal(JSON.parse(localStorage.getItem("cartItems")))
    : 0,
};

const updateLocalStorage = (cart) => {
  localStorage.setItem("cartItems", JSON.stringify(cart));
  localStorage.setItem("subtotal", JSON.stringify(calculateSubtotal(cart)));
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setLoading: (state) => {
      state.loading = true;
    },
    setError: (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    },
    cartItemAdd: (state, { payload }) => {
      const existingItem = state.cartItems.find(
        (item) => item.id === payload.id
      );

      if (existingItem) {
        existingItem.qty = Number(payload.qty);
      } else {
        state.cartItems.push({ ...payload, qty: Number(payload.qty) });
      }

      state.subtotal = calculateSubtotal(state.cartItems);
      updateLocalStorage(state.cartItems);
      state.loading = false;
      state.error = null;
    },

    cartItemRemove: (state, { payload }) => {
      state.cartItems = state.cartItems.filter((item) => item.id !== payload);

      updateLocalStorage(state.cartItems);
      state.subtotal = calculateSubtotal(state.cartItems);
      state.loading = false;
      state.error = null;
    },
    setShippingCosts: (state, { payload }) => {
      state.shipping = payload;
      localStorage.setItem("shipping", payload);
    },
    clearCart: (state) => {
      localStorage.removeItem("cartItems");
      localStorage.removeItem("shipping");
      localStorage.removeItem("subtotal");

      state.cartItems = [];
      state.shipping = 4.99;
      state.subtotal = 0;
      state.loading = false;
      state.error = null;
    },
  },
});

export const {
  setError,
  setShippingCosts,
  cartItemAdd,
  cartItemRemove,
  setLoading,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

export const cartSelector = (state) => state.cart;

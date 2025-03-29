import { createSlice } from "@reduxjs/toolkit";

// Utility: Calculate subtotal from cart state
const calculateSubtotal = (cartState) =>
  cartState.reduce(
    (acc, item) =>
      acc +
      item.variants.reduce(
        (sum, variant) => sum + variant.qty * variant.price,
        0
      ),
    0
  );

// Load initial state from localStorage
const loadFromLocalStorage = (key, fallback) =>
  JSON.parse(localStorage.getItem(key)) ?? fallback;

export const initialState = {
  loading: false,
  error: null,
  cartItems: loadFromLocalStorage("cartItems", [])
    .map((product) => ({
      ...product,
      variants: product.variants.filter((v) => v.stock !== "out of stock"),
    }))
    .filter((product) => product.variants.length > 0),
  shipping: loadFromLocalStorage("shipping", 4.99),
  subtotal: calculateSubtotal(
    loadFromLocalStorage("cartItems", [])
      .map((product) => ({
        ...product,
        variants: product.variants.filter((v) => v.stock !== "out of stock"),
      }))
      .filter((product) => product.variants.length > 0)
  ),
};

// Sync to localStorage
const updateLocalStorage = (cart) => {
  localStorage.setItem("cartItems", JSON.stringify(cart));
  localStorage.setItem("subtotal", JSON.stringify(calculateSubtotal(cart)));
};

// Slice definition
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
      // 1. Don't add if out of stock
      if (payload.stock === "out of stock") {
        return;
      }

      const productIndex = state.cartItems.findIndex(
        (item) => item.id === payload.id
      );

      if (productIndex !== -1) {
        const existingProduct = state.cartItems[productIndex];
        const existingVariant = existingProduct.variants.find(
          (v) => v.variantId === payload.variantId
        );

        if (existingVariant) {
          existingVariant.qty += payload.qty;
        } else {
          existingProduct.variants.push({
            variantId: payload.variantId,
            specification: payload.specification,
            qty: payload.qty,
            price: payload.price,
          });
        }
      } else {
        state.cartItems.push({
          id: payload.id,
          name: payload.name,
          image: payload.image,
          variants: [
            {
              variantId: payload.variantId,
              specification: payload.specification,
              qty: payload.qty,
              price: payload.price,
            },
          ],
        });
      }

      // Cleanup out-of-stock variants just in case
      state.cartItems = state.cartItems
        .map((item) => ({
          ...item,
          variants: item.variants.filter(
            (variant) => variant.stock !== "out of stock"
          ),
        }))
        .filter((item) => item.variants.length > 0);

      state.subtotal = calculateSubtotal(state.cartItems);
      updateLocalStorage(state.cartItems);
      state.loading = false;
      state.error = null;
    },

    cartItemRemove: (state, { payload }) => {
      const product = state.cartItems.find((item) => item.id === payload.id);

      if (product) {
        product.variants = product.variants.filter(
          (variant) => variant.variantId !== payload.variantId
        );

        // Remove product if it has no variants left
        if (product.variants.length === 0) {
          state.cartItems = state.cartItems.filter(
            (item) => item.id !== payload.id
          );
        }
      }

      state.subtotal = calculateSubtotal(state.cartItems);
      updateLocalStorage(state.cartItems);
      state.loading = false;
      state.error = null;
    },

    setShippingCosts: (state, { payload }) => {
      state.shipping = payload;
      localStorage.setItem("shipping", JSON.stringify(payload));
    },

    clearCart: (state) => {
      localStorage.removeItem("cartItems");
      localStorage.removeItem("shipping");
      localStorage.removeItem("subtotal");

      state.cartItems = [];
      state.subtotal = 0;
      state.shipping = 4.99;
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

// Selector
export const cartSelector = (state) => state.cart;

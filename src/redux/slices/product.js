import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  loading: false,
  error: null,
  products: [],
  product: null,
  productPostCreated: false,
  updateButtonLoading: false,
  removeButtonLoading: false,
  message: null,
  pagination: {},
  reviewed: false,
  favoritesToggled: false,
  favorites: JSON.parse(localStorage.getItem("favorites")) ?? [],
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, { payload }) => {
      state.loading = false;
      state.error = null;
      state.products = payload;
    },
    setProduct: (state, { payload }) => {
      state.product = payload;
      state.loading = false;
      state.error = null;
      state.reviewed = false;
    },
    setError: (state, { payload }) => {
      state.error = payload;
      state.updateButtonLoading = false;
    },
    setPagination: (state, { payload }) => {
      state.loading = false;
      state.error = null;
      state.pagination = payload;
    },
    setFavorites: (state, { payload }) => {
      state.favorites = payload;
      localStorage.setItem("favorites", JSON.stringify(payload));
    },
    setFavoritesToggle: (state, { payload }) => {
      state.favoritesToggled = payload;
    },
    productReviewed: (state, { payload }) => {
      state.loading = false;
      state.error = null;
      state.reviewed = payload;
    },
    resetError: (state) => {
      state.error = null;
      state.reviewed = false;
      state.productUpdate = false;
      state.reviewRemoval = false;
    },
    setProductUpdateFlag: (state) => {
      state.productUpdate = true;
      state.loading = false;
    },
    setReviewRemovalFlag: (state) => {
      state.error = null;
      state.reviewRemoval = true;
      state.loading = false;
    },
    ProductCreatedSuccess: (state, { payload }) => {
      state.products.push(payload.product);
      state.productPostCreated = true;
      state.updateButtonLoading = false;
      state.message = payload.message;
      state.error = null;
    },
    ResetProductPostCreated: (state) => {
      state.productPostCreated = false;
      state.message = null;
    },
    SetLoading: (state, { payload }) => {
      state.updateButtonLoading = payload;
    },
    setLoading: (state, { payload }) => {
      state.updateButtonLoading = payload;
    },
  },
});

export const {
  setLoading,
  setError,
  setProducts,
  setPagination,
  setFavoritesToggle,
  setFavorites,
  setProduct,
  productReviewed,
  resetError,
  setProductUpdateFlag,
  setReviewRemovalFlag,
  ProductCreatedSuccess,
  ResetProductPostCreated,
} = productsSlice.actions;

export default productsSlice.reducer;
export const productSelector = (state) => state.products;

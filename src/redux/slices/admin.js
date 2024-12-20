import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  error: null,
  userList: null,
  userRemoval: false,
  orders: null,
  orderRemoval: false,
  deliveredFlag: false,
  adminInfo: null,
  error: null,
  adminInfo: JSON.parse(sessionStorage.getItem("adminInfo")) || null,
  loading: false,
  updatedProduct: null,
  products: [],
  productError: null,
};

export const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    adminLoginRequest: (state) => {
      state.loading = true;
    },
    logout: (state) => {
      state.adminInfo = null;
      sessionStorage.removeItem("adminInfo"); // Clear the admin session data from sessionStorage
    },
    adminLoginSuccess: (state, action) => {
      state.loading = false;
      state.adminInfo = action.payload;
      sessionStorage.setItem("adminInfo", JSON.stringify(action.payload));
    },
    adminLoginFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    setLoading: (state) => {
      state.loading = true;
    },
    setError: (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    },
    getUsers(state, payload) {
      state.userList = payload;
      state.error = null;
      state.loading = false;
    },
    getOrders: (state, { payload }) => {
      state.orders = payload;
      state.error = null;
      state.loading = false;
    },
    userDelete: (state) => {
      state.error = null;
      state.loading = false;
      state.userRemoval = true;
    },
    orderDelete: (state) => {
      state.error = null;
      state.loading = false;
      state.orderRemoval = true;
    },
    resetError: (state) => {
      state.error = null;
      state.loading = false;
      state.userRemoval = false;
      state.deliveredFlag = false;
      state.orderRemoval = false;
    },
    setDeliveredFlag: (state) => {
      state.deliveredFlag = true;
      state.loading = false;
    },
    resetErrorAndRemoval(state) {
      state.error = null;
      state.userRemoval = false;
    },
    userRemovalSuccess: (state, action) => {
      state.userRemoval = action.payload;
    },

    userRemovalFail: (state, action) => {
      state.error = action.payload;
    },
    getProductsSuccess: (state, { payload }) => {
      state.products = payload;
      state.loading = false;
    },
    getProductsFail: (state, { payload }) => {
      state.productError = payload;
      state.loading = false;
    },
    updateProductSuccess: (state, { payload }) => {
      const updatedProductIndex = state.products.findIndex(
        (product) => product._id === payload._id
      );
      if (updatedProductIndex !== -1) {
        state.products[updatedProductIndex] = payload;
      }
      state.loading = false;
    },
    updateProductFail: (state, { payload }) => {
      state.productError = payload;
      state.loading = false;
    },
  },
});

export const {
  setLoading,
  setError,
  getUsers,
  userDelete,
  resetError,
  setDeliveredFlag,
  orderDelete,
  getOrders,
  adminLoginRequest,
  adminLoginSuccess,
  adminLoginFail,
  resetErrorAndRemoval,
  userRemovalSuccess,
  userRemovalFail,
  getProductsSuccess,
  getProductsFail,
  updateProductSuccess,
  updateProductFail,
  logout,
} = adminSlice.actions;
export default adminSlice.reducer;

export const adminSelector = (state) => state.admin;

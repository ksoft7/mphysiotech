import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  paymentUrl: null,
  paymentReference: null,
  paymentStatus: null,
  loading: false,
  error: null,
  orders: [],
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    paymentRequest(state) {
      state.loading = true;
      state.error = null;
    },
    paymentSuccess(state, action) {
      state.loading = false;
      state.paymentUrl = action.payload.authorization_url;
      state.paymentReference = action.payload.reference;
    },
    paymentFail(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    verificationRequest(state) {
      state.loading = true;
      state.error = null;
    },
    verificationSuccess(state, action) {
      state.loading = false;
      state.paymentStatus = action.payload.message;
    },
    verificationFail(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    orderHistoryRequest(state) {
      state.loading = true;
      state.error = null;
    },
    orderHistorySuccess(state, action) {
      state.loading = false;
      state.orders = action.payload;
    },
    orderHistoryFail(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  paymentRequest,
  paymentSuccess,
  paymentFail,
  verificationRequest,
  verificationSuccess,
  verificationFail,
  orderHistoryRequest,
  orderHistorySuccess,
  orderHistoryFail,
} = orderSlice.actions;

export default orderSlice.reducer;

import { combineReducers, configureStore } from "@reduxjs/toolkit";

import product from "./slices/product.js";

import cart from "./slices/cart.js";

import user from "./slices/user.js";

import blogPosts from "./slices/blogPost.js";

import appointments from "./slices/appointment.js";

const reducer = combineReducers({
  product,
  cart,
  user,
  blogPosts,
  appointments,
});
export default configureStore({ reducer });

// import { combineReducers, configureStore } from "@reduxjs/toolkit";

// import product from "./slices/product";
// import cart from "./slices/cart";
// import user from "./slices/user";
// import blogPosts from "./slices/blogPost";
// import admin from "./slices/admin";
// import order from "./slices/order";

// const reducer = combineReducers({
//   product,
//   cart,
//   user,
//   blogPosts,
//   admin,
//   order,
// });

// export default configureStore({
//   reducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: ["order/initializePayment", "order/verifyPayment"], // Example: actions that might cause issues
//         ignoredPaths: ["order.paymentUrl", "order.paymentReference"], // Example: state paths that can contain non-serializable data
//       },
//     }),
// });

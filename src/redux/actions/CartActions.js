import axios from "axios";
import {
  setError,
  setLoading,
  setShippingCosts,
  cartItemRemove,
  cartItemAdd,
  clearCart,
} from "../slices/cart.js";

import { API_URL } from "../../components/constant.js";

const Base_URL = `${API_URL}/products`;

// Add item to cart with optional variant
export const addCartItem =
  (productId, qty, variantId = "") =>
  async (dispatch) => {
    dispatch(setLoading(true));

    try {
      const { data: product } = await axios.get(`${Base_URL}/${productId}`);

      if (!product?._id) {
        throw new Error("Product data is missing or invalid");
      }

      // Check if variant exists
      const variant = product.variants?.find((v) => v.id === variantId);

      // If the variant exists but is out of stock, skip adding
      if (variant && variant.variantAvailable === "out of stock") {
        console.warn("❌ Cannot add variant — it's out of stock.");
        return;
      }

      // Build payload for reducer
      const itemToAdd = {
        id: product._id,
        name: product.name,
        subtitle: product.subtitle,
        image: product.images[0],
        price: variant?.price ?? product.price,
        brand: product.brand,
        variantId: variant?.id ?? null,
        specification: variant?.specification ?? null,
        qty: Number(qty),
        stock: variant?.stock ?? "in stock", // Include stock status
      };

      dispatch(cartItemAdd(itemToAdd));

      console.log("🛒 Item added to cart:", itemToAdd);
      if (variant) {
        console.log("✅ Variant selected:", variant);
      } else {
        console.log("ℹ️ No variant selected — default product added");
      }
    } catch (error) {
      dispatch(
        setError(
          error.response?.data?.message ||
            error.message ||
            "Something went wrong"
        )
      );
    }
  };

// Remove variant from cart
export const removeCartItemThunk =
  (productId, variantId = "") =>
  async (dispatch) => {
    dispatch(cartItemRemove({ id: productId, variantId }));
  };

// Set shipping cost
export const setShipping = (value) => async (dispatch) => {
  dispatch(setShippingCosts(value));
};

// Clear cart
export const resetCart = () => async (dispatch) => {
  dispatch(clearCart());
};

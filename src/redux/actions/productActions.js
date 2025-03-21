import {
  setProducts,
  setLoading,
  setError,
  setPagination,
  setFavorites,
  setFavoritesToggle,
  setProduct,
  productReviewed,
  resetError,
} from "../../redux/slices/product.js";
import axios from "axios";

import { API_URL } from "../../components/constant.js";
const Base_URL = `${API_URL}/products`;

export const getProducts = (page, favouriteToggle) => async (dispatch) => {
  dispatch(setLoading());
  try {
    const { data } = await axios.get(`${Base_URL}/${page}/${12}`);
    const { products, pagination } = data;
    dispatch(setProducts(products));
    dispatch(setPagination(pagination));
  } catch (error) {
    dispatch(
      setError(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
          ? error.message
          : "An error has occured. Please try again later."
      )
    );
  }
};

export const addFavourites = (id) => async (dispatch, getState) => {
  const {
    product: { favorites },
  } = getState();
  const newFavourites = [...favorites, id];
  localStorage.setItem("favorites", JSON.stringify(newFavourites));
  dispatch(setFavorites(newFavourites));
};

export const removeFavourites = (id) => async (dispatch, getState) => {
  const {
    product: { favorites },
  } = getState();
  const newFavourites = favorites.filter((favoriteId) => favoriteId !== id);
  localStorage.setItem("favorites", JSON.stringify(newFavourites));
  dispatch(setFavorites(newFavourites));
};

export const toggleFavorites = (toggle) => (dispatch, getState) => {
  const {
    product: { favorites, products },
  } = getState();
  if (toggle) {
    const filterProducts = products.filter((product) =>
      favorites.includes(product._id)
    );
    dispatch(setFavoritesToggle(toggle));
    dispatch(setProducts(filterProducts));
  } else {
    dispatch(setFavoritesToggle(false));
    dispatch(getProducts(1));
  }
};

export const getProduct = (id) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const { data } = await axios.get(`${Base_URL}/${id}`);
    dispatch(setProduct(data));
  } catch (error) {
    dispatch(
      setError(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
          ? error.message
          : "An error has occured. Please try again later."
      )
    );
  }
};

export const createProductReview =
  (productId, userId, comment, rating, title) => async (dispatch, getState) => {
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

      await axios.post(
        `${Base_URL}/reviews/${productId}`,
        { comment, userId, rating, title },
        config
      );
      dispatch(productReviewed(true));
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

export const resetProductError = () => async (dispatch) => {
  dispatch(resetError());
};

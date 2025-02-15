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
  ProductCreatedSuccess,
} from "../../redux/slices/product.js";
import axios from "axios";

const API_URL = "https://mphysiotech-backend.onrender.com/api/products";

export const getProducts = (page, favouriteToggle) => async (dispatch) => {
  dispatch(setLoading());
  try {
    const { data } = await axios.get(`${API_URL}/${page}/${12}`);
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

export const createProductPost = (newPost) => async (dispatch) => {
  try {
    dispatch(setLoading(true));

    const adminInfo = JSON.parse(sessionStorage.getItem("adminInfo"));

    if (!adminInfo || !adminInfo.token) {
      dispatch(setError("Admin token not found. Please log in as an admin."));
      return;
    }
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${adminInfo.token}`,
      },
    };
    const { data } = await axios.post(`${API_URL}`, newPost, config);
    dispatch(ProductCreatedSuccess(data));
  } catch (error) {
    dispatch(
      setError(error.response?.data?.message || "Failed to create Product")
    );
  }
};

export const updateProduct =
  (id, brand, name, category, stock, price, productIsNew, description) =>
  async (dispatch) => {
    try {
      const adminInfo = JSON.parse(sessionStorage.getItem("adminInfo"));
      if (!adminInfo || !adminInfo.token) {
        throw new Error("No token, not authorized");
      }

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${adminInfo.token}`,
        },
      };

      const { data } = await axios.put(
        `${API_URL}/${id}`,
        { brand, name, category, stock, price, productIsNew, description },
        config
      );
    } catch (error) {
      console.error("Error updating product: ", error);
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
    const { data } = await axios.get(`${API_URL}/${id}`);
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
        `${API_URL}/reviews/${productId}`,
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

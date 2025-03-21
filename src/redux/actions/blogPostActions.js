import axios from "axios";
import {
  setLoading,
  setError,
  setBlogPosts,
  resetError,
  setSingleBlogPost,
} from "../slices/blogPost.js";
import { API_URL } from "../../components/constant.js";
const Base_URL = `${API_URL}/blog-posts`;

export const fetchBlogPosts = () => async (dispatch) => {
  dispatch(setLoading());
  try {
    const { data } = await axios.get(`${Base_URL}/blogs`);
    dispatch(setBlogPosts(data));
  } catch (error) {
    dispatch(
      setError(error.response?.data?.message || "Failed to fetch blogs")
    );
  }
};

export const fetchSingleBlogPost = (id) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const { data } = await axios.get(`${Base_URL}/${id}`);
    dispatch(setSingleBlogPost(data));
  } catch (error) {
    dispatch(
      setError(
        error.response?.data?.message ||
          error.message ||
          "An error has occurred. Please try again later."
      )
    );
  }
};

export const resetBlogError = () => async (dispatch) => {
  dispatch(resetError());
};

import axios from "axios";
import {
  setLoading,
  setError,
  setBlogPosts,
  resetError,
  setBlogUpdateFlag,
  setSingleBlogPost,
  blogPostCreatedSuccess,
} from "../slices/blogPost.js";

const API_URL = "https://mphysiotech-backend.onrender.com/api/blog-posts";

export const fetchBlogPosts = () => async (dispatch) => {
  dispatch(setLoading());
  try {
    const { data } = await axios.get(`${API_URL}/blogs`);
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
    const { data } = await axios.get(`${API_URL}/${id}`);
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

export const createBlogPost = (newPost) => async (dispatch) => {
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

    dispatch(blogPostCreatedSuccess(data));
  } catch (error) {
    dispatch(
      setError(error.response?.data?.message || "Failed to create blog post")
    );
  }
};

export const updateBlogPost =
  (id, title, contentOne, contentTwo) => async (dispatch) => {
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
        { title, contentOne, contentTwo },
        config
      );

      dispatch({
        type: "UPDATE_BLOG_POST_SUCCESS",
        payload: data,
      });
    } catch (error) {
      dispatch(
        setError(error.response?.data?.message || "Failed to update blog post")
      );
    }
  };

export const deleteBlogPost = (id) => async (dispatch) => {
  const adminInfo = JSON.parse(sessionStorage.getItem("adminInfo"));

  try {
    if (!adminInfo || !adminInfo.token) {
      throw new Error("Not authorized as admin");
    }

    const config = {
      headers: {
        Authorization: `Bearer ${adminInfo.token}`,
      },
    };

    const { data } = await axios.delete(`${API_URL}/${id}`, config);
    dispatch(setBlogPosts(data));
    dispatch(setBlogUpdateFlag());
    dispatch(resetError());
  } catch (error) {
    dispatch(
      setError(error.response?.data?.message || "Failed to delete blog post")
    );
  }
};

export const resetBlogError = () => async (dispatch) => {
  dispatch(resetError());
};

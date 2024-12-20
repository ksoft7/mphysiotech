import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  blogPosts: [],
  blogPost: null,
  loading: false,
  error: null,
  blogPostCreated: false,
  blogPostUpdated: false,
  blogPostRemoved: false,
  updateButtonLoading: false,
  removeButtonLoading: false,
  reviewed: false,
  status: null, // Add a 'status' key if needed (you were already setting it)
};

const blogPostSlice = createSlice({
  name: "blogPosts",
  initialState,
  reducers: {
    setLoading: (state, { payload }) => {
      state.loading = payload;
    },
    setError: (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    },
    resetState: (state) => {
      state.error = null;
      state.blogPostCreated = false;
      state.blogPostRemoved = false;
      state.blogPostUpdated = false;
      state.updateButtonLoading = false;
      state.removeButtonLoading = false;
      state.loading = false;
      state.status = null; // Reset status if needed
    },
    resetError: (state) => {
      state.error = null;
      state.reviewed = false;
      state.blogUpdate = false;
      state.reviewRemoval = false;
    },
    setBlogPosts: (state, { payload }) => {
      state.blogPosts = payload || []; // Ensure blogPosts is always an array
      state.loading = false;
    },
    setSingleBlogPost: (state, { payload }) => {
      state.blogPost = payload || null; // Ensure blogPost is not undefined
      state.loading = false;
    },
    setBlogPost: (state, { payload }) => {
      state.blogPost = payload || null; // Handle case where payload may be undefined
      state.loading = false;
      state.error = null;
    },
    blogPostCreatedSuccess: (state, { payload }) => {
      state.blogPosts.push(payload); // Assuming payload is a blog post
      state.blogPostCreated = true;
      state.loading = false;
    },
    blogPostUpdatedSuccess: (state, { payload }) => {
      const index = state.blogPosts.findIndex(
        (post) => post._id === payload._id
      );
      if (index !== -1) {
        state.blogPosts[index] = payload;
      }
      state.blogPostUpdated = true;
      state.updateButtonLoading = false;
    },
    blogPostRemovedSuccess: (state, { payload }) => {
      state.blogPosts = state.blogPosts.filter((post) => post._id !== payload);
      state.blogPostRemoved = true;
      state.removeButtonLoading = false;
    },
    blogPostCreated: (state, { payload }) => {
      state.blogPostCreated = payload || false; // Ensure it's not undefined
      state.updateButtonLoading = false;
      state.loading = false;
      state.error = null;
    },
    setUpdateButtonLoading: (state, { payload }) => {
      state.updateButtonLoading = payload;
      state.loading = false;
      state.error = null;
    },
    setStatus: (state, { payload }) => {
      state.status = payload || null; // Ensure status is not undefined
    },
    setRemoveButtonLoading: (state, { payload }) => {
      state.removeButtonLoading = payload;
      state.loading = false;
      state.error = null;
    },
    setBlogUpdateFlag: (state) => {
      state.productUpdate = true;
      state.loading = false;
    },
  },
});

export const {
  setLoading,
  setError,
  resetState,
  setBlogPosts,
  setBlogPost,
  setSingleBlogPost,
  blogPostCreatedSuccess,
  blogPostUpdatedSuccess,
  blogPostCreated,
  blogPostRemovedSuccess,
  setStatus,
  setRemoveButtonLoading,
  setUpdateButtonLoading,
  setBlogUpdateFlag,
  resetError,
} = blogPostSlice.actions;

export default blogPostSlice.reducer;

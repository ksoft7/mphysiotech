import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  fetchBlogPosts,
  updateBlogPost,
} from "../../redux/actions/blogPostActions";
import { toast } from "react-toastify";
import Spinner from "../../components/reusables/Spinner";

function EditBlog() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const {
    blogPosts,
    loading: blogLoading,
    error,
  } = useSelector((state) => state.blogPosts);

  const [blogDetails, setBlogDetails] = useState({
    title: "",
    contentOne: "",
    contentTwo: "",
  });

  const [isLoadingDetails, setIsLoadingDetails] = useState(true); // Local loading state

  useEffect(() => {
    if (!blogPosts || blogPosts.length === 0) {
      dispatch(fetchBlogPosts());
    } else {
      const blog = blogPosts.find((post) => post._id === id);
      if (blog) {
        setBlogDetails({
          title: blog.title,
          contentOne: blog.contentOne,
          contentTwo: blog.contentTwo,
        });
        setIsLoadingDetails(false);
      }
    }
  }, [dispatch, blogPosts, id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { title, contentOne, contentTwo } = blogDetails;

    try {
      await dispatch(updateBlogPost(id, title, contentOne, contentTwo));
      toast.success("Blog updated successfully!");
      navigate("/BlogTab");
    } catch (err) {
      toast.error("Failed to update blog!");
      console.error(err);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlogDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  if (blogLoading || isLoadingDetails) {
    return <Spinner />;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="blog-edit-con">
      <h1>Edit Blog</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Title"
          value={blogDetails.title}
          onChange={handleChange}
        />
        <textarea
          name="contentOne"
          id="contentOne"
          placeholder="Content One"
          value={blogDetails.contentOne}
          onChange={handleChange}
        />
        <textarea
          name="contentTwo"
          id="contentTwo"
          placeholder="Content Two"
          value={blogDetails.contentTwo}
          onChange={handleChange}
        />
        <button type="submit">Update Blog</button>
      </form>
    </div>
  );
}

export default EditBlog;

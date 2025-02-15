import React from "react";
import "../App.css";
import { BsEmojiSmile } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import "../styles/blog_page.css";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchSingleBlogPost } from "../redux/actions/blogPostActions";

function BlogInnerdetails() {
  const { id } = useParams();
  const blogPostInfo = useSelector((state) => state.blogPosts);
  const { blogPost, loading, error } = blogPostInfo;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSingleBlogPost(id));
  }, [id]);
  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : error ? (
        <p>sorry</p>
      ) : (
        blogPost && (
          <section className="blog_inner">
            <div className="title_heading">
              <div></div>
              <h1> {blogPost.title}</h1>
              <p>By {blogPost.author}</p>
            </div>
            <figure>
              <img src={`http://localhost:5000${blogPost.image}`} alt="title" />
            </figure>

            <p>{blogPost.content}</p>

            <div className="message_container"></div>

            <form action="#">
              <button>
                <span>
                  <BsEmojiSmile className="icon" />
                </span>
              </button>
              <input type="text" placeholder="Add a comment" />
              <button type="submit">
                <FaTelegramPlane className="icon" />
              </button>
            </form>
          </section>
        )
      )}
    </>
  );
}

export default BlogInnerdetails;

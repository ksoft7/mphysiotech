import React from "react";
import "../App.css";
import { BsEmojiSmile } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { FaTags } from "react-icons/fa6";
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
          <>
            <section className="hero_section">
              <h1>Blog Page</h1>
              <p>
                Homepage/<span>Blog Page</span>
              </p>
            </section>
            <section className="blog_inner">
              <figure>
                <img src={blogPost.image} alt="title" />
              </figure>
              <div className="detailBlog">
                <span>
                  <FaCalendarAlt className="icon" />
                  <h4>
                    {new Date(blogPost.createdAt).toLocaleDateString("en-GB", {
                      month: "long",
                      day: "2-digit",
                      year: "numeric",
                    })}
                  </h4>
                </span>
                <span>
                  <FaTags className="icon" />
                  <h4>{blogPost.tag[0]}</h4>
                </span>
              </div>
              <div className="title_heading">
                <h1> {blogPost.title}</h1>
                <p>By {blogPost.author}</p>
              </div>

              <p>{blogPost.content}</p>

              {/* <h1>Summary</h1>
              <p style={{ marginTop: "1rem" }}>{blogPost.description}</p> */}

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
              <div className="message_container"></div>
            </section>
          </>
        )
      )}
    </>
  );
}

export default BlogInnerdetails;

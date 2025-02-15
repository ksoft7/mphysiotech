import React from "react";
import "../styles/blog_page.css";
import "../App.css";
import Footer from "../components/reusables/Footer";
import { IoMdTime } from "react-icons/io";
import { BiMessageDetail } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchBlogPosts } from "../redux/actions/blogPostActions";
import Spinner from "../components/reusables/Spinner";

function BlogPage() {
  const dispatch = useDispatch();
  const { blogPosts, loading, error } = useSelector((state) => state.blogPosts);

  useEffect(() => {
    dispatch(fetchBlogPosts());
  }, [dispatch]);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <p>{error}</p>;
  }
  return (
    <>
      <section className="hero_section">
        <h1>Blog & Article</h1>
        <p>
          Homepage/<span>Blog & Article</span>
        </p>
      </section>

      {loading ? (
        <Spinner />
      ) : error ? (
        <p>{error}</p>
      ) : (
        <section className="blog_card_section">
          <div className="blog_headings">
            <h6>. Blog & Article</h6>
            <h3>Insights into Senior Care</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Doloribus commodi reiciendis error voluptates, Lorem ipsum
            </p>
          </div>
          <article style={{ display: "flex" }}>
            {blogPosts.map((post) => (
              <div key={post._id} className="blog_card color_bgcard">
                <div className="img_content">
                  <img
                    src={`http://localhost:5000${post.image}`}
                    alt={post.title}
                    loading={<Spinner />}
                  />
                </div>
                <div className="blog_text">
                  <h3>{post.title}</h3>
                  <p>
                    {post.description}
                    <Link to={`/blog/${post._id}`}>read more...</Link>
                  </p>
                  <span>
                    <h4>
                      <IoMdTime className="icon" />{" "}
                      {new Date(post.createdAt).toDateString()}
                    </h4>
                    <aside></aside>
                    <h4>
                      <BiMessageDetail className="icon" /> 2 comment
                    </h4>
                  </span>
                </div>
              </div>
            ))}
          </article>
        </section>
      )}

      <Footer />
    </>
  );
}

export default BlogPage;

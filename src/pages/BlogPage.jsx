import React from "react";
import "../styles/blog_page.css";
import "../App.css";
import Footer from "../components/reusables/Footer";
import Header from "../components/reusables/Header";
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
      <Header />
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
                    src={post.image}
                    alt={post.title}
                    loading={<Spinner />}
                  />
                </div>
                <div className="blog_text">
                  <h3>{post.title}</h3>
                  <p>
                    {post.contentTwo}
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

//    <div className="blog_card color_bgcard">
{
  /* <div className="img_content"></div>
<div className="blog_text">
  <h3>
    Senior Care Technology: Innovations to Enhance Quality of Life
  </h3>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et.
  </p>
  <span>
    <h4>
      <IoMdTime className="icon" /> Feburary 30, 2023
    </h4>
    <aside></aside>
    <h4>
      <BiMessageDetail className="icon" /> 2 comment
    </h4>
  </span>
</div>
</div>
<div className="blog_card color_bgcard">
<div className="img_content"></div>
<div className="blog_text">
  <h3>
    Senior Care Technology: Innovations to Enhance Quality of Life
  </h3>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et.
  </p>
  <span>
    <h4>
      <IoMdTime className="icon" /> Feburary 30, 2023
    </h4>
    <aside></aside>
    <h4>
      <BiMessageDetail className="icon" /> 2 comment
    </h4>
  </span>
</div>
</div>
<div className="blog_card color_bgcard">
<div className="img_content"></div>
<div className="blog_text">
  <h3>
    Senior Care Technology: Innovations to Enhance Quality of Life
  </h3>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et.
  </p>
  <span>
    <h4>
      <IoMdTime className="icon" /> Feburary 30, 2023
    </h4>
    <aside></aside>
    <h4>
      <BiMessageDetail className="icon" /> 2 comment
    </h4>
  </span>
</div>
</div>
<div className="blog_card color_bgcard">
<div className="img_content"></div>
<div className="blog_text">
  <h3>
    Senior Care Technology: Innovations to Enhance Quality of Life
  </h3>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et.
  </p>
  <span>
    <h4>
      <IoMdTime className="icon" /> Feburary 30, 2023
    </h4>
    <aside></aside>
    <h4>
      <BiMessageDetail className="icon" /> 2 comment
    </h4>
  </span>
</div>
</div>
<div className="blog_card color_bgcard">
<div className="img_content"></div>
<div className="blog_text">
  <h3>
    Senior Care Technology: Innovations to Enhance Quality of Life
  </h3>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et.
  </p>
  <span>
    <h4>
      <IoMdTime className="icon" /> Feburary 30, 2023
    </h4>
    <aside></aside>
    <h4>
      <BiMessageDetail className="icon" /> 2 comment
    </h4>
  </span>
</div>
</div> */
}

export default BlogPage;
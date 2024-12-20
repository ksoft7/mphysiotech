import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchBlogPosts,
  resetBlogError,
} from "../../redux/actions/blogPostActions";
import BlogTable from "./BlogTable";
import Fixbar from "../../components/try.fixbar";
import { LuMenu } from "react-icons/lu";
import Profile from "../../assets/imgs/womanprofile.jpg";
import { useFixedBar } from "../../Context/Fixcontext";
import { IoSearchOutline } from "react-icons/io5";
import { BellIcon } from "@heroicons/react/24/solid";
import Spinner from "../../components/reusables/Spinner";
import { Link } from "react-router-dom";
import "../../App.css";

function BlogTab() {
  const { toggleWidth } = useFixedBar();
  const [isVisible, setIsVisible] = useState(true);
  const dispatch = useDispatch();
  const { error, loading } = useSelector((state) => state.admin);
  const { blogPosts, blogUpdate } = useSelector((state) => state.blogPosts);
  useEffect(() => {
    dispatch(fetchBlogPosts());
  }, [dispatch]);
  if (loading) {
    return (<Spinner />), (<h1>Content loading</h1>);
  }
  return (
    <>
      <section className="trydashboard_wrapper">
        <Fixbar />
        <main className="Dashboard-contents">
          <nav className="dashNav">
            <div className="icons-in">
              <LuMenu
                cursor={"pointer"}
                onClick={() => {
                  toggleWidth();
                  setIsVisible(true);
                }}
                className="icon"
              />
              {isVisible && (
                <LuMenu
                  cursor={"pointer"}
                  onClick={() => {
                    toggleWidth();
                    setIsVisible(false);
                  }}
                  color="#fff"
                  className="icon3"
                />
              )}
              <form action="#">
                <IoSearchOutline className="icon2" />
                <input type="text" />
              </form>
            </div>
            <span className="profile">
              <BellIcon className="iconss2" />
              <img src={Profile} alt="Woman profile" />
            </span>
          </nav>
          {error && (
            <div
              style={{
                backgroundColor: "#f8d7da",
                color: "#842029",
                padding: "10px",
                borderRadius: "4px",
                marginBottom: "20px",
              }}
            >
              <strong>Oops!</strong> {error}
            </div>
          )}
          {loading ? (
            <Spinner />
          ) : (
            <>
              <div className="newblosty">
                <Link to={"/Post-blog-Tab"}>
                  <button>Post New Blog</button>
                </Link>
              </div>
              <section className="productsty2">
                {blogPosts.length > 0 &&
                  blogPosts.map((blog) => (
                    <BlogTable key={blog._id} blog={blog} />
                  ))}
              </section>
            </>
          )}
        </main>
      </section>
    </>
  );
}

export default BlogTab;

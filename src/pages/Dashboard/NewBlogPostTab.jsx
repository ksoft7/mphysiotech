import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import ImageUpload from "../../components/ImageUpload";
import { toast } from "react-toastify";
import { createBlogPost } from "../../redux/actions/blogPostActions";
import Spinner from "../../components/reusables/Spinner";
import Fixbars from "../../components/try.fixbar";
import "../../styles/trydasboard.css";
import { BellIcon } from "@heroicons/react/24/solid";
import { useFixedBar } from "../../Context/Fixcontext";
import { LuMenu } from "react-icons/lu";
import Profile from "../../assets/imgs/womanprofile.jpg";
import { IoSearchOutline } from "react-icons/io5";

function NewPostTab() {
  const { toggleWidth } = useFixedBar();
  const [isVisible, setIsVisible] = useState(true);
  const dispatch = useDispatch();
  const [postContentOne, setPostContentOne] = useState("");
  const [postContentTwo, setPostContentTwo] = useState("");
  const [postTitle, setPostTitle] = useState("");
  const [postImage, setPostImage] = useState(null);

  const blogPostInfo = useSelector((state) => state.blogPosts);
  const { blogPostCreated, error, updateButtonLoading } = blogPostInfo;
  useEffect(() => {
    if (blogPostCreated) {
      toast.success("Blog post created successfully!");
      setPostTitle("");
      setPostContentOne("");
      setPostContentTwo("");
      setPostImage(null);
    }

    if (error) {
      toast.error(error);
    }
  }, [blogPostCreated, error]);

  const handlePublishPost = () => {
    if (!postImage || !postContentOne || !postContentTwo || !postTitle) {
      toast.error("Please fill in all fields and upload an image.");
      return;
    }

    dispatch(
      createBlogPost({
        image: postImage,
        contentOne: postContentOne,
        contentTwo: postContentTwo,
        title: postTitle,
      })
    );
  };

  return (
    <section className="trydashboard_wrapper">
      <Fixbars />
      <main className="Dashboard-contents">
        <nav className="dashNav">
          <div className="icons-in">
            <LuMenu
              cursor="pointer"
              onClick={() => {
                toggleWidth();
                setIsVisible(true);
              }}
              className="icon"
            />
            {isVisible && (
              <LuMenu
                cursor="pointer"
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

        <section className="postblog_sty">
          <h1>Create New Blog</h1>
          <article>
            <input
              type="text"
              placeholder="Title"
              value={postTitle}
              onChange={(e) => setPostTitle(e.target.value)}
            />
            <textarea
              placeholder="Blog Content One"
              value={postContentOne}
              onChange={(e) => setPostContentOne(e.target.value)}
            />
            <textarea
              placeholder="Blog Content Two"
              value={postContentTwo}
              onChange={(e) => setPostContentTwo(e.target.value)}
            />
            <ImageUpload setPostImage={setPostImage} />
            {postImage && <img src={postImage} alt="Blog" />}

            {/* Display error message */}
            {error && (
              <div className="error-message">
                <p style={{ color: "red" }}>{error}</p>
              </div>
            )}

            <button
              disabled={updateButtonLoading}
              onClick={handlePublishPost}
              className="publish-btn"
            >
              {updateButtonLoading ? <Spinner /> : "Publish Post"}
            </button>
          </article>
        </section>
      </main>
    </section>
  );
}

export default NewPostTab;

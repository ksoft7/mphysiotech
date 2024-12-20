import React, { useRef, useState } from "react";
import "../App.css";
import { IoPlay } from "react-icons/io5";
import Video from "../assets/cute.mp4";

const VideoPlayer = () => {
  const videoRef = useRef(null);
  const [showPlayButton, setShowPlayButton] = useState(true);

  const handlePlay = () => {
    videoRef.current.play();
    setShowPlayButton(false);
  };

  const handleVideoClick = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setShowPlayButton(false);
    } else {
      videoRef.current.pause();
      setShowPlayButton(true);
    }
  };

  return (
    <div className="videosty">
      <figure>
        <video ref={videoRef} onClick={handleVideoClick} loop>
          <source src={Video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {showPlayButton && (
          <span onClick={handlePlay}>
            <IoPlay className="icon" />
          </span>
        )}
      </figure>
      <div className="trustcen">
        <h3>26+</h3>
        <h6>Years Experience</h6>
      </div>
    </div>
  );
};

export default VideoPlayer;

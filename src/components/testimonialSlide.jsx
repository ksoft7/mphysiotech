import React, { useState, useEffect } from "react";
import { BiCircle } from "react-icons/bi";
import Cutedoc from "../assets/imgs/cutedoc.jpeg";
import "../App.css";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = 3;
  const slideDelay = 5000;

  const content = [
    <article className="test-slide-contents">
      <span>
        <h6>. Testimonials</h6>
        <h3>Hear What Others Have to Say </h3>
      </span>
      <p>
        “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.”
      </p>
      <div>
        <figure>
          <img src={Cutedoc} alt="testimonial 1" />
        </figure>
        <span>
          <h5>Emily Shanon</h5>
          <h6>Reviewer</h6>
        </span>
      </div>
    </article>,
    <article className="test-slide-contents">
      <span>
        <h6>. Testimonials</h6>
        <h3>Hear What Others Have to Say </h3>
      </span>
      <p>
        “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.”
      </p>
      <div>
        <figure>
          <img src={Cutedoc} alt="testimonial 2" />
        </figure>
        <span>
          <h5>Emily Shanon</h5>
          <h6>Reviewer</h6>
        </span>
      </div>
    </article>,
    <article className="test-slide-contents">
      <span>
        <h6>. Testimonials</h6>
        <h3>Hear What Others Have to Say </h3>
      </span>
      <p>
        “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.”
      </p>
      <div>
        <figure>
          <img src={Cutedoc} alt="testimonial 3" />
        </figure>
        <span>
          <h5>Emily Shanon</h5>
          <h6>Reviewer</h6>
        </span>
      </div>
    </article>,
  ];

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    };

    const timer = setTimeout(nextSlide, slideDelay);

    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <section className="test-slidecon">
      <div className="slide-wrapper">
        <div
          className="slide-container"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            transition: "transform 0.5s ease-in-out",
          }}
        >
          {content.map((slide, index) => (
            <div key={index} className="slide-item">
              {slide}
            </div>
          ))}
        </div>
      </div>

      <div className="test-btn">
        {content.map((_, index) => (
          <button
            key={index}
            onClick={() => handleClick(index)}
            style={{
              backgroundColor: index === currentIndex ? "#07A4B5" : "#ECF3F4",
              color: index === currentIndex ? "#07A4B5" : "#ECF3F4",
              fontSize: "1rem",
              cursor: "pointer",
            }}
          >
            <BiCircle />
          </button>
        ))}
      </div>
    </section>
  );
};

export default Slider;

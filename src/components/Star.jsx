import React from "react";
import { FaStar } from "react-icons/fa6";
// import { FaStarHalf } from "react-icons/fa6";

const Star = ({ rating = 4, star = 2 }) => (
  <FaStar color={rating >= star || rating === 0 ? "yellow" : "gray"} />
);

export default Star;

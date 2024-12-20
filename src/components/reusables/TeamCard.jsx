import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import style from "../../styles/team-card.module.css";
function TeamCard() {
  return (
    <section className={style.teamCard}>
      <figure></figure>
      <div>
        <span>
          <FaLinkedinIn
            style={{ width: "20.93px", height: "20.83px", color: "#07a4b5" }}
          />
          <FaTwitter
            style={{ width: "20.93px", height: "20.83px", color: "#07a4b5" }}
          />
          <RiInstagramFill
            style={{ width: "20.93px", height: "20.83px", color: "#07a4b5" }}
          />
        </span>
        <h5>Emma johnson</h5>
        <h6>Senior Care Development</h6>
      </div>
    </section>
  );
}

export default TeamCard;

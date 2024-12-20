import React from "react";
import "../App.css";
import TeamCard from "../components/reusables/TeamCard.jsx";
import Journey from "../components/reusables/Journey.jsx";
import Footer from "../components/reusables/Footer.jsx";
import Logoimg1 from "../assets/imgs/logoipsum-1.png";
import Logoimg2 from "../assets/imgs/logoipsum-2.png";
import Logoimg3 from "../assets/imgs/logoipsum-3.png";
import Logoimg4 from "../assets/imgs/logoipsum-4.png";
import Logoimg5 from "../assets/imgs/logoipsum-5.png";
import "../styles/ourteam.css";
function OurTeam() {
  return (
    <>
      <section className="hero_section">
        <h1>Our Team</h1>
        <p>
          Homepage/<span>Our Team</span>
        </p>
      </section>

      <section className="team_cards_sec">
        <div className="headings">
          <h6>. Our Team</h6>
          <h3>Meet Our Dedicated Senior Care Experts</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <article className="team_cards_sec-card">
          <TeamCard />
          <TeamCard />
          <TeamCard />
          <TeamCard />
          <TeamCard />
          <TeamCard />
        </article>
      </section>

      <Journey />
      <section className="page_links">
        <h5>Trusted By The 1000+ Modern Teams And Companies</h5>
        <figure>
          <img src={Logoimg1} alt="logoisum" />
          <img src={Logoimg2} alt="logoisum" />
          <img src={Logoimg3} alt="logoisum" />
          <img src={Logoimg4} alt="logoisum" />
          <img src={Logoimg5} alt="logoisum" />
        </figure>
      </section>
      <Footer />
    </>
  );
}

export default OurTeam;

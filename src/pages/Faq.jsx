import React from "react";
import "../App.css";
import { useState } from "react";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import Line from "../assets/imgs/Line2.png";
import Logoimg1 from "../assets/imgs/logoipsum-1.png";
import Logoimg2 from "../assets/imgs/logoipsum-2.png";
import Logoimg3 from "../assets/imgs/logoipsum-3.png";
import Logoimg4 from "../assets/imgs/logoipsum-4.png";
import Logoimg5 from "../assets/imgs/logoipsum-5.png";
import Footer from "../components/reusables/Footer.jsx";
import "../styles/faq.css";

function Faq() {
  const [openDropdowns, setOpenDropdowns] = useState({});

  const toggleDropdown = (id) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const faqItems = [
    { id: 1, question: "How long does the consultation process take?" },
    { id: 2, question: "Can services be customized to individual needs?" },
    { id: 3, question: "How can I find the right senior living option?" },
    { id: 4, question: "How can feedback or testimonials be provided?" },
  ];

  return (
    <>
      <section className="hero hero_section">
        <h1>Frequently Asked Questions</h1>
        <p>
          Homepage/<span>FAQ</span>
        </p>
      </section>
      <section className="section-cover">
        <div className="faq_headings">
          <h6>. FAQ</h6>
          <h3>Staying In Touch</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <section className="faq_ques">
          {faqItems.map((item) => (
            <article key={item.id}>
              <div
                className={`dropdown ${
                  openDropdowns[item.id] ? "show" : ""
                } faq_ques_item `}
              >
                {openDropdowns[item.id] ? (
                  <CiCircleMinus
                    cursor="pointer"
                    className="icon"
                    onClick={() => toggleDropdown(item.id)}
                  />
                ) : (
                  <CiCirclePlus
                    cursor="pointer"
                    className="icon"
                    onClick={() => toggleDropdown(item.id)}
                  />
                )}
                <span>
                  <h5>{item.question}</h5>
                  {openDropdowns[item.id] && (
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam.
                    </p>
                  )}
                </span>
              </div>
              <figure>
                <img src={Line} alt="" />
              </figure>
            </article>
          ))}
        </section>
      </section>

      <Footer />
    </>
  );
}

export default Faq;

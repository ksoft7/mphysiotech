import React from "react";
import "../../App.css";
import style from "../../styles/journey.module.css";
function Journey() {
  return (
    <section className={style.journey}>
      <h2>Start Your Journey to Better Senior Care Today!</h2>
      <p>
        Aliquam vestibulum morbi blandit cursus risus. Id interdum velit laoreet
        id donec ultrices tincidunt.
      </p>
      <span>
        <button className={style.btnSty2}>Call Us Now</button>
      </span>
    </section>
  );
}

export default Journey;

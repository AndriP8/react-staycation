import React from "react";
import Fade from "react-reveal/Fade";

export default function Controller(props) {
  return (
    <Fade>
      <section className="container">
        <div className="grid grid-cols-3 justify-center">
          <div className="col-start-2 mb-14 mx-auto">{props.children}</div>
        </div>
      </section>
    </Fade>
  );
}

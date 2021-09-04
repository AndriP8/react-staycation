import React from "react";
import Fade from "react-reveal/Fade";

import CompletedIlustration from "../../assets/images/completed.jpg";

export default function Completed() {
  return (
    <Fade>
      <div className="container mb-8 px-8 lg:px-36 md:px-32">
        <div className="grid grid-cols-12 text-center">
          <div className="col-start-5 col-end-9">
            <img src={CompletedIlustration} alt="Completed checkout apartmen" className="max-w-full h-auto" />
            <p className="text-gray-400 font-light">We will inform you via email later once the transaction has been accepted</p>
          </div>
        </div>
      </div>
    </Fade>
  );
}

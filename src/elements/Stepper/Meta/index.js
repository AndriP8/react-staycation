import React from "react";
import Fade from "react-reveal/Fade";

export default function Meta({ data, current }) {
  return (
    <Fade>
      <div className="text-center mb-7">
        <h1 className="text-4xl font-semibold text-gray-900">{data[current] && data[current].title}</h1>
        <p className="text-gray-400 font-light mt-1">{data[current] && data[current].description}</p>
      </div>
    </Fade>
  );
}

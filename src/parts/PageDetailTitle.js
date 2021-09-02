import React from "react";
import Fade from "react-reveal/Fade";

import Breadcrumb from "../elements/Breadcrumb";
export default function PageDetailTitle({ data, breadcrumb }) {
  return (
    <section className="container max-w-full py-12 px-8 lg:px-36 md:px-32">
      <Fade bottom>
        <div className="grid grid-cols-3 items-center">
          <div className="col">
            <Breadcrumb data={breadcrumb} />
          </div>
          <div className="col text-center">
            <h2 className="text-gray-900 font-semibold text-4xl py-1">{data.name}</h2>
            <span className="text-gray-400">
              {data.city}, {data.country}
            </span>
          </div>
          <div className="col"></div>
        </div>
      </Fade>
    </section>
  );
}

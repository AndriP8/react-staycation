import React from "react";
import Star from "../elements/Star";
import Button from "../elements/Button";

import Fade from "react-reveal/Fade";

import TestimonyAccent from "../assets/images/testimonial-landingpages-frame.jpg";

export default function Testimony({ data }) {
  return (
    <Fade bottom>
      <section className="container max-w-full px-8 lg:px-36 md:px-3">
        <div className="grid grid-cols-2">
          <div className="testimonial-hero">
            <img src={data.imageUrl} alt={data.name} className="absolute mt-9 ml-9 w-365 h-500 rounded-heroSwap" style={{ zIndex: 1 }} />
            <img src={TestimonyAccent} alt="Testimony Accent" className="w-365 h-500" />
          </div>
          <div className="testimonial-description py-20 -ml-16 text-gray-900">
            <h4 className="mb-10 text-2xl font-medium">{data.name}</h4>
            <Star value={data.rate} width={35} height={35} spacing={4} />
            <h2 className="my-2 text-3xl leading-10">{data.content}</h2>
            <h6 className="font-thin text-gray-400">
              {data.familyName}, {data.familyOccupation}
            </h6>
            <div className="my-12">
              <Button className="px-7 py-3" type="link" hasShadow isPrimary href={`/testimonial/${data._id}`}>
                Read Their Story
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Fade>
  );
}

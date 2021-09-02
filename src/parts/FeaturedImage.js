import React from "react";
import Fade from "react-reveal/Fade";

export default function FeaturedImage({ data }) {
  return (
    <section className="container max-w-full py-12 px-8 lg:px-36 md:px-32">
      <div className="grid grid-rows-2 grid-cols-2 gap-2">
        {data.map((item, index) => {
          return (
            <div key={`${index}`} className={`${index === 0 ? "row-span-2 h-500" : "row-span-1 h-245"}`}>
              <Fade bottom delay={300 * index}>
                <div className="h-full">
                  <figure className="img-wrapper object-cover h-full">
                    <img src={item.url} alt={item._id} className="h-inherit bg-cover" />
                  </figure>
                </div>
              </Fade>
            </div>
          );
        })}
      </div>
    </section>
  );
}

import React from "react";
import Button from "../elements/Button";

import Fade from "react-reveal/Fade";

export default function Category({ data }) {
  return data.map((category, index1) => {
    return (
      <section className="container max-w-full my-16 px-8 lg:px-36 md:px-32" key={`category-${index1}`}>
        <Fade bottom>
          <h4 className="mb-4 font-medium text-2xl text-gray-900">{category.name}</h4>
          <div className="container-grid grid grid-cols-4 grid-rows-1 gap-7">
            {category.items.length === 0 ? (
              <div className="grid col-auto text-center">There is no property at this category</div>
            ) : (
              category.items.map((item, index2) => {
                return (
                  <Fade bottom delay={300 * index2}>
                    <div className="card relative" key={`category-${index1}-item-${index2}`}>
                      {item.isPopular && (
                        <div className="tag z-10 text-sm bg-tagPrice py-1 px-6 absolute top-0 right-0 text-white h-7 rounded-tr-2xl rounded-bl-2xl">
                          Popular <span className="font-thin">Choice</span>
                        </div>
                      )}
                      <figure className="img-wrapper" style={{ height: 180 }}>
                        <img src={item.imageUrl} alt={item.name} className="bg-cover h-inherit" />
                      </figure>
                      <Button type="link" href={`/properties/${item._id}`} className="block text-gray-900 mt-4">
                        <h4 className="text-xl">{item.name}</h4>
                      </Button>
                      <span className="text-gray-400 font-light">
                        {item.city}, {item.country}
                      </span>
                    </div>
                  </Fade>
                );
              })
            )}
          </div>
        </Fade>
      </section>
    );
  });
}

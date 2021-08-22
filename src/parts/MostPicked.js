import React from "react";

import Button from "../elements/Button";

export default function MostPicked(props) {
  return (
    <section className="container mt-16 max-w-full px-8 lg:px-36 md:px-32" ref={props.refMostPicked}>
      <h4 className="mb-5 text-2xl text-gray-900 font-medium">Most Picked</h4>
      <div className="grid grid-cols-3 grid-rows-2 gap-7">
        {props.data.map((item, index) => {
          return (
            <div key={`mostpicked-${index}`} className={`${index === 0 ? " row-span-2 h-460" : "row-span-1 h-215"}`}>
              <div className="card-featured h-full relative cursor-pointer">
                <div className="tag z-10 text-sm bg-tagPrice py-1 px-6 absolute top-0 right-0 text-white h-7 rounded-tr-2xl rounded-bl-2xl">
                  ${item.price}
                  <span className="font-thin">per {item.unit}</span>
                </div>
                <figure className="img-wrapper h-full object-cover">
                  <img src={item.imageUrl} alt={item.name} className="h-inherit" />
                </figure>
                <div className="meta-wrapper text-white absolute bottom-4 left-4">
                  <Button type="link" className="block " href={`/properties/${item._id}`}>
                    <h5 className="text-xl">{item.name}</h5>
                  </Button>
                  <span>
                    {item.city}, {item.country}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

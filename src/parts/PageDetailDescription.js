import React from "react";
import ReactHtmlParser from "react-html-parser";

export default function PageDetailDescription({ data }) {
  return (
    <main>
      <h4 className="text-gray-900 text-xl pb-2">About the place</h4>
      {ReactHtmlParser(data.description)}
      <div className="grid grid-cols-4 grid-rows-2 my-8">
        {data.features.map((feature, index) => {
          return (
            <div key={`feature-${index}`} className="mb-5">
              <img src={feature.imageUrl} alt={feature.name} width="38" className="block mb-3" />
              <span>{feature.qty}</span> <span className="text-gray-400 font-light">{feature.name}</span>
            </div>
          );
        })}
      </div>
    </main>
  );
}

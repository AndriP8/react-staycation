import React from "react";

import ImageHero from "../assets/images/img-hero.jpg";
import ImageHeroFrame from "../assets/images/img-hero-frame.jpg";
import IconCities from "../assets/images/icons/icon_cities.svg";
import IconTraveler from "../assets/images/icons/icon_traveler.svg";
import IconTreasure from "../assets/images/icons/icon_treasure.svg";
import Button from "../elements/Button";

export default function Hero(props) {
  function showMostPicked() {
    window.scrollTo({
      top: props.refMostPicked.current.offsetTop - 30,
      behavior: "smooth",
    });
  }

  return (
    <section className="container pt-16 max-w-full px-8 lg:px-36 md:px-32">
      <div className="grid grid-cols-2">
        <div className="mr-12" style={{ MaxWidth: 422 }}>
          <h2 className="font-bold text-gray-900 text-header">
            Forget Busy Work,
            <br /> Start Next Vacation
          </h2>
          <p className="text-gray-400 font-thin w-3/4 my-4">We provide what you need to enjoy your holiday with family. Time to make another memorable moments.</p>
          <Button className="btn-primary" hasShadow isPrimary onClick={showMostPicked}>
            Show Me Now
          </Button>
          <div className="grid grid-cols-3 mt-14">
            <div className="icon-hero">
              <img width="36" height="36" src={IconTraveler} alt={`${props.data.travelers} Travelers`} />
              <h6 className="mt-4 text-gray-900 text font-medium">
                {props.data.travelers}
                <span className="text-gray-400 leading-none"> travelers</span>
              </h6>
            </div>
            <div className="icon-hero ml-4">
              <img width="36" height="36" src={IconTreasure} alt={`${props.data.treasures} Treasures`} />
              <h6 className="mt-4 text-gray-900 font-medium">
                {props.data.treasures}
                <span className="text-gray-400 leading-none"> treasures</span>
              </h6>
            </div>
            <div className="icon-hero ml-4">
              <img width="36" height="36" src={IconCities} alt={`${props.data.cities} Cities`} />
              <h6 className="mt-4 text-gray-900 font-medium">
                {props.data.cities}
                <span className="text-gray-400 leading-none"> cities</span>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

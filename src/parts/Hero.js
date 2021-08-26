import React from "react";
import NumberFormat from "react-number-format";

import ImageHero from "../assets/images/img-hero.jpg";
import ImageHeroFrame from "../assets/images/img-hero-frame.jpg";
import IconCities from "../assets/images/icons/icon_cities.svg";
import IconTraveler from "../assets/images/icons/icon_traveler.svg";
import IconTreasure from "../assets/images/icons/icon_treasure.svg";
import Button from "../elements/Button";

import Fade from "react-reveal/Fade";

export default function Hero(props) {
  function showMostPicked() {
    window.scrollTo({
      top: props.refMostPicked.current.offsetTop - 30,
      behavior: "smooth",
    });
  }

  return (
    <Fade bottom>
      <section className="container pt-16 max-w-full px-8 lg:px-36 md:px-32">
        <div className="grid grid-cols-2">
          <div className="mr-12" style={{ MaxWidth: 422 }}>
            <h2 className="font-bold text-gray-900 text-header">
              Forget Busy Work,
              <br /> Start Next Vacation
            </h2>
            <p className="text-gray-400 font-thin w-3/4 my-4">We provide what you need to enjoy your holiday with family. Time to make another memorable moments.</p>
            <Button className="btn-primary shadow-btn mt-3" hasShadow isPrimary onClick={showMostPicked}>
              Show Me Now
            </Button>
            <div className="grid grid-cols-3 mt-20">
              <div className="icon-hero">
                <img width="36" height="36" src={IconTraveler} alt={`${props.data.travelers} Travelers`} />
                <h6 className="mt-4 text-gray-900 font-medium">
                  <NumberFormat thousandsGroupStyle="thousand" value={props.data.travelers} decimalSeparator="." thousandSeparator={true} className="font-medium w-14" />
                  <span className="text-gray-400 leading-none"> travelers</span>
                </h6>
              </div>
              <div className="icon-hero ml-4">
                <img width="36" height="36" src={IconTreasure} alt={`${props.data.treasures} Treasures`} />
                <h6 className="mt-4 text-gray-900 font-medium">
                  <NumberFormat thousandsGroupStyle="thousand" value={props.data.treasures} decimalSeparator="." thousandSeparator={true} className="font-medium w-8" />
                  <span className="text-gray-400 leading-none"> treasures</span>
                </h6>
              </div>
              <div className="icon-hero ml-4">
                <img width="36" height="36" src={IconCities} alt={`${props.data.cities} Cities`} />
                <h6 className="mt-4 text-gray-900 font-medium">
                  <NumberFormat thousandsGroupStyle="thousand" value={props.data.cities} decimalSeparator="." thousandSeparator={true} className="font-medium w-11" />
                  <span className="text-gray-400 leading-none"> cities</span>
                </h6>
              </div>
            </div>
          </div>
          <div className="img-hero">
            <img src={ImageHero} alt="room with couches" className="absolute w-440 h-370 ml-2 mt-2 rounded-hero" style={{ zIndex: 1 }} />
            <img src={ImageHeroFrame} alt="frame room with couches" className="absolute w-440 mt-9 ml-9 h-370" />
          </div>
        </div>
      </section>
    </Fade>
  );
}

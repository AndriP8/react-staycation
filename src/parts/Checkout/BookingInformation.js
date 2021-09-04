import React from "react";
import Fade from "react-reveal/Fade";
import { InputText } from "../../elements/Form";

export default function BookingInformation(props) {
  const { data, ItemDetails, checkout } = props;
  return (
    <div className="container my-16 px-8 lg:px-36 md:px-32">
      <div className="grid grid-cols-12 grid-rows-1 items-center text-gray-900">
        <Fade delay={300}>
          <div className="card col-start-1 col-end-6">
            <figure className="image-wrapper h-270">
              <img src={ItemDetails.imageUrls[0].url} alt={ItemDetails.name} className="cover h-inherit" />
            </figure>
            <div className="grid grid-cols-2 grid-rows-1 my-5">
              <div className="auto-cols-auto">
                <h5 className="font-medium">{ItemDetails.name}</h5>
                <span className="text-gray-400 font-thin">
                  {ItemDetails.city}, {ItemDetails.country}
                </span>
              </div>
              <div className="auto-cols-auto my-auto">
                <span className="font-medium">
                  ${+checkout.duration + ItemDetails.price} USD
                  <span className="text-gray-400 font-thin"> per </span>
                  {checkout.duration} {ItemDetails.unit}
                  {+checkout.duration > 1 ? "s" : ""}
                </span>
              </div>
            </div>
          </div>
          <div className="col-start-7 col-end-7 border-l-2 h-full"></div>
          <div className="col-start-8 col-end-13">
            <Fade delay={600}>
              <label htmlFor="firstName">First Name</label>
              <InputText id="firstName" name="firstName" value={data.firstName} onChange={props.onChange} />
              <label htmlFor="lastName">Last Name</label>
              <InputText id="lastName" name="lastName" value={data.lastName} onChange={props.onChange} />
              <label htmlFor="email">Email</label>
              <InputText id="email" name="email" type="email" value={data.email} onChange={props.onChange} />
              <label htmlFor="phone">Phone</label>
              <InputText id="phone" name="phone" type="tel" value={data.phone} onChange={props.onChange} />
            </Fade>
          </div>
        </Fade>
      </div>
    </div>
  );
}

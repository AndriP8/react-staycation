import React, { Component } from "react";
import Fade from "react-reveal/Fade";

import Header from "../parts/Header";
import PageDetailTitle from "../parts/PageDetailTitle";
import FeaturedImage from "../parts/FeaturedImage";
import PageDetailDescription from "../parts/PageDetailDescription";
import BookingForm from "../parts/BookingForm";
import Testimony from "../parts/Testimony";
import Category from "../parts/Category";
import Footer from "../parts/Footer";

import ItemDetails from "../json/itemDetails.json";
export default class DetailsPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    document.title = "Staycation | Details Page";
  }
  render() {
    const breadcrumbList = [
      { pagTitle: "Home", pagehref: "/" },
      { pagTitle: "House Details", pagehref: "" },
    ];
    return (
      <>
        <Header {...this.props} />
        <PageDetailTitle data={ItemDetails} breadcrumb={breadcrumbList} />
        <FeaturedImage data={ItemDetails.imageUrls} />
        <div className="container px-8 lg:px-36 md:px-32">
          <div className="grid grid-cols-12 grid-rows-1">
            <div className="col-start-1 col-end-8 pr-6">
              <Fade bottom>
                <PageDetailDescription data={ItemDetails} />
              </Fade>
            </div>
            <div className="col-start-8 col-end-13">
              <Fade bottom>
                <BookingForm itemDetails={ItemDetails} />
              </Fade>
            </div>
          </div>
        </div>
        <Category data={ItemDetails.categories} />
        <Testimony data={ItemDetails.testimonial} />
        <Footer />
      </>
    );
  }
}

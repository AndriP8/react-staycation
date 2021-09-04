import React, { Component } from "react";
import Fade from "react-reveal/Fade";

import Header from "../parts/Header";
import BookingInformation from "../parts/Checkout/BookingInformation";
import Payment from "../parts/Checkout/Payment";
import Completed from "../parts/Checkout/Completed";
import Button from "../elements/Button";

import Stepper, { Numbering, Meta, MainContent, Controller } from "../elements/Stepper";

import ItemDetails from "../json/itemDetails.json";

export default class CheckoutPage extends Component {
  state = {
    data: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      proofPayment: "",
      bankName: "",
      bankHolder: "",
    },
  };

  onChange = (event) => {
    this.setState({
      data: {
        ...this.state.data,
        [event.target.name]: event.target.value,
      },
    });
  };

  componentDidMount() {
    window.scrollTo(0, 0);
    document.title = "Staycation | Checkout";
  }

  render() {
    const { data } = this.state;

    const checkout = {
      duration: 3,
    };

    const steps = {
      bookingInformation: {
        title: "Booking Information",
        description: "Please fill up the blank fields below",
        content: <BookingInformation data={data} checkout={checkout} ItemDetails={ItemDetails} onChange={this.onChange} />,
      },
      payment: {
        title: "Payment",
        description: "Kindly follow the instruction below",
        content: <Payment data={data} ItemDetails={ItemDetails} checkout={checkout} onChange={this.onChange} />,
      },
      completed: {
        title: "Yay! Completed",
        description: null,
        content: <Completed />,
      },
    };
    return (
      <>
        <Header isCentered />
        <Stepper steps={steps} initialStep="payment">
          {(prevStep, nextStep, currentStep, steps) => (
            <>
              <Numbering data={steps} current={currentStep} style={{ marginBottom: 50, marginTop: 50 }} />
              <Meta data={steps} current={currentStep} />
              <MainContent data={steps} current={currentStep} />

              {currentStep === "bookingInformation" && (
                <Controller>
                  {data.firstName !== "" && data.lastName !== "" && data.email !== "" && data.phone !== "" && (
                    <Fade>
                      <Button className="mb-4" type="button" isBLock isPrimary hasShadow onClick={nextStep}>
                        Continue to Book
                      </Button>
                    </Fade>
                  )}
                  <Button type="link" className="px-70 py-3" isBLock isLight href={`/properties/${ItemDetails._id}`}>
                    Cancel
                  </Button>
                </Controller>
              )}
              {currentStep === "payment" && (
                <Controller>
                  {data.proofPayment !== "" && data.bankName !== "" && data.bankHolder !== "" && (
                    <Fade>
                      <Button className="mb-4" type="button" isBLock isPrimary hasShadow onClick={nextStep}>
                        Continue to Book
                      </Button>
                    </Fade>
                  )}
                  <Button type="button" isBLock isLight onClick={prevStep}>
                    Cancel
                  </Button>
                </Controller>
              )}
              {currentStep === "completed" && (
                <Controller>
                  <Button type="link" className="px-7 py-3" isBLock isPrimary hasShadow href="">
                    Back to Home
                  </Button>
                </Controller>
              )}
            </>
          )}
        </Stepper>
      </>
    );
  }
}

import React, { Component } from "react";

import propTypes from "prop-types";
import { InputDate, InputNumber } from "../elements/Form";
import Button from "../elements/Button";

export default class BookingForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        duration: 1,
        date: {
          startDate: new Date(),
          endDate: new Date(),
          key: "selection",
        },
      },
    };
  }

  updateData = (e) => {
    this.setState({
      ...this.state,
      data: {
        ...this.state.data,
        [e.target.name]: e.target.value,
      },
    });
  };

  componentDidUpdate(prevProps, prevState) {
    const { data } = this.state;
    if (prevState.data.date !== data.date) {
      const startDate = new Date(data.date.startDate);
      const endDate = new Date(data.date.endDate);
      const countDuration = new Date(endDate - startDate).getDate();
      this.setState({
        data: {
          ...this.state.data,
          duration: countDuration,
        },
      });
    }
    if (prevState.data.duration !== data.duration) {
      const startDate = new Date(data.date.startDate);
      const endDate = new Date(startDate.setDate(startDate.getDate() + +data.duration - 1));
      this.setState({
        ...this.state,
        data: {
          ...this.state.data,
          date: {
            ...this.state.data.date,
            endDate,
          },
        },
      });
    }
  }

  render() {
    const { data } = this.state;
    const { itemDetails, startboking } = this.props;
    return (
      <div className="card border rounded-2xl px-16 py-12">
        <h4 className="mb-3 text-gray-900 text-xl font-medium">Start Booking</h4>
        <h2 className="mb-3 text-4xl text-medGreen">
          ${itemDetails.price} <span className="text-gray-400 font-thin">per {itemDetails.unit}</span>
        </h2>
        <label htmlFor="duration" className="text-gray-900">
          How long you will stay?
        </label>
        <InputNumber max={30} suffix={" night"} isSuffixPlural onChange={this.updateData} name="duration" value={data.duration} />
        <label htmlFor="date">Pick a date</label>
        <InputDate onChange={this.updateData} name="date" value={data.date} />
        <h6 className="text-gray-400 font-thin mb-10">
          You will pay
          <span className="text-gray-900 font-medium"> ${itemDetails.price * data.duration} USD</span>
          {" per "}
          <span className="text-gray-900 font-medium">
            {data.duration} {itemDetails.unit}
          </span>
        </h6>
        <Button style={{ width: 277 }} hasShadow isPrimary isBLock onClick={startboking}>
          Continue to Book
        </Button>
      </div>
    );
  }
}

BookingForm.propTypes = {
  itemDetails: propTypes.object,
  startboooking: propTypes.func,
};

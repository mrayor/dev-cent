import React, { Component } from "react";
import Input from "../Input";
import DisabledInput from "../DisabledInput";
import PaymentDropdown from "../PaymentDropdown";
import Button from "../Button";
import axios from "axios";

class EnrollForm extends Component {
  state = {
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    payment_mode: "Pay Online",
    errors: {}
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onClick = async () => {
    const {
      first_name,
      last_name,
      email,
      phone,

      payment_mode
    } = this.state;

    const newApplicant = {
      first_name,
      last_name,
      email,
      phone,
      payment_mode,
      course_name: this.props.course,
      amount_due: this.props.price,
      course_id: this.props.course_id
    };

    const res = await axios.post(
      "http://devcent.test/api/applicants/enroll",
      newApplicant
    );
    if (res.data.success === false) {
      const error = res.data.response;
      console.log(error);
    } else {
      //clear state
      this.setState({
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        payment_mode: "Pay Online",
        errors: {}
      });
      window.location.href = "http://localhost:3000/";
    }
  };

  render() {
    const { first_name, last_name, email, phone, payment_mode } = this.state;

    return (
      <div className="mb-10 mt-5">
        <Input
          label="First name"
          type="text"
          placeholder="First name"
          value={first_name}
          name="first_name"
          onChange={this.onChange}
        />
        <Input
          label="Last name"
          type="text"
          placeholder="Last name"
          value={last_name}
          name="last_name"
          onChange={this.onChange}
        />
        <Input
          label="Email"
          type="email"
          placeholder="Email"
          value={email}
          name="email"
          onChange={this.onChange}
        />
        <Input
          label="Phone Number"
          type="number"
          placeholder="Phone Number"
          value={phone}
          name="phone"
          onChange={this.onChange}
        />
        <DisabledInput
          type="text"
          name="course_title"
          value={this.props.course}
          label="Course Title"
          onChange={this.onChange}
        />
        <DisabledInput
          type="text"
          name="amount_due"
          value={this.props.price}
          label="Amount Due"
          onChange={this.onChange}
        />
        <PaymentDropdown
          name="payment_mode"
          value={payment_mode}
          onChange={this.onChange}
        />
        <Button name="Submit" onClick={this.onClick} />
      </div>
    );
  }
}
export default EnrollForm;

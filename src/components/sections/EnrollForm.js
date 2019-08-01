import React, { Component } from "react";
import Input from "../Input";
import DisabledInput from "../DisabledInput";
import PaymentDropdown from "../PaymentDropdown";
import Button from "../Button";

class EnrollForm extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    phone: ""
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { firstName, lastName, email, phone } = this.state;
    return (
      <div className="mb-10 mt-5">
        <Input
          label="First name"
          type="text"
          placeholder="First name"
          value={firstName}
          name="firstName"
          onChange={this.onChange}
        />
        <Input
          label="Last name"
          type="text"
          placeholder="Last name"
          value={lastName}
          name="lastName"
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
          type="text"
          placeholder="Phone Number"
          value={phone}
          name="phone"
          onChange={this.onChange}
        />
        <DisabledInput amount={this.props.price} />
        <PaymentDropdown />
        <Button name="Submit" />
      </div>
    );
  }
}
export default EnrollForm;

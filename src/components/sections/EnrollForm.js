import React, { Component } from "react";
import Input from "../Input";
import DisabledInput from "../DisabledInput";
import PaymentDropdown from "../PaymentDropdown";
import Button from "../Button";

class EnrollForm extends Component {
  render() {
    return (
      <div className="mb-10 mt-5">
        <Input label="First name" type="text" placeholder="First name" />
        <Input label="Last name" type="text" placeholder="Last name" />
        <Input label="Email" type="email" placeholder="Email" />
        <Input label="Phone Number" type="text" placeholder="Phone Number" />
        <DisabledInput amount="#50,000" />
        <PaymentDropdown />
        <Button name="Submit" />
      </div>
    );
  }
}
export default EnrollForm;

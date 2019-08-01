import React, { Component } from "react";
class PaymentDropdown extends Component {
  state = {
    value: "Pay Online"
  };
  onChange = e => this.setState({ value: e.target.value });
  render() {
    const { value } = this.state;
    return (
      <div className="w-full my-6">
        <label className="text-black font-bold mb-2">
          Select Mode of Payment
        </label>
        <div className="relative">
          <select
            className="w-full bg-white border border-gray-400 text-gray-700 py-3 px-4 pr-8 appearance-none  focus:bg-white"
            id="grid-state"
            onChange={this.onChange}
            value={value}
          >
            <option value="Pay Online">Pay Online</option>
            <option value="Pay Cash">Pay Cash</option>
            <option value="Pay to Bank">Pay to Bank</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
      </div>
    );
  }
}

export default PaymentDropdown;

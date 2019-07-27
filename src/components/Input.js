import React, { Component } from "react";
import PropTypes from "prop-types";

class Input extends Component {
  render() {
    return (
      <div>
        <div className="-mx-3 my-2">
          <div className="w-full px-3">
            <label className="text-black font-bold mb-2">
              {this.props.label}
            </label>
            <input
              className="w-full bg-white text-gray-700 border border-gray-400 py-3 px-4 mb-3"
              type={this.props.type}
              placeholder={this.props.placeholder}
            />
          </div>
        </div>
      </div>
    );
  }
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired
};
export default Input;

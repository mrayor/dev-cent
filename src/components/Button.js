import React, { Component } from "react";
import PropTypes from "prop-types";

class Button extends Component {
  render() {
    return (
      <button className={this.props.class}>
        <div className="text-sm font-medium">{this.props.name}</div>
        <div className="ml-3">
          <i>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14.208"
              height="11.132"
            >
              <g fill="none" stroke="#fff" data-name="Group 2">
                <path d="M8.089.366l5.778 5.393" data-name="Line 6" />
                <path d="M8.089 10.767l5.778-5.393" data-name="Line 7" />
                <path d="M13.867 5.759H0" data-name="Line 8" />
              </g>
            </svg>
          </i>
        </div>
      </button>
    );
  }
}

Button.defaultProps = {
  name: "Submit",
  class:
    "rounded-large bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 flex items-center"
};
Button.propTypes = {
  name: PropTypes.string.isRequired,
  class: PropTypes.string.isRequired
};

export default Button;

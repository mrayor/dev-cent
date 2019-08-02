import React from "react";
import PropTypes from "prop-types";

const DisabledInput = props => {
  return (
    <div className="-mx-3 my-2">
      <div className="w-full px-3">
        <label className="text-black font-bold mb-2">{props.label}</label>
        <input
          className="w-full bg-gray-300 text-gray-700 border border-gray-400 py-3 px-4 mb-3"
          type={props.type}
          name={props.name}
          value={props.value}
          disabled
          onChange={props.onChange}
        />
      </div>
    </div>
  );
};

DisabledInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default DisabledInput;

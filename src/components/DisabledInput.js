import React from "react";
import PropTypes from "prop-types";

const DisabledInput = props => {
  return (
    <div>
      <div className="-mx-3 my-2">
        <div className="w-full px-3">
          <label className="text-black font-bold mb-2">Amount Due</label>
          <div className="w-full bg-gray-300 text-gray-700 border border-gray-400 py-3 px-4 mb-3">
            <p>{props.amount}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

DisabledInput.propTypes = {
  amount: PropTypes.string.isRequired
};

export default DisabledInput;

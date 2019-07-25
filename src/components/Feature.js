import React from "react";
import PropTypes from "prop-types";

const Feature = props => {
  return (
    <div className="flex justify-between">
      <div className="flex-auto pr-4">
        <img src={props.icon} alt="icon" />
      </div>
      <div className="flex-auto">
        <h1 className="font-bold text-xl">{props.title}</h1>
        <p className="text-sm mt-2 mb-4">{props.content}</p>
      </div>
    </div>
  );
};

Feature.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};
export default Feature;

import React from "react";
import PropTypes from "prop-types";

const CourseOutline = props => {
  return (
    <div className="flex justify-between my-3">
      <h1 className="font-medium text-lg text-black opacity-75">
        {props.topic}
      </h1>
      <div className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-2 rounded inline-flex items-center text-sm">
        <span>{props.time}</span>
      </div>
    </div>
  );
};

CourseOutline.propTypes = {
  topic: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired
};

export default CourseOutline;

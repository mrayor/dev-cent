import React from "react";
import PropTypes from "prop-types";

const CourseDetail = props => {
  return (
    <div className="bg-gray-300 border-2 py-2 px-4 text-black leading-tight flex justify-between my-4">
      <p>{props.val1}</p>
      <p>{props.val2}</p>
    </div>
  );
};
CourseDetail.propTypes = {
  val1: PropTypes.string.isRequired,
  val2: PropTypes.string.isRequired
};
export default CourseDetail;

import React from "react";
import PropTypes from "prop-types";

const Course = props => {
  return (
    <div className={props.class}>
      <img className="w-full" src={props.image} alt="pictures" />
      <div className="px-6 py-4 flex justify-between">
        <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          {props.tag}
        </span>
        <span className="rounded-full px-3 py-1 text-sm font-bold text-black mr-2">
          {props.amount}
        </span>
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 hover:text-red-600">
          <a href="/"> {props.title}</a>
        </div>
        <p className="text-gray-700 text-base">{props.content}</p>
      </div>
    </div>
  );
};

Course.defaultProps = {
  class: "flex-shrink-0 max-w-sm rounded shadow-lg mx-4"
};

Course.propTypes = {
  image: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  class: PropTypes.string.isRequired
};
export default Course;

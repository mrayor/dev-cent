import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class Course extends Component {
  render() {
    const { course } = this.props;
    return (
      <div className="flex-shrink-0 max-w-sm rounded shadow-lg mx-4">
        <img className="w-full" src={course.featured_image} alt="pictures" />
        <div className="px-6 py-4 flex justify-between">
          <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            {course.category.name}
          </span>
          <span className="rounded-full px-3 py-1 text-sm font-bold text-black mr-2">
            {`₦${course.price}`}
          </span>
        </div>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 hover:text-red-600">
            <Link to={`courses/${course.id}`}> {course.name}</Link>
          </div>
          <p className="text-gray-700 text-base">{course.description}</p>
        </div>
      </div>
    );
  }
}

Course.propTypes = {
  course: PropTypes.object.isRequired
};
export default Course;

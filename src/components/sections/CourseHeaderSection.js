import React from "react";
import PropTypes from "prop-types";

const CourseHeaderSection = props => {
  return (
    <div
      style={{
        background: `linear-gradient(rgba(20, 20, 20, .5),rgba(20, 20, 20, .5)),url(${
          props.image
        })`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "auto"
      }}
      className="bg-no-repeat bg-cover"
    >
      {" "}
      <div className="pt-20 container py-2">
        <div className="tracking-tight text-white p-4 ">
          <h1 className="text-3xl font-bold px-6">{props.title}</h1>
        </div>
      </div>
    </div>
  );
};

CourseHeaderSection.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default CourseHeaderSection;

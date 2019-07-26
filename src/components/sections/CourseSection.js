import React from "react";
import image from "../../images/ai-image.png";
import Course from "../Course";

const CourseSection = () => {
  return (
    <div className="flex overflow-x-auto pb-8 -mx-4">
      <Course
        image={image}
        tag="web development"
        amount="#60,000"
        title="HTML and CSS web development course"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, non? Dolor nemo obcaecati eius sed"
      />
      <Course
        image={image}
        tag="web development"
        amount="#60,000"
        title="HTML and CSS web development course"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, non? Dolor nemo obcaecati eius sed"
      />
      <Course
        image={image}
        tag="web development"
        amount="#60,000"
        title="HTML and CSS web development course"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, non? Dolor nemo obcaecati eius sed"
      />
    </div>
  );
};

export default CourseSection;

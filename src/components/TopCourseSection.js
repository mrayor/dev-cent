import React from "react";
import image from "../images/ai-image.png";
import Course from "./Course";
import Button from "./Button";

const TopCourseSection = () => {
  return (
    <React.Fragment>
      <div className="my-5">
        <h3 className="font-bold text-3xl text-right">some of our top</h3>
        <h2 className="font-normal text-3xl -mt-3 text-right">courses</h2>
      </div>
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
      <div>
        <Button
          name="All Courses"
          class="my-3 mx-auto rounded-large bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 flex items-center"
        />
      </div>
    </React.Fragment>
  );
};

export default TopCourseSection;

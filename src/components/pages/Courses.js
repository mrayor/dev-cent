import React from "react";
import image from "../../images/ai-image.png";
import SelectCategories from "../SelectCategories";
import BookFeatures from "../BookFeatures";
import Button from "../Button";
import Course from "../Course";

const Courses = () => {
  return (
    <div className="container mx-auto pt-20">
      <SelectCategories />
      <BookFeatures />
      <div className="my-5">
        <h3 className="font-bold text-3xl text-right">list of available</h3>
        <h2 className="font-normal text-3xl -mt-3 text-right">courses</h2>
      </div>
      <div>
        <Course
          image={image}
          tag="web development"
          amount="#60,000"
          title="HTML and CSS web development course"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, non? Dolor nemo obcaecati eius sed"
          class="flex-shrink-0 max-w-sm rounded shadow-lg mx-4 mb-10"
        />
        <Course
          image={image}
          tag="web development"
          amount="#60,000"
          title="HTML and CSS web development course"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, non? Dolor nemo obcaecati eius sed"
          class="flex-shrink-0 max-w-sm rounded shadow-lg mx-4 mb-10"
        />
        <Course
          image={image}
          tag="web development"
          amount="#60,000"
          title="HTML and CSS web development course"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, non? Dolor nemo obcaecati eius sed"
          class="flex-shrink-0 max-w-sm rounded shadow-lg mx-4 mb-10"
        />
        <Course
          image={image}
          tag="web development"
          amount="#60,000"
          title="HTML and CSS web development course"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, non? Dolor nemo obcaecati eius sed"
          class="flex-shrink-0 max-w-sm rounded shadow-lg mx-4 mb-10"
        />
      </div>
      <Button
        name="View more"
        class="my-3 mx-auto rounded-large bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 flex items-center"
      />
    </div>
  );
};

export default Courses;

import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button";
import CourseSection from "./CourseSection";

const TopCourseSection = props => {
  return (
    <React.Fragment>
      <div className="my-5">
        <h3 className="font-bold text-3xl text-right">some of our top</h3>
        <h2 className="font-normal text-3xl -mt-3 text-right">courses</h2>
      </div>
      <CourseSection />
      <Link to="/courses">
        <Button
          name="All Courses"
          class="my-3 mx-auto rounded-large bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 flex items-center"
        />
      </Link>
    </React.Fragment>
  );
};

export default TopCourseSection;

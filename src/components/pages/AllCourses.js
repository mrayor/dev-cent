import React from "react";
// import SelectCategories from "../SelectCategories";
import BookFeatures from "../BookFeatures";
import Courses from "../Courses";

const AllCourses = () => {
  return (
    <div className="container mx-auto pt-20">
      {/* <SelectCategories /> */}
      <BookFeatures />
      <div className="my-5">
        <h3 className="font-bold text-3xl text-right">list of available</h3>
        <h2 className="font-normal text-3xl -mt-3 text-right">courses</h2>
      </div>
      <div>
        <Courses />
      </div>
    </div>
  );
};

export default AllCourses;

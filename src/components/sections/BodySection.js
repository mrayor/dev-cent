import React from "react";

import TopCourseSection from "../sections/TopCourseSection";
import BookFeatures from "../BookFeatures";

const BodySection = () => {
  return (
    <div className="container items-center">
      <BookFeatures />
      <TopCourseSection />
    </div>
  );
};

export default BodySection;

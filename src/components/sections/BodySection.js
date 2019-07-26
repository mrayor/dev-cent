import React from "react";

import TopCourseSection from "../sections/TopCourseSection";
import BookFeatures from "../BookFeatures";

const BodySection = () => {
  return (
    <React.Fragment>
      <div className="container items-center">
        <BookFeatures />
        <TopCourseSection />
      </div>
    </React.Fragment>
  );
};

export default BodySection;

import React from "react";
import { Link } from "react-router-dom";
import code from "../../images/code.png";
import CourseHeaderSection from "../sections/CourseHeaderSection";
import EnrollForm from "../sections/EnrollForm";

const Enroll = () => {
  return (
    <React.Fragment>
      <CourseHeaderSection
        image={code}
        title="HTML and CSS for web developers"
      />
      <div className="container my-2">
        <Link to="/courses" className="text-lg hover:text-red-600">
          {" "}
          go back
        </Link>
        <EnrollForm />
      </div>
    </React.Fragment>
  );
};

export default Enroll;

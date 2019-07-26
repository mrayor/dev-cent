import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import CourseHeaderSection from "../sections/CourseHeaderSection";
import code from "../../images/code.png";
import CourseDescriptionSection from "../sections/CourseDescriptionSection";
import CourseOutline from "../CourseOutline";
import CourseDetail from "../CourseDetail";

const Course = () => {
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
        <div>
          <CourseDescriptionSection
            title="objectives"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, nobis debitis eius accusamus nam minima iste harum autem? Numquam beatae, reprehenderit, veniam reiciendis, ratione omnis pariatur nobis consectetur enim velit neque? Rerum, at! Rerum aperiam quo ab voluptatibus itaque cupiditate, exercitationem deleniti eos quam mollitia delectus voluptate sunt dolores? Reiciendis!"
          />
          <CourseDescriptionSection
            title="eligibility"
            content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio officia aperiam quibusdam minima dolore facere modi repudiandae quos saepe atque consectetur architecto magnam iure fugiat dolorum quasi quis quam doloremque in voluptas, earum ducimus hic adipisci! Facere odio voluptas facilis."
          />
        </div>
        <div className="my-4">
          <h1 className="font-bold text-3xl">Course Outline</h1>
          <div className="my-4 border-b-2" />
        </div>
        <div className="mb-10">
          <CourseOutline topic="Introduction to programming" time="2 hrs" />
          <CourseOutline topic="Introduction to programming" time="2 hrs" />
          <CourseOutline topic="Introduction to programming" time="2 hrs" />
          <CourseOutline topic="Introduction to programming" time="2 hrs" />
        </div>
        <div className="mb-10">
          <CourseDetail val1="Training Instructor" val2="John Doe" />
          <CourseDetail val1="Course Fee" val2="#50,000" />
          <CourseDetail val1="Available Seats" val2="15" />
          <CourseDetail val1="Schedule" val2="2:00pm to 4:00pm" />
        </div>
      </div>
    </React.Fragment>
  );
};

CourseDescriptionSection.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
};

export default Course;

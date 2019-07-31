import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import PropTypes from "prop-types";
import CourseHeaderSection from "../sections/CourseHeaderSection";
import CourseDescriptionSection from "../sections/CourseDescriptionSection";
import CourseOutline from "../CourseOutline";
import CourseDetail from "../CourseDetail";

class Course extends Component {
  state = {
    name: "",
    description: "",
    objectives: "",
    eligibility: "",
    schedule: "",
    trainingInstructor: "",
    featuredImage: "",
    price: "",
    availableSeats: ""
  };

  async componentDidMount() {
    const { id } = this.props.match.params;
    const res = await axios.get(`http://devcent.test/api/courses/${id}`);
    const course = res.data;
    this.setState({
      name: course.name,
      description: course.description,
      objectives: course.objectives,
      eligibility: course.eligibility,
      schedule: course.schedule,
      trainingInstructor: course.training_instructor,
      featuredImage: course.featured_image,
      availableSeats: course.available_seats,
      price: course.price
    });
  }

  render() {
    const {
      name,
      description,
      objectives,
      eligibility,
      schedule,
      trainingInstructor,
      featuredImage,
      price,
      availableSeats
    } = this.state;
    return (
      <React.Fragment>
        <CourseHeaderSection image={featuredImage} title={name} />
        <div className="container my-2">
          <Link to="/courses" className="text-lg hover:text-red-600">
            {" "}
            go back
          </Link>
          <div>
            <CourseDescriptionSection
              title="description"
              content={description}
            />
            <CourseDescriptionSection title="objectives" content={objectives} />
            <CourseDescriptionSection
              title="eligibility"
              content={eligibility}
            />
          </div>
          <div className="my-4">
            <h1 className="font-bold text-3xl">Course Outline</h1>
            <div className="my-4 border-b-2" />
          </div>
          <div className="mb-10">
            <CourseOutline topic="Introduction to programming" time="2 hrs" />
          </div>
          <div className="mb-10">
            <CourseDetail
              val1="Training Instructor"
              val2={trainingInstructor}
            />
            <CourseDetail val1="Course Fee" val2={`#${price}`} />
            <CourseDetail val1="Available Seats" val2={availableSeats} />
            <CourseDetail val1="Schedule" val2={schedule} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

CourseDescriptionSection.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
};

export default Course;

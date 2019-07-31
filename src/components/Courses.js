import React, { Component } from "react";
import axios from "axios";
import Course from "./Course";

class Courses extends Component {
  state = {
    courses: []
  };

  async componentDidMount() {
    const res = await axios.get("http://devcent.test/api/courses");
    this.setState({ courses: res.data });
  }

  render() {
    const { courses } = this.state;
    return (
      <div className="flex overflow-x-auto pb-8 -mx-4">
        {courses.map(course => (
          <Course key={course.id} course={course} />
        ))}
      </div>
    );
  }
}

export default Courses;

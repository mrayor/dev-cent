import React, { Component } from "react";
import axios from "axios";
import Course from "./Course";
import Preloader from "./Preloader";

class Courses extends Component {
  state = {
    courses: [],
    isLoading: true
  };

  async componentDidMount() {
    const res = await axios.get("http://devcent.test/api/courses");
    this.setState({ courses: res.data });
    this.setState({ isLoading: false });
  }

  render() {
    if (this.state.isLoading) {
      return <Preloader />;
    }
    const { courses } = this.state;
    return (
      <div className="flex overflow-x-auto pb-8 -mx-4 lg:flex-wrap mx-auto">
        {courses.map(course => (
          <Course key={course.id} course={course} />
        ))}
      </div>
    );
  }
}

export default Courses;

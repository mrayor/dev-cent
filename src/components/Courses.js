import React, { Component } from "react";
import Course from "./Course";
import Preloader from "./Preloader";
import devcent from "../apis/devcent";

class Courses extends Component {
  state = {
    courses: [],
    isLoading: true
  };

  async componentDidMount() {
    const res = await devcent.get("/");
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

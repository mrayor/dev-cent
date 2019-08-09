import React, { Component } from "react";
import Course from "./Course";
import Preloader from "./Preloader";
import devcent from "../apis/devcent";
import ReactSwipe from "react-swipe";

class Courses extends Component {
  state = {
    courses: [],
    isLoading: true,
    width: window.innerWidth
  };

  componentWillMount() {
    window.addEventListener("resize", this.handleWindowSizeChange);
  }

  // make sure to remove the listener
  // when the component is not mounted anymore
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
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
    const { courses, width } = this.state;
    let reactSwipeEl;

    const isMobile = width <= 500;

    if (isMobile) {
      return (
        <React.Fragment>
          <div className="flex overflow-x-auto -mx-4 lg:flex-wrap mx-auto">
            <ReactSwipe
              className="carousel"
              swipeOptions={{ continuous: false, auto: 3000 }}
              ref={el => (reactSwipeEl = el)}
            >
              {courses.map(course => (
                <div key={course.id}>
                  <Course key={course.id} course={course} />
                </div>
              ))}
            </ReactSwipe>
          </div>
          <div className="flex justify-around items-center">
            <button onClick={() => reactSwipeEl.prev()}>
              <i className="fas fa-angle-left fa-2x hover:text-pink-600 text-gray-400" />
            </button>
            <button onClick={() => reactSwipeEl.next()}>
              {" "}
              <i className="fas fa-angle-right fa-2x hover:text-pink-600 text-gray-400" />
            </button>
          </div>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <div className="flex overflow-x-auto -mx-4 xl:flex-wrap mx-auto">
            {courses.map(course => (
              <Course key={course.id} course={course} />
            ))}
          </div>
        </React.Fragment>
      );
    }
  }
}

export default Courses;

import React, { Component } from "react";
import Course from "./Course";

class Courses extends Component {
  state = {
    courses: [
      {
        id: "1",
        title: "HTML and CSS web development course",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, non? Dolor nemo obcaecati eius sed",
        amount: "#60,000",
        image: "http://lorempixel.com/640/480/",
        tag: "web development"
      },
      {
        id: "2",
        title: "HTML and CSS web ",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, non?",
        amount: "#60,000",
        image: "http://lorempixel.com/640/480/",
        tag: "development"
      },
      {
        id: "3",
        title: "HTML and CSS",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
        amount: "#60,000",
        image: "http://lorempixel.com/640/480/",
        tag: "web "
      }
    ]
  };

  render() {
    const { courses } = this.state;
    return (
      <div className="flex overflow-x-auto pb-8 -mx-4">
        {courses.map(course => (
          <Course
            key={course.id}
            title={course.title}
            content={course.content}
            amount={course.amount}
            image={course.image}
            tag={course.tag}
          />
        ))}
      </div>
    );
  }
}

export default Courses;

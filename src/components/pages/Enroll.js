import React, { Component } from "react";
import { Link } from "react-router-dom";
import devcent from "../../apis/devcent";
import CourseHeaderSection from "../sections/CourseHeaderSection";
import EnrollForm from "../sections/EnrollForm";

class Enroll extends Component {
  state = {
    id: "",
    name: "",
    featured_image: "",
    price: ""
  };

  async componentDidMount() {
    const { id } = this.props.match.params;
    const res = await devcent.get(`/${id}`);
    const course = res.data;
    this.setState({
      name: course.name,
      featured_image: course.featured_image,
      price: course.price,
      id: course.id
    });
  }

  render() {
    const { name, featured_image, price, id } = this.state;
    return (
      <React.Fragment>
        <CourseHeaderSection image={featured_image} title={name} />
        <div className="container my-2">
          <Link to="/courses" className="text-lg hover:text-red-600">
            {" "}
            go back
          </Link>
          <EnrollForm price={price} course={name} course_id={id} />
        </div>
      </React.Fragment>
    );
  }
}

export default Enroll;

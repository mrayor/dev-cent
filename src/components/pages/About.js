import React from "react";
import "../../styles/about.css";
import about from "../../images/abt-mockup.png";
import { Link } from "react-router-dom";
import code from "../../images/code.png";
import CourseHeaderSection from "../sections/CourseHeaderSection";
import Button from "../Button";

const About = () => {
  return (
    <React.Fragment>
      <div>
        <CourseHeaderSection image={code} title="About Us" />
        <div className="container my-2">
          <Link to="/" className="text-lg hover:text-red-600">
            {" "}
            go back
          </Link>
        </div>
        <div className="container mx-auto">
          <div className="about-1 o-hide bg-w sp-100">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 align-self-end">
                  <div className="abt-img">
                    <img src={about} alt="mockup" />
                  </div>
                </div>
                <div className="col-lg-6 mt-lg-0 mt-5 text-lg">
                  <h4 className="text-2xl font-bold my-4">our awesome story</h4>
                  <p>
                    DevCent is dedicated computer IT Training Establishment. We
                    have excelled in IT Training/Education,IT Consultancy and IT
                    Solutions Development.
                    <br />
                    <br />
                    In our 7 years of successful existence. Caring Everyone and
                    everything matters in the society and in the world. We care
                    for everyone irrespective of their association with us.
                    Innovation Change is the only constant; therefore, DEVCENT
                    always strives for innovation to discover new and better
                    opportunities that promote an inclusive and sustainable
                    growth environment.
                  </p>
                  <h4 className="text-2xl font-bold my-4 text-right md:text-left">
                    why are we special
                  </h4>
                  <ul className="list-1">
                    <li>
                      <span>
                        Our Practical one on one personalized training has set
                        us as one of the best Computer training institute in
                        Ogun State Nigeria.
                      </span>
                    </li>
                    <li>
                      <span>
                        We train and teach you Computer and ICT skills from
                        scratch to professional level. Even if you are a novice
                        in computer, then you are in the right place.
                      </span>
                    </li>
                    <li>
                      <span>
                        {" "}
                        You literally have to be able to use certain software
                        programs like Microsoft Word, Microsoft Excel, Microsoft
                        Office PowerPoint, CorelDraw, Adobe Photoshop, etc.
                      </span>
                    </li>
                    <li>
                      <span>
                        {" "}
                        We will train you until you have a perfect understanding
                        of whatever you want to achieve.
                      </span>
                    </li>
                  </ul>
                  <h4 className="text-2xl font-bold my-4">
                    what we have to offer
                  </h4>
                  <p className="my-4">
                    {" "}
                    We offer both basic and advanced computer courses on a wide
                    range of subjects. Our courses include, but not limited to,
                    <strong>
                      Desktop Publishing, Data Processing, Business Admin
                      Computing, Basic Computer Operation, Computer Graphics,
                      Website Designing, Search Engine Optimization, Secretarial
                      Administration, Computer Engineering and Computer
                      Networking,
                    </strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-200 py-5">
        <div className="container  flex-col">
          <h3 className="text-3xl font-bold text-center">
            Join us today and start building your career in IT.
          </h3>

          <Link to="/courses">
            <Button
              name="Enroll now"
              class="my-3 mx-auto rounded-large bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 flex items-center"
            />
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
};

export default About;

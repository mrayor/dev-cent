import React from "react";
import booksImage from "../../images/booksImage.png";
import Feature from "../Feature";
import icon from "../../images/icon.svg";
import TopCourseSection from "../sections/TopCourseSection";

const BodySection = () => {
  return (
    <React.Fragment>
      <div className="container items-center">
        <div className="p-4">
          <img src={booksImage} alt="books" />
          <div className="my-5">
            <h3 className="font-bold text-3xl">take the first step</h3>
            <h2 className="font-normal text-3xl -mt-3">to learn with us</h2>
          </div>
          <Feature
            title="Title One"
            content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque, perspiciatis?"
            icon={icon}
          />
          <Feature
            title="Title One"
            content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque, perspiciatis?"
            icon={icon}
          />
          <Feature
            title="Title One"
            content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque, perspiciatis?"
            icon={icon}
          />
        </div>
        <TopCourseSection />
      </div>
    </React.Fragment>
  );
};

export default BodySection;

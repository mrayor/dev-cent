import React from "react";
import booksImage from "../images/booksImage.png";
import Feature from "./Feature";
import deployment from "../images/deployment.svg";
import dynamic from "../images/dynamic.svg";
import intelligent from "../images/intelligent.svg";

const BookFeatures = () => {
  return (
    <div className="p-4">
      <img src={booksImage} alt="books" className="mx-auto md:hidden" />
      <div className="my-5">
        <h3 className="font-bold text-3xl">take the first step</h3>
        <h2 className="font-normal text-3xl -mt-3">to learn with us</h2>
      </div>
      <div className="md:flex">
        <Feature
          title="Learn"
          content="Learn new and relevant coding and programming skills."
          icon={intelligent}
        />
        <Feature
          title="Play"
          content="Improve your skills and knowledge and enjoy while doing it."
          icon={dynamic}
        />
        <Feature
          title="Explore"
          content="Explore recent technological tools which can seperate you from the job market."
          icon={deployment}
        />
      </div>
    </div>
  );
};

export default BookFeatures;

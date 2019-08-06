import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

const Event = props => {
  return (
    <div
      style={{
        background: `linear-gradient(rgba(20, 20, 20, .5),rgba(20, 20, 20, .5)),url(${
          props.event
        })`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "auto"
      }}
      className="bg-no-repeat bg-cover max-w-sm md:max-w-full md:pb-3"
    >
      {" "}
      <div className="container mx-auto py-2 mb-8 flex-col justify-between items-center">
        <div className="tracking-tight text-white p-4 md:mt-12 ">
          <h1 className="text-3xl font-extrabold">{props.title}</h1>
          <p className="text-sm font-normal leading-1">{props.date}</p>
          <div className="my-4">
            <Link to="/courses">
              <Button
                name="Enroll now"
                class="text-white py-2 flex items-center"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;

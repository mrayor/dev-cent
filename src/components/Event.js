import React from "react";

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
      className="bg-no-repeat bg-cover max-w-sm"
    >
      {" "}
      <div className="container mx-auto py-2 mb-8 flex-col justify-between items-center">
        <div className="tracking-tight text-white p-4 ">
          <h1 className="text-3xl font-extrabold">{props.title}</h1>
          <p className="text-sm font-normal leading-1">{props.date}</p>
          <div className="my-4">
            <Button
              name="Enroll now"
              class="text-white py-2 flex items-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;

import React from "react";

const CourseDescriptionSection = props => {
  return (
    <React.Fragment>
      <div className="my-4">
        <h1 className="font-bold text-3xl">{props.title}</h1>
        <div className="my-4 border-b-2" />
      </div>
      <div>
        <p>{props.content}</p>
      </div>
    </React.Fragment>
  );
};

export default CourseDescriptionSection;

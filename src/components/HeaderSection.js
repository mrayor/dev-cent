import React from "react";
import headerImage from "../images/headerImage.png";
import Button from "./Button";

const HeaderSection = () => {
  return (
    <React.Fragment>
      <div
        style={{
          background: `linear-gradient(rgba(20, 20, 20, .5),rgba(20, 20, 20, .5)),url(${headerImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "auto"
        }}
        className="rounded-b-large bg-no-repeat bg-cover"
      >
        {" "}
        <div className="pt-20 container mx-auto py-2 flex-col justify-between items-center">
          <div className="tracking-tight text-white p-4 ">
            <h1 className="text-3xl font-extrabold">- better education</h1>
            <h2 className="text-3xl -mt-3 font-normal">for a better world</h2>
            <p className="text-xs font-normal leading-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              tempore voluptate rem sunt corrupti commodi.
            </p>
            <div className="my-4 border-b-2" />
            <div className="mb-3">
              <h3 className="font-bold">upcoming events:</h3>
              <h1>Summer Camp Training School</h1>
            </div>
            <Button name="Enroll Now" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HeaderSection;

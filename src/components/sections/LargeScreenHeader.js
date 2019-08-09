import React from "react";
import booksImage from "../../images/booksImage.png";
import headerImage from "../../images/headerImage.png";
import Button from "../Button";
import "../../styles/header.css";

const LargeScreenHeader = () => {
  return (
    <header className="section page-header page-header-1">
      <div className="layout-4">
        <div className="layout-4-item-right">
          <div className="box-custom-2 bg-accent">
            <div className="box-custom-2-bg">
              <div className="box-custom-2-bg-inner">
                <div
                  className="box-custom-2-bg-image "
                  style={{
                    backgroundImage: `url(${headerImage})`
                  }}
                />
              </div>
            </div>
            <div className="box-custom-2-inner m-10">
              <h2 className="text-white">
                <span className="text-3xl font-extrabold ">
                  better education{" "}
                </span>
                <br />
                <span className="text-3xl font-normal">for a better world</span>
              </h2>
              <h4 className="text-white">
                Learn new skills and develop yourselve in the ever growing tech
                world.
              </h4>
              <div className="my-5">
                <Button name="Enroll Now" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <img src={booksImage} alt="" className="mx-auto mt-16" />
        </div>
      </div>
    </header>
  );
};

export default LargeScreenHeader;

import React from "react";
import "../styles/preloader.css";

const Preloader = () => {
  return (
    <div className="preloader" id="loading">
      <div className="preloader-body">
        <div id="loading-center-object">
          <div className="object" id="object_four" />
          <div className="object" id="object_three" />
          <div className="object" id="object_two" />
          <div className="object" id="object_one" />
        </div>
      </div>
    </div>
  );
};

export default Preloader;

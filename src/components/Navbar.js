import React from "react";

const Navbar = () => {
  return (
    <div className="container mx-auto py-2 flex justify-between items-center">
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="180" height="40">
          <g transform="translate(-20 -10)">
            <text
              transform="translate(76 40)"
              fontSize="30"
              fontFamily="Raleway-ExtraBold, Raleway"
              fontWeight="800"
            >
              <tspan x="0" y="0">
                DevCent
              </tspan>
            </text>
            <rect
              data-name="Rectangle 2"
              width="39"
              height="39"
              rx="19.5"
              transform="translate(20 10)"
            />
          </g>
        </svg>
      </div>
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="27.169" height="19.08">
          <g fill="none" stroke="#000" strokeWidth="1.5" data-name="Group 1">
            <path d="M0 .75h27.169" data-name="Line 1" />
            <path d="M0 9.54h15.982" data-name="Line 2" />
            <path d="M0 18.33h27.169" data-name="Line 3" />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default Navbar;

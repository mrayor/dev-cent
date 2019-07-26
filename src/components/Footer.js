import React from "react";

const Footer = () => {
  return (
    <div className="py-4">
      <div className="container">
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
        <div className="my-4">
          <h3 className="font-bold text-2xl">Contact Us</h3>
          <p>info@devnet.com</p>
          <p>0801 123 4567</p>
        </div>
        <div className="my-4">
          <h3 className="font-bold text-2xl">Quick Links</h3>
          <p>
            <a href="/">Home</a>
          </p>
          <p>
            <a href="/">About Us</a>
          </p>
          <p>
            <a href="/">FAQ</a>
          </p>
          <p>
            <a href="/">Courses</a>
          </p>
          <p>
            <a href="/">Contact Us</a>
          </p>
        </div>
        <div className="my-4">
          <h3 className="font-bold text-2xl">Follow Us</h3>
          <p>Facebook</p>
          <p>Instagram</p>
          <p>Twitter</p>
        </div>
        <div className="my-4 border-b-2 -mx-4" />
        <p className="flex justify-center my-2 text-sm">
          Copyright © 2019, All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;

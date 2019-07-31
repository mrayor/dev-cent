import React from "react";
import { Link } from "react-router-dom";
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

          <ul>
            <li>
              {" "}
              <a href="/">info@devnet.com</a>{" "}
            </li>
            <li>0801 123 4567</li>
          </ul>
        </div>
        <div className="my-4">
          <h3 className="font-bold text-2xl">Quick Links</h3>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>

            <li>
              <Link to="/courses">Courses</Link>
            </li>
          </ul>
        </div>
        <div className="my-4">
          <h3 className="font-bold text-2xl">Follow Us</h3>
          <ul>
            <li>
              <a href="https://facebook.com/devcent">Facebook</a>{" "}
            </li>
            <li>
              <a href="https://instagram.com/devcent">Instagram</a>
            </li>
            <li>
              <a href="https://twitter.com/devcent">Twitter</a>{" "}
            </li>
          </ul>
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

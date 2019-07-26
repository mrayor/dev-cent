import React from "react";
import { slide as Menu } from "react-burger-menu";

const SidebarMenu = () => {
  return (
    <Menu
      right
      customBurgerIcon={
        <svg xmlns="http://www.w3.org/2000/svg" width="27.169" height="19.08">
          <g fill="none" stroke="#000" strokeWidth="1.5" data-name="Group 1">
            <path d="M0 .75h27.169" data-name="Line 1" />
            <path d="M0 9.54h15.982" data-name="Line 2" />
            <path d="M0 18.33h27.169" data-name="Line 3" />
          </g>
        </svg>
      }
      customCrossIcon={
        <svg xmlns="http://www.w3.org/2000/svg" width="17.929" height="17.929">
          <g fill="none" stroke="#707070" data-name="Group 19">
            <path d="M.354.354l17.222 17.222" data-name="Line 14" />
            <path d="M17.576.354L.354 17.576" data-name="Line 15" />
          </g>
        </svg>
      }
    >
      <div className="flex">
        <div>
          <p className="mb-5">
            <a className="menu-item border-b-2 hover:border-red-600" href="/">
              About Us
            </a>
          </p>
          <p className="mb-5">
            {" "}
            <a
              className="menu-item border-b-2 hover:border-red-600"
              href="/laravel"
            >
              Upcoming Events
            </a>
          </p>{" "}
          <p className="mb-5">
            <a
              className="menu-item border-b-2 hover:border-red-600"
              href="/angular"
            >
              All Courses
            </a>
          </p>
          <p className="mb-5">
            {" "}
            <a
              className="menu-item border-b-2 hover:border-red-600"
              href="/vue"
            >
              Enroll for Summer Camp
            </a>
          </p>
        </div>
      </div>
    </Menu>
  );
};

export default SidebarMenu;

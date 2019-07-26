import React from "react";

const SelectCategories = () => {
  return (
    <div>
      <div className="inline-block relative w-full mb-4">
        <select className="block appearance-none w-full bg-white border border-black hover:border-gray-500 px-4 py-3 pr-8 rounded leading-tight focus:outline-none focus:outline-none">
          <option>All Categories</option>
          <option>Web Development</option>
          <option>Networking</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg
            className="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SelectCategories;

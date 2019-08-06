import React, { Component } from "react";
import devcent from "../apis/devcent";

class SelectCategories extends Component {
  state = {
    categories: []
  };

  async componentWillMount() {
    const res = await devcent.get("/categories");
    // console.log(res.data);
    this.setState({ categories: res.data });
  }
  onChange = e => this.setState({ value: e.target.value });

  render() {
    const { categories } = this.state;

    return (
      <div className="inline-block relative w-full mb-4">
        <select
          onChange={this.onChange}
          className="block appearance-none w-full bg-white border border-black hover:border-gray-500 px-4 py-3 pr-8 rounded leading-tight focus:outline-none focus:outline-none"
        >
          {categories.map(category => (
            <option key={category.id} value={category.name}>
              {category.name}
            </option>
          ))}
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
    );
  }
}

export default SelectCategories;

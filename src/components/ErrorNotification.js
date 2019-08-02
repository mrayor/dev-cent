import React, { Component } from "react";

class ErrorNotification extends Component {
  render() {
    return (
      <div
        className="bg-red-100 border border-red-400 text-red-700 px-4 py-1 rounded relative my-3"
        role="alert"
      >
        <span className="block sm:inline">{this.props.error}</span>
      </div>
    );
  }
}

export default ErrorNotification;

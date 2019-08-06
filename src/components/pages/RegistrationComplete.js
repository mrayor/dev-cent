import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button";
const RegistrationComplete = () => {
  return (
    <div className="container mx-auto pt-20">
      <div className="my-4 max-w-xs mx-auto">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path
            fill="#f5f0eb"
            d="M512 256.005c0 68.38-26.629 132.664-74.98 181.015S324.385 512 256.005 512 123.331 485.371 74.98 437.02 0 324.385 0 256.005 26.629 123.331 74.98 74.98 187.625 0 256.005 0 388.669 26.629 437.02 74.98 512 187.625 512 256.005z"
          />
          <path
            fill="#dcd2cd"
            d="M512 256.005c0 68.38-26.629 132.664-74.98 181.015S324.385 512 256.005 512V0c68.38 0 132.664 26.629 181.015 74.98S512 187.625 512 256.005z"
          />
          <path
            fill="#a7d22a"
            d="M446.734 256.005c0 105.164-85.565 190.719-190.729 190.719-105.174 0-190.729-85.555-190.729-190.719 0-105.174 85.555-190.729 190.729-190.729 105.164 0 190.729 85.555 190.729 190.729z"
          />
          <path
            fill="#6b0"
            d="M446.734 256.005c0 105.164-85.565 190.719-190.729 190.719V65.276c105.164 0 190.729 85.555 190.729 190.729z"
          />
          <path
            fill="#fff"
            d="M316.714 233.532l-60.709 60.719-5.548 5.548a15.18 15.18 0 0 1-10.776 4.457h-.23a14.977 14.977 0 0 1-10.626-4.396l-32.678-32.688c-5.869-5.859-5.869-15.373 0-21.241s15.383-5.869 21.241 0l21.932 21.922 16.684-16.684 39.177-39.177c5.949-5.949 15.593-5.949 21.532 0 5.95 5.947 5.95 15.591.001 21.54z"
          />
          <path
            fill="#f5f0eb"
            d="M316.714 233.532l-60.709 60.719v-43.083l39.177-39.177c5.949-5.949 15.593-5.949 21.532 0 5.949 5.948 5.949 15.592 0 21.541z"
          />
        </svg>
      </div>
      <div>
        <p className="text-center text-2xl">
          Thank you for completing your registration. Kindly check your email
          for the next step in your registration process. We look forward to
          having you.
        </p>
      </div>
      <div className="my-10 flex justify-center">
        <Link to="/">
          <Button name="Go to Home Page" />
        </Link>
      </div>
    </div>
  );
};

export default RegistrationComplete;

import React from "react";

const Label = ({ title }) => {
  return (
    <label
      htmlFor=""
      className="inline-flex font-medium capitalize text-xs cursor-pointer mb-2"
    >
      {title}
    </label>
  );
};

export default Label;

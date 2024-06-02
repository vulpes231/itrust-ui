import React from "react";

const Label = ({ title }) => {
  return (
    <label htmlFor="" className="text-xs mb-1 font-normal">
      {title}
    </label>
  );
};

export default Label;

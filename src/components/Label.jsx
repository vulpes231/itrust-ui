import React from "react";

const Label = ({ title }) => {
  return (
    <label
      htmlFor=""
      className="inline-flex font-medium capitalize text-sm text-slate-600 dark:text-slate-200 cursor-pointer mb-2"
    >
      {title}
    </label>
  );
};

export default Label;

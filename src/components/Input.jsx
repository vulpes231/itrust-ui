import React from "react";

const Input = ({
  type,
  name,
  value,
  placeHolder,
  handleChange,
  customClass,
  error,
}) => {
  // console.log(error);
  return (
    <input
      type={type}
      name={name}
      placeholder={placeHolder}
      value={value}
      onChange={handleChange}
      className={`z-10 w-full rounded-md text-xs dark:bg-white bg-slate-950 dark:border-slate-200 border-slate-800 focus:border-purple-500 py-2 px-4 border-2 outline-none ${customClass} placeholder:font-thin ${
        error && " outline-red-500"
      }`}
      autoComplete="off"
    />
  );
};

export default Input;

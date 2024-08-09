import React from "react";

const Input = ({
  type,
  name,
  value,
  placeHolder,
  handleChange,
  customClass,
}) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeHolder}
      value={value}
      onChange={handleChange}
      className={`p-2 w-full dark:bg-white bg-slate-800 border-2 focus:border-purple-500 outline-none placeholder:text-xs placeholder:font-thin dark:border-slate-200 ${customClass}`}
      autoComplete="off"
    />
  );
};

export default Input;

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
      className={`z-10 w-full rounded-md text-sm/[1.125rem] dark:bg-white bg-slate-950 dark:border-slate-200 border-slate-800 focus:border-purple-500 py-2 px-4 border-2 outline-none ${customClass}`}
      autoComplete="off"
    />
  );
};

export default Input;

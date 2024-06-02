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
      className={`w-full border ${customClass} p-2 outline-[#2563EB] font-normal`}
      autoComplete="off"
    />
  );
};

export default Input;

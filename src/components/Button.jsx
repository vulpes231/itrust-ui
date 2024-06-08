import React from "react";
import { styles } from "../constants/styles";

const Button = ({ type, title, handleClick, customClass }) => {
  return (
    <button
      className={`inline-flex justify-center items-center font-medium transition-all text-sm px-5 py-2 gap-3 w-full rounded-md bg-blue-600 text-white hover:bg-blue-800`}
      type={type}
      onClick={handleClick}
    >
      {title}
    </button>
  );
};

export default Button;

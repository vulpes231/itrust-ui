import React from "react";
import { styles } from "../constants/styles";

const Button = ({ type, title, handleClick }) => {
  return (
    <button
      className={`${styles.colors.primaryBgColor} py-2 px-6 rounded-sm text-[#fff] capitalize mt-4`}
      type={type}
      onClick={handleClick}
    >
      {title}
    </button>
  );
};

export default Button;

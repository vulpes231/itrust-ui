import React from "react";
import { Link } from "react-router-dom";
import { styles } from "../constants/styles";
// Link

const Getstartedbtn = () => {
  return (
    <Link
      to={"/signup"}
      className={`py-2.5 px-10  rounded-3xl ${styles.colors.primaryBgColor} text-white w-[180px] capitalize text-center text-xs font-medium`}
    >
      get started
    </Link>
  );
};

export default Getstartedbtn;

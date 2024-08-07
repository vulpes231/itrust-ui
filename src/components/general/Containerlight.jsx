import React from "react";

const Containerlight = ({ children }) => {
  return (
    <div className=" dark:bg-slate-900  dark:text-white text-xs font-medium px-5 ">
      {children}
    </div>
  );
};

export default Containerlight;

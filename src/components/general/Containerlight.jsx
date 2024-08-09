import React from "react";

const Containerlight = ({ children }) => {
  return (
    <div className=" dark:bg-white dark:text-slate-950 text-xs font-medium px-5 ">
      {children}
    </div>
  );
};

export default Containerlight;

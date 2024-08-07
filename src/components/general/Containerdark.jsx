import React from "react";

const Containerdark = ({ children }) => {
  return (
    <div className=" bg-[#000] text-white dark:text-white text-xs font-medium px-5">
      {children}
    </div>
  );
};

export default Containerdark;

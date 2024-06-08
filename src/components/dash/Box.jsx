import React from "react";

const Box = ({ children, customClass }) => {
  return (
    <div
      className={`w-full rounded-md p-5 ${customClass} flex flex-col gap-3 h-[160px] shadow-sm`}
    >
      {children}
    </div>
  );
};

export default Box;

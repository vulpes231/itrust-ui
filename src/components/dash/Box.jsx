import React from "react";

const Box = ({ children, customClass }) => {
  return <div className={`w-full xs:w-1/2 lg:w-1/4 p-3`}>{children}</div>;
};

export default Box;

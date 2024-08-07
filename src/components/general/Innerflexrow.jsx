import React from "react";

const Innerflexrow = ({ children }) => {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center gap-6 py-10 w-full">
      {children}
    </div>
  );
};

export default Innerflexrow;

import React from "react";

const Copymodal = ({ copy, icon, msg }) => {
  return (
    <div className="fixed top-0 right-0 bg-white w-100 h-20 flex items-center justify-center">
      <div className="flex items-center gap-1">
        <small>{icon}</small>
        <small>{msg}</small>
      </div>
    </div>
  );
};

export default Copymodal;

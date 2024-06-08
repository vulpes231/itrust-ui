import React from "react";

const Balance = ({ title, value }) => {
  return (
    <span className="capitalize">
      <small className="text-slate-300 text-xs font-normal"> {title}</small>
      <h4 className="font-bold">$ {value}</h4>
    </span>
  );
};

export default Balance;

import React from "react";
import { cicon } from "../../assets";
cicon;

const Analytics = ({ value, title }) => {
  return (
    <div className="flex items-center text-[#333] gap-2">
      <img src={cicon} alt="" className="w-30px" />
      <div>
        <h1 className="text-xl lg:text-3xl font-bold">{value}</h1>
        <p className="font-thin text-xs capitalize">{title}</p>
      </div>
    </div>
  );
};

export default Analytics;

import React from "react";

const Feat = ({ img, title, info }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <img src={img} alt="" className="w-[35px]" />
      <h3 className="font-semibold text-lg capitalize text-white">{title}</h3>
      <p className="text-center font-thin text-xs text-slate-300">{info}</p>
    </div>
  );
};

export default Feat;

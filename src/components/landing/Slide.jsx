import React from "react";

const Slide = ({ img, title, info }) => {
  return (
    <div className="flex flex-col gap-4 text-xs bg-white bg-opacity-15 p-6 sm:w-[250px] h-[180px] w-full rounded-xl">
      <img src={img} alt="" className="w-[42px]" />
      <span className="font-bold text-lg">{title}</span>
      <span className="whitespace-wrap text-slate-300">{info}</span>
    </div>
  );
};

export default Slide;

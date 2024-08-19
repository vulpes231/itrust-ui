import React from "react";
import { aside } from "../../assets";

const Aboutcompany = () => {
  return (
    <div className=" bg-[#000] text-white text-xs font-medium px-5">
      <div className="flex flex-col lg:flex-row gap-6 py-10 lg:mx-32 ">
        <div className=" pl-16 w-full flex flex-col gap-6 justify-center place-items-center">
          <h3 className=" text-xl lg:text-4xl font-bold capitalize  w-full">
            about us
          </h3>
          <small className="text-slate-500 text-sm font-thin break-words">
            We’re on a mission to democratize finance for all. <br /> At QuadX
            our values are in service of our customers. We strive to uphold our
            values every day.
          </small>
        </div>
        <figure className="w-full flex items-center justify-center">
          <img src={aside} alt="" className="w-full lg:w-[350px]" />
        </figure>
      </div>
    </div>
  );
};

export default Aboutcompany;

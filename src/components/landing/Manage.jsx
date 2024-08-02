import React from "react";
import { last } from "../../assets";

const Manage = () => {
  return (
    <div className="px-5 sm:px-20 py-20 flex flex-col-reverse gap-4 sm:flex-row sm:items-center pt-20 lg:pt-12 ">
      <div className="flex flex-col lg:flex-row gap-4 w-full text-[#333] dark:text-white lg:mx-32 items-center lg:gap-2">
        <div className="space-y-5 lg:w-[60%]">
          <h5 className="capitalize text-xl sm:text-3xl font-bold">
            Manage your portfolio in one <br /> tap with the QuadX mobile <br />{" "}
            app
          </h5>
          <p className="font-thin text-xs text-slate-500">
            Download the mobile application, track strategy statistics, launch
            bots, and close <br /> orders. Whether you’re at home or on the
            road, manage your portfolio anywhere.
          </p>
        </div>
        <figure>
          <img src={last} alt="" className="lg:w-[350px]" />
        </figure>
      </div>
    </div>
  );
};

export default Manage;

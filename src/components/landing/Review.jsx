import React from "react";
import Star from "./Star";

const Review = ({ review, name }) => {
  return (
    <div className="flex flex-col text-[#333] justify-between gap-4 bg-green-50 rounded-xl shadow p-6 w-full ">
      <Star />
      <h6 className="font-bold text-lg">{review}</h6>
      <div className=" flex flex-col gap-1 font-thin">
        <span className="text-sm">{name}</span>
        <small className="text-green-800">Trustpilot.com</small>
      </div>
    </div>
  );
};

export default Review;

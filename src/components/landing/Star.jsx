import React from "react";
import { MdStar } from "react-icons/md";
const Star = () => {
  return (
    <span className="flex gap-0.5 items-center">
      <MdStar className="h-3 w-3 bg-green-500" />
      <MdStar className="h-3 w-3 bg-green-500" />
      <MdStar className="h-3 w-3 bg-green-500" />
      <MdStar className="h-3 w-3 bg-green-500" />
      <MdStar className="h-3 w-3 bg-green-500" />
    </span>
  );
};

export default Star;

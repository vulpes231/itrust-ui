import React from "react";
import { Link } from "react-router-dom";

const Sidebarlink = ({ title, icon }) => {
  return (
    <li className="flex items-center gap-3 lg:gap-2 capitalize hover:text-[#2563EB] cursor-pointer">
      <span>{icon}</span>
      <Link>{title}</Link>
    </li>
  );
};

export default Sidebarlink;

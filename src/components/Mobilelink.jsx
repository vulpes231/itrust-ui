import React from "react";
import { Link } from "react-router-dom";

const Mobilelink = ({ title, icon, path }) => {
  return (
    <li>
      <Link
        to={path}
        className="flex flex-col items-center text-slate-950 dark:text-slate-200 hover:text-blue-500"
      >
        <span className="h-4">{icon}</span>
        <span className="whitespace-nowrap text-[7px] font-light capitalize">
          {" "}
          {title}
        </span>
      </Link>
    </li>
  );
};

export default Mobilelink;

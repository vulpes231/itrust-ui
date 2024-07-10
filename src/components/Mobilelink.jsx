import React from "react";
import { Link } from "react-router-dom";
import { styles } from "../constants/styles";

const Mobilelink = ({ title, icon, path }) => {
  return (
    <li>
      <Link
        to={path}
        className={`flex flex-col items-center text-slate-950 dark:text-slate-200 ${styles.hover.lightBg} `}
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

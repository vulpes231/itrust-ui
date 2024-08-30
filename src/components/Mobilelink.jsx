import React from "react";
import { Link } from "react-router-dom";
import { styles } from "../constants/styles";

const Mobilelink = ({ title, icon, path }) => {
  return (
    <li>
      <Link
        to={path}
        className={`flex flex-col items-center gap-1 ${styles.hover.lightBg} `}
      >
        <span>{icon}</span>
        <span className="whitespace-nowrap text-[8px] font-light capitalize">
          {title}
        </span>
      </Link>
    </li>
  );
};

export default Mobilelink;

import React from "react";
import { Link } from "react-router-dom";
import { styles } from "../constants/styles";

const Mobilelink = ({ title, icon, path }) => {
  return (
    <li>
      <Link
        to={path}
        className={`flex flex-col items-center ${styles.hover.lightBg} `}
      >
        <span className="h-4">{icon}</span>
        <span className="whitespace-nowrap text-[10px] font-light capitalize">
          {" "}
          {title}
        </span>
      </Link>
    </li>
  );
};

export default Mobilelink;

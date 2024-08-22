import React from "react";
import { Link } from "react-router-dom";
import { styles } from "../constants/styles";

const Sidebarlink = ({ title, icon, path, closeMenu }) => {
  return (
    <li className="relative menu-item group [&amp;>*]:text-purple-600 [&amp;>*]:dark:text-purple-600 active current">
      <span
        className={`flex items-center gap-2 font-medium text-xs ${styles.hover.lightText}  has-toggle menu-link py-2 xl:py-3 active capitalize whitespace-nowrap`}
      >
        <span>{icon}</span>
        <Link onClick={closeMenu} to={path}>
          {title}
        </Link>
      </span>
    </li>
  );
};

export default Sidebarlink;

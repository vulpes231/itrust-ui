import React from "react";
import { Link } from "react-router-dom";

const Sidebarlink = ({ title, icon, path, closeMenu }) => {
  return (
    <li className="relative menu-item group [&amp;>*]:text-blue-600 [&amp;>*]:dark:text-blue-600 active current">
      <span className="flex items-center gap-2 font-medium text-sm hover:text-blue-600 hover:dark:text-blue-600 has-toggle menu-link py-2 xl:py-3 text-slate-700 dark:text-slate-100 [&amp;.active]:dark:text-blue-600 group-hover:text-blue-600 active capitalize">
        <span>{icon}</span>
        <Link onClick={closeMenu} to={path}>
          {title}
        </Link>
      </span>
    </li>
  );
};

export default Sidebarlink;

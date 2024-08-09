import React from "react";
import { Link } from "react-router-dom";

const subLinks = [
  {
    id: 1,
    title: "faq",
    path: "",
  },
  {
    id: 2,
    title: "get started",
    path: "",
  },
  {
    id: 3,
    title: "blog",
    path: "",
  },
];

const Learn = ({ activeLink }) => {
  return (
    <ul
      className={`flex flex-col p-6 gap-4 dark:bg-white bg-slate-950 text-white dark:text-slate-950 absolute top-[60px] ${
        activeLink === "learn" ? `right-[40%]` : `hidden`
      } rounded-bl-md rounded-br-md `}
    >
      {subLinks.map((link) => {
        return (
          <li key={link.id}>
            <Link className="font-thin uppercase text-xs" to={link.path}>
              {link.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Learn;

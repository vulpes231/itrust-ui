import React from "react";
import { Link } from "react-router-dom";

const subLinks = [
  {
    id: 1,
    title: "automated trading",
    path: "/autotrade",
  },
  {
    id: 2,
    title: "dca bots",
    path: "/dca",
  },
  {
    id: 3,
    title: "copy bots",
    path: "/copy",
  },
  {
    id: 4,
    title: "ai trading",
    path: "/ai",
  },
  {
    id: 5,
    title: "pro tools",
    path: "/protool",
  },
  {
    id: 6,
    title: "exchange",
    path: "",
  },
  {
    id: 7,
    title: "get funded",
    path: "/getfunded",
  },
];

const Why = () => {
  // console.log(activeLink);
  return (
    <ul
      className={`flex flex-col p-6 gap-4 dark:bg-white bg-slate-950 text-white dark:text-slate-950 absolute top-[60px] rounded-bl-md rounded-br-md `}
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

export default Why;

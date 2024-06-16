import React, { useState } from "react";
import {
  MdClose,
  MdHome,
  MdLogout,
  MdMenu,
  MdMoney,
  MdPolymer,
  MdSettings,
} from "react-icons/md";
import { FaUser } from "react-icons/fa";
import Sidebarlink from "./Sidebarlink";

const Menu = ({ handleLogout }) => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle((prev) => !prev);
  };

  const closeMenu = () => {
    setToggle(false);
  };

  return (
    <div>
      <button
        onClick={handleToggle}
        className="inline-flex items-center justify-center h-8 w-8 rounded-full overflow-hidden transition-all text-slate-400 hover:bg-slate-200 hover:dark:bg-slate-800 hover:text-slate-600 hover:dark:text-slate-200 ui-open:bg-slate-200 ui-open:dark:bg-slate-800 ui-open:text-slate-600 ui-open:dark:text-slate-200"
      >
        <MdMenu />
      </button>
      <div
        className={
          toggle
            ? "flex flex-col py-4 xl:py-0 w-64 xl:w-auto fixed xl:transition-none xl:static start-0 top-0 border-e border-slate-200 dark:border-slate-800 xl:border-e-0 bg-white dark:bg-slate-950 z-[1020] h-screen xl:h-auto flex-shrink-0 xl:translate-x-0 transition-all"
            : "hidden"
        }
      >
        <ul className="flex flex-col xl:flex-row xl:items-center gap-x-6 px-4 menu-base">
          <span
            onClick={closeMenu}
            className="flex justify-end text-xl cursor-pointer"
          >
            <MdClose />
          </span>

          <Sidebarlink title={"account"} icon={<MdHome />} />
          <Sidebarlink title={"wallet"} icon={<MdPolymer />} />
          <Sidebarlink title={"cashier"} icon={<MdMoney />} />
          <Sidebarlink title={"trading"} icon={<FaUser />} />
          <Sidebarlink title={"profile"} icon={<MdSettings />} />
          <li
            onClick={handleLogout}
            className="elative menu-item group [&amp;>*]:text-blue-600 [&amp;>*]:dark:text-blue-600 active current mt-16"
          >
            <span className="flex items-center gap-2 font-medium text-sm hover:text-blue-600 hover:dark:text-blue-600 has-toggle menu-link py-2 xl:py-3 text-slate-700 dark:text-slate-100 [&amp;.active]:dark:text-blue-600 group-hover:text-blue-600 active capitalize cursor-pointer">
              <MdLogout />
              logout
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;

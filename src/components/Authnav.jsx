import React, { useEffect, useState } from "react";
import { logoutUser } from "../features/logoutSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  MdCloudSync,
  MdHome,
  MdOutlineCurrencyExchange,
  MdPolymer,
  MdSunny,
  MdNightlightRound,
} from "react-icons/md";
import Menu from "./Menu";
import Sidebarlink from "./Sidebarlink";
import { FaMoneyCheck, FaUser } from "react-icons/fa";
import Navmenu from "./Navmenu";

const Authnav = ({ handleModeToggle, darkMode }) => {
  const dispatch = useDispatch();
  const { error, success, loading } = useSelector((state) => state.logout);

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logoutUser());
  };

  useEffect(() => {
    if (success) {
      sessionStorage.clear();
      window.location.reload();
    }
  }, [success, dispatch]);

  return (
    <header className="isolate fixed top-0 start-0 w-full py-4 xl:py-3 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 z-[1020] px-3">
      <div className="container px-3">
        <nav className="flex items-center w-100 justify-between">
          <div className="flex items-center gap-x-2">
            <div className="xl:hidden -ms-1.5">
              <Menu handleLogout={handleLogout} />
            </div>

            <h1 className="flex-shrink-0">Quadx.io</h1>
          </div>
          <ul className="hidden lg:flex items-center gap-10 text-xs font-thin text-[#333]">
            <Sidebarlink title={"account"} icon={<MdHome />} />
            <Sidebarlink title={"wallet"} icon={<MdPolymer />} />
            <Sidebarlink title={"cashier"} icon={<FaMoneyCheck />} />
            <Sidebarlink
              title={"trading"}
              icon={<MdOutlineCurrencyExchange />}
            />
            <Sidebarlink title={"profile"} icon={<FaUser />} />
          </ul>
          <ul className="flex items-center gap-x-3 lg:gap-x-5">
            <li className="inline-flex relative">
              <button
                onClick={handleModeToggle}
                className="inline-flex items-center justify-center h-8 w-8 rounded-full overflow-hidden transition-all text-slate-400 hover:text-slate-600 hover:bg-slate-200 dark:text-slate-300 dark:bg-slate-800"
              >
                {darkMode ? <MdNightlightRound /> : <MdSunny />}
              </button>
            </li>
            <li className="inline-flex relative">
              <Navmenu handleLogout={handleLogout} />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Authnav;

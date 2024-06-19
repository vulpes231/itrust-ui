import React, { useEffect, useState } from "react";
import { logoutUser } from "../features/logoutSlice";
import { useDispatch, useSelector } from "react-redux";

import { LuBot, LuArchive } from "react-icons/lu";
import { IoWalletOutline } from "react-icons/io5";
import { LiaBusinessTimeSolid } from "react-icons/lia";
import { GoHome } from "react-icons/go";

import { MdSunny, MdNightlightRound } from "react-icons/md";

import Menu from "./Menu";
import Sidebarlink from "./Sidebarlink";
import Navmenu from "./Navmenu";
import { useNavigate } from "react-router-dom";
import Logoutmodal from "./dash/Logoutmodal";
import Mobilelink from "./Mobilelink";

const Authnav = ({ handleModeToggle, darkMode }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error, success, loading } = useSelector((state) => state.logout);

  const handleLogout = (e) => {
    e.preventDefault();

    dispatch(logoutUser());
    console.log("Dispatched");
  };
  useEffect(() => {
    if (success) {
      console.log("Clearing cookies");
      document.cookie.split(";").forEach((c) => {
        document.cookie = c
          .replace(/^ +/, "")
          .replace(/=.*/, `=;expires=${new Date().toUTCString()};path=/`);
      });
      sessionStorage.removeItem("accessToken");
      sessionStorage.clear();
      navigate("/signin");
      window.location.reload();
    }
  }, [success]);

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
            <Sidebarlink title={"account"} icon={<GoHome />} path={"/dash"} />
            <Sidebarlink
              title={"portfolio"}
              icon={<LiaBusinessTimeSolid />}
              path={"/portfolio"}
            />
            <Sidebarlink
              title={"wallet"}
              icon={<IoWalletOutline />}
              path={"/wallet"}
            />
            <Sidebarlink
              title={"trading bots"}
              icon={<LuBot />}
              path={"/tradingbot"}
            />
            <Sidebarlink
              title={"history"}
              icon={<LuArchive />}
              path={"/history"}
            />
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
        {loading && <Logoutmodal />}
      </div>
      {/* mobile menu */}
      <div className="fixed bottom-0 left-0 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 sm:hidden w-full py-4 px-5">
        <ul className="flex items-center justify-between">
          <Mobilelink title={"account"} icon={<GoHome />} path={"/dash"} />
          <Mobilelink
            title={"portfolio"}
            icon={<LiaBusinessTimeSolid />}
            path={"/portfolio"}
          />
          <Mobilelink
            title={"wallet"}
            icon={<IoWalletOutline />}
            path={"/wallet"}
          />
          <Mobilelink
            title={"trading bots"}
            icon={<LuBot />}
            path={"/tradingbot"}
          />
          <Mobilelink
            title={"history"}
            icon={<LuArchive />}
            path={"/history"}
          />
        </ul>
      </div>
    </header>
  );
};

export default Authnav;

// Navbar.js
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MdCloudSync, MdMenu, MdSunny } from "react-icons/md";
import { styles } from "../constants/styles";
import { TitleContext } from "../contexts/TitleContext";
import { navLinks } from "../constants";

const Navbar = () => {
  const { title } = useContext(TitleContext);

  const myLinks = navLinks.map((link) => {
    return (
      <li key={link.id} className={`hover:text-[#2563EB]`}>
        <Link>{link.name}</Link>
      </li>
    );
  });

  return (
    <header
      className={`isolate fixed top-0 start-0 w-full py-4 xl:py-3 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 z-[1020] px-3`}
    >
      <div className="container px-3"></div>
      <nav className={`flex items-center w-100 justify-between`}>
        <div className="flex items-center gap-x-2">
          <div className="flex items-center gap-x-2">
            <div className="xl:hidden -ms-1.">
              <button className="inline-flex items-center justify-center h-8 w-8 rounded-full overflow-hidden transition-all text-slate-400 hover:bg-slate-200 hover:dark:bg-slate-800 hover:text-slate-600 hover:dark:text-slate-200 ui-open:bg-slate-200 ui-open:dark:bg-slate-800 ui-open:text-slate-600 ui-open:dark:text-slate-200">
                <MdMenu />
              </button>
            </div>
            <Link to={"/"} className="flex-shrink-0">
              <div className="flex items-center">
                <h1 className="h-6 flex items-center dark:hidden">
                  <MdCloudSync /> Quadx.io
                </h1>
                <h1 className="h-6 hidden text-[#fff] dark:flex items-center gap-1">
                  <MdCloudSync /> Quadx.io
                </h1>
              </div>
            </Link>
          </div>
        </div>
        <div className="flex flex-col py-4 xl:py-0 w-64 xl:w-auto fixed xl:transition-none xl:static start-0 top-0 border-e dark:border-slate-800 xl:border-e-0 bg-white dark:bg-slate-950 z-[1020] h-screen xl:h-auto flex-shrink-0 xl:translate-x-0 transition-all -translate-x-full">
          <ul className="flex flex-col xl:flex-row xl:items-center gap-x-6 px-4 menu-base">
            {myLinks}
          </ul>
        </div>

        <div className="flex items-center gap-x-3 lg:gap-x-5">
          <span className="inline-flex relative">
            <button className="inline-flex items-center justify-center h-8 w-8 rounded-full overflow-hidden transition-all text-slate-400 hover:text-slate-600 hover:bg-slate-200 dark:text-slate-300 dark:bg-slate-800">
              <MdSunny />
            </button>
          </span>
          <span>
            {title === "Quadx - Login" ? (
              <Link
                className={`inline-flex font-medium text-sm bg-blue-600 text-white hover:bg-blue-800 transition-all px-5 py-2 rounded-full`}
                to={"/signup"}
              >
                Sign up
              </Link>
            ) : (
              <Link
                className={`inline-flex font-medium text-sm bg-blue-600 text-white hover:bg-blue-800 transition-all px-5 py-2 rounded-full`}
                to={"/signin"}
              >
                Sign in
              </Link>
            )}
          </span>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

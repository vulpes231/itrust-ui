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
      className={` ${styles.colors.lightBg} h-[60px] w-full flex items-center text-slate-400 fixed top-0 z-10 lg:h-[55px] lg:px-20 shadow-sm`}
    >
      <nav className={`flex justify-between px-4 py-2 items-center w-full`}>
        <div className="flex items-center gap-6">
          <span className="text-2xl md:hidden">
            <MdMenu />
          </span>
          <Link to={"/"} className="flex items-center gap-1 text-slate-600">
            <h1 className="font-bold flex items-center gap-1 text-lg">
              <MdCloudSync /> Quadx.io
            </h1>
          </Link>
        </div>
        <ul className="hidden lg:flex gap-10 text-xs font-normal text-[#333]">
          {myLinks}
        </ul>
        <div className="flex items-center gap-10 ">
          <span className="text-gray-400">
            <MdSunny />
          </span>
          <span>
            {title === "Quadx - Login" ? (
              <Link
                className={`${styles.colors.primaryBgColor} text-[#fff] py-[10px] px-7 rounded-md font-medium text-sm capitalize bg-opacity-90`}
                to={"/signup"}
              >
                Sign up
              </Link>
            ) : (
              <Link
                className={`${styles.colors.primaryBgColor} text-[#fff] py-[10px] px-7 rounded-md font-medium text-sm capitalize bg-opacity-90`}
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

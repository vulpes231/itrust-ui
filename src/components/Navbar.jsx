// Navbar.js
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { MdMenu, MdSunny, MdNightlightRound } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { TitleContext } from "../contexts/TitleContext";
import { navLinks } from "../constants";
import { full } from "../assets";
import { styles } from "../constants/styles";

const Navbar = ({ handleModeToggle, darkMode }) => {
  const { title } = useContext(TitleContext);

  const [activeLink, setActiveLink] = useState(false);

  const myLinks = navLinks.map((link) => {
    return (
      <li
        key={link.id}
        className={`capitalize flex gap-1 items-center ${
          styles.hover.lightText
        } ${
          activeLink === link.id
            ? `${styles.colors.primaryTextColor}`
            : `text-white`
        }`}
        onClick={() => setActiveLink(link.id)}
      >
        <Link>{link.name}</Link>{" "}
        <span>
          <IoIosArrowDown />
        </span>
      </li>
    );
  });

  return (
    <header
      className={`fixed top-0 start-0 w-full py-4 lg:py-3 border-b border-slate-200 dark:border-slate-800 bg-[#fff] dark:bg-[#000] z-[1020] px-6`}
    >
      <nav className={`flex items-center w-100 justify-between `}>
        <div className="flex items-center gap-x-2">
          <div className="xl:hidden -ms-1.">
            <button className="inline-flex items-center justify-center h-8 w-8 rounded-full overflow-hidden transition-all text-slate-400 hover:bg-slate-200 hover:dark:bg-slate-800 hover:text-slate-600 hover:dark:text-slate-200 ui-open:bg-slate-200 ui-open:dark:bg-slate-800 ui-open:text-slate-600 ui-open:dark:text-slate-200">
              <MdMenu />
            </button>
          </div>
          <figure className="dark:bg-slate-200 py-1 px-1.5 rounded-xl">
            <img src={full} alt="logo-image" width={80} />
          </figure>
        </div>

        <ul
          className={`flex flex-col xl:flex-row xl:items-center gap-8 py-2.5 px-6  dark:bg-[#fff] dark:bg-opacity-15 bg-[#333] rounded-3xl text-white font-medium text-sm font-style`}
        >
          {myLinks}
        </ul>

        <div className="flex items-center gap-x-3 lg:gap-x-5">
          <span onClick={handleModeToggle} className="inline-flex relative">
            <button className="inline-flex items-center justify-center h-8 w-8 rounded-full overflow-hidden transition-all text-slate-400 hover:text-slate-600 hover:bg-slate-200 dark:text-slate-300 dark:bg-slate-800">
              {darkMode ? <MdNightlightRound /> : <MdSunny />}
            </button>
          </span>

          <span>
            {title === "Quadx - Login" ? (
              <Link
                className={`inline-flex font-medium text-sm ${styles.colors.primaryBgColor} text-white ${styles.hover.lightBg} transition-all px-5 py-2 rounded-full`}
                to={"/signup"}
              >
                Sign up
              </Link>
            ) : (
              <Link
                className={`inline-flex font-medium text-sm ${styles.colors.primaryBgColor} text-white ${styles.hover.lightBg}  transition-all px-5 py-2 rounded-full`}
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

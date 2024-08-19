// Navbar.js
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdMenu, MdSunny, MdNightlightRound } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { TitleContext } from "../contexts/TitleContext";
import { navLinks } from "../constants";
import { full, whitelogo } from "../assets";
import { styles } from "../constants/styles";
import Why from "./dropdowns/Why";
import Learn from "./dropdowns/Learn";

const Navbar = ({ handleModeToggle, darkMode, activeLink, setActiveLink }) => {
  const { title } = useContext(TitleContext);
  const [showDrop, SetShowDrop] = useState(false);

  const handleSetShowDrop = () => {
    SetShowDrop((prev) => !prev);
  };

  const cancelShowDrop = () => {
    SetShowDrop(false);
  };

  const navigate = useNavigate();

  const myLinks = navLinks.map((link) => {
    return (
      <li
        key={link.id}
        className={`capitalize flex gap-1 items-center ${
          styles.hover.lightText
        } ${activeLink === link.id ? `${styles.colors.primaryTextColor}` : ``}`}
        onClick={() => {
          if (link.path === undefined) {
            handleSetShowDrop();
          } else {
            navigate(link.path);
          }
        }}
      >
        <Link>{link.name}</Link>
      </li>
    );
  });

  return (
    <header
      className={`fixed top-0 start-0 w-full py-4 lg:py-3 border-b z-[1020] px-6 bg-black dark:bg-white`}
    >
      <nav className={`flex items-center w-100 justify-between `}>
        <div className="flex items-center gap-x-2">
          <button className="w-8 h-8 md:hidden">
            <MdMenu />
          </button>

          <Link to={"/"} className=" py-1 px-1.5 rounded-xl">
            {!darkMode ? (
              <img src={whitelogo} alt="logo-image" width={80} />
            ) : (
              <img src={full} alt="logo-image" width={80} />
            )}
          </Link>
        </div>

        <ul
          className={`hidden lg:flex lg:items-center gap-8 py-2.5 px-6 rounded-3xl font-medium text-sm font-style`}
        >
          {myLinks}
        </ul>

        <div className="flex items-center gap-x-3 lg:gap-x-5">
          <span onClick={handleModeToggle} className="inline-flex relative">
            <button className="inline-flex items-center justify-center h-8 w-8 rounded-full overflow-hidden">
              {!darkMode ? <MdNightlightRound /> : <MdSunny />}
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
        {activeLink === "quadx" ? (
          <Why activeLink={activeLink} />
        ) : activeLink === "learn" ? (
          <Learn activeLink={activeLink} />
        ) : null}
      </nav>
    </header>
  );
};

export default Navbar;

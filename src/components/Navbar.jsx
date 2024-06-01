// Navbar.js
import React, { useContext } from "react";
import { logo } from "../assets";
import { Link } from "react-router-dom";
import { MdMenu, MdSunny } from "react-icons/md";
import { styles } from "../constants/styles";
import { TitleContext } from "../contexts/TitleContext";

const Navbar = () => {
  const { title } = useContext(TitleContext);

  return (
    <header
      className={` ${styles.colors.lightBg} h-[80px] w-full flex items-center text-[#95A3B8] shadow-sm shadow-slate-300`}
    >
      <nav className={`flex justify-between px-4 py-2 items-center w-full`}>
        <span>
          <MdMenu className="text-2xl" />
        </span>
        <Link to={"/"} className="flex items-center gap-1">
          <img src={logo} alt="" width={25} />
          <h1 className="font-bold text-xl">Quadx</h1>
        </Link>
        <span>
          <MdSunny />
        </span>
        <span>
          {title === "Quadx - Login" ? (
            <Link
              className={`${styles.colors.primaryBgColor} text-[#fff] py-2 px-6 rounded-xl`}
              to={"/signup"}
            >
              Sign up
            </Link>
          ) : (
            <Link
              className={`${styles.colors.primaryBgColor} text-[#fff] py-3 px-8 rounded-xl`}
              to={"/signin"}
            >
              Sign in
            </Link>
          )}
        </span>
      </nav>
    </header>
  );
};

export default Navbar;

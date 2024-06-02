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
      className={` ${styles.colors.lightBg} h-[60px] w-full flex items-center text-[#95A3B8] shadow-sm shadow-slate-50`}
    >
      <nav className={`flex justify-between px-4 py-2 items-center w-full`}>
        <div className="flex items-center gap-4">
          <span>
            <MdMenu className="text-2xl" />
          </span>
          <Link to={"/"} className="flex items-center gap-1">
            <img src={logo} alt="" width={25} />
            <h1 className="font-bold text-lg lg:text-xl">Quadx</h1>
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <span>
            <MdSunny />
          </span>
          <span>
            {title === "Quadx - Login" ? (
              <Link
                className={`${styles.colors.primaryBgColor} text-[#fff] py-2 px-6 rounded-sm font-light text-sm`}
                to={"/signup"}
              >
                Sign up
              </Link>
            ) : (
              <Link
                className={`${styles.colors.primaryBgColor} text-[#fff] py-2 px-6 rounded-sm font-light text-sm`}
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

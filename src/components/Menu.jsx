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
      <span onClick={handleToggle} className="lg:hidden text-lg text-[#333]">
        <MdMenu />
      </span>
      <div
        className={
          toggle
            ? "absolute top-0 left-0 w-full bg-black bg-opacity-5 h-screen"
            : "hidden"
        }
      >
        <ul className="bg-white w-[75%] md:w-[60%] h-screen flex flex-col gap-6 py-6 px-8 lg:hidden">
          <span
            onClick={closeMenu}
            className="flex justify-end text-xl cursor-pointer"
          >
            <MdClose />
          </span>

          <Sidebarlink title={"home"} icon={<MdHome />} />
          <Sidebarlink title={"portfolio"} icon={<MdPolymer />} />
          <Sidebarlink title={"cashier"} icon={<MdMoney />} />
          <Sidebarlink title={"profile"} icon={<FaUser />} />
          <Sidebarlink title={"settings"} icon={<MdSettings />} />
          <li
            onClick={handleLogout}
            className="flex items-center capitalize gap-3 mt-16"
          >
            <MdLogout />
            logout
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;

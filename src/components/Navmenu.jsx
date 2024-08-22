import React, { useState } from "react";
import { profile } from "../assets";
import Sidebarlink from "./Sidebarlink";
import { MdLogout, MdMoney, MdOutlinePolicy, MdSettings } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { styles } from "../constants/styles";

const Navmenu = ({ handleLogout }) => {
  const [menu, setMenu] = useState(false);
  const showMenu = () => {
    setMenu((prev) => !prev);
  };
  return (
    <div
      onClick={showMenu}
      className="border-2 p-0.5 rounded-full cursor-pointer hover:border-purple-500 flex items-center"
    >
      <img src={profile} alt="" width={30} />
      <div
        className={
          menu
            ? "bg-[#fff] w-[170px] absolute top-[47px] right-1 rounded-md shadow-sm font-[Montserrat]"
            : "hidden"
        }
      >
        <div className="py-2 px-3 flex justify-between items-center">
          <span className="border-2 p-0.5 rounded-full cursor-pointer hover:border-purple-500 flex items-center">
            <img src={profile} alt="" width={30} className="" />
          </span>
          <span className="text-xs flex flex-col">
            <small className="font-bold text-zinc-400">Test User</small>
            <small className="bg-purple-100 py-1 px-2 rounded-lg text-purple-500 font-semibold">
              Balance: $0.00
            </small>
          </span>
        </div>
        <hr />
        <div className="px-3 text-zinc-400 text-xs font-medium">
          <ul className="flex flex-col py-5">
            <Sidebarlink
              title={"profile"}
              icon={<FaUser />}
              path={"/profile"}
            />
            {/* <Sidebarlink title={"change password"} icon={<MdOutlinePolicy />} /> */}
            <Sidebarlink title={"settings"} icon={<MdSettings />} />
            <li
              className={`flex items-center gap-2 font-medium text-xs ${styles.hover.lightText}  has-toggle menu-link py-2 xl:py-3 active capitalize`}
              onClick={handleLogout}
            >
              <MdLogout /> logout
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navmenu;

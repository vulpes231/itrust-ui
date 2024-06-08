import React, { useState } from "react";
import { profile } from "../assets";
import Sidebarlink from "./Sidebarlink";
import { MdLogout, MdMoney, MdSettings } from "react-icons/md";
import { FaUser } from "react-icons/fa";

const Navmenu = ({ handleLogout }) => {
  const [menu, setMenu] = useState(false);
  const showMenu = () => {
    setMenu((prev) => !prev);
  };
  return (
    <div
      onClick={showMenu}
      className="border-2 p-[2.5px] rounded-full cursor-pointer hover:border-[#2563EB]"
    >
      <img src={profile} alt="" width={30} />
      <div
        className={
          menu
            ? "bg-[#fff] w-[170px] absolute top-[57px] right-4 rounded-md shadow-sm font-[Montserrat]"
            : "hidden"
        }
      >
        <div className="py-2 px-3 flex justify-between items-center">
          <span className="border-2 p-[2.5px] rounded-full cursor-pointer hover:border-[#2563EB]">
            <img src={profile} alt="" width={30} className="" />
          </span>
          <span className="text-xs flex flex-col">
            <small className="font-bold text-zinc-400">Test User</small>
            <small className="bg-blue-500 bg-opacity-15 py-1 px-2 rounded-lg text-blue-500 font-semibold">
              Balance: $0.00
            </small>
          </span>
        </div>
        <hr />
        <div className="py-5 px-4 text-zinc-400 text-xs font-medium">
          <ul className="flex flex-col gap-3">
            <Sidebarlink title={"profile"} icon={<FaUser />} />
            <Sidebarlink title={"cashier"} icon={<MdMoney />} />
            <Sidebarlink title={"settings"} icon={<MdSettings />} />
            <li
              className="flex items-center capitalize gap-2"
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

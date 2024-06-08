import React, { useEffect } from "react";
import { logoutUser } from "../features/logoutSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  MdCloudSync,
  MdHome,
  MdMoney,
  MdPolymer,
  MdSettings,
  MdSunny,
} from "react-icons/md";
import { profile } from "../assets";
import Menu from "./Menu";
import Sidebarlink from "./Sidebarlink";
import { FaUser } from "react-icons/fa";

const Authnav = () => {
  const dispatch = useDispatch();
  const { error, success, loading } = useSelector((state) => state.logout);

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logoutUser());
  };

  useEffect(() => {
    if (success) {
      sessionStorage.clear();
      window.location.reload();
    }
  }, [success, dispatch]);

  return (
    <header className="w-full p-4 bg-white shadow fixed top-0 left-0">
      <nav className="flex items-center justify-between">
        <span className="flex items-center gap-4 cursor-pointer">
          <Menu handleLogout={handleLogout} />
          <h1 className="font-semibold flex items-center gap-2 text-lg text-slate-500">
            <MdCloudSync className="" /> Quadx.io
          </h1>
        </span>
        <ul className="hidden lg:flex items-center gap-10 text-xs font-thin text-[#333]">
          <Sidebarlink title={"home"} icon={<MdHome />} />
          <Sidebarlink title={"portfolio"} icon={<MdPolymer />} />
          <Sidebarlink title={"cashier"} icon={<MdMoney />} />
          <Sidebarlink title={"profile"} icon={<FaUser />} />
          <Sidebarlink title={"settings"} icon={<MdSettings />} />
        </ul>
        <span className="flex gap-4 items-center text-[#333] lg:gap-6">
          <MdSunny className="cursor-pointer text-slate-300 lg:text-lg" />
          <div className="border-2 p-[2.5px] rounded-full cursor-pointer">
            <img src={profile} alt="" width={30} />
          </div>
        </span>
      </nav>
    </header>
  );
};

export default Authnav;

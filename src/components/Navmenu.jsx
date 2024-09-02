import React, { useEffect, useState } from "react";
import { profile } from "../assets";
import Sidebarlink from "./Sidebarlink";
import {
  MdEditDocument,
  MdFmdGood,
  MdLogout,
  MdMoney,
  MdOutlinePolicy,
  MdSettings,
  MdSubscriptions,
} from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { styles } from "../constants/styles";
import { getAccessToken } from "../constants";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../features/userSlice";
import { FaGears } from "react-icons/fa6";
import { resetLogin } from "../features/loginSlice";
import { resetLogout } from "../features/logoutSlice";

const Navmenu = ({ handleLogout, success, setToken }) => {
  const dispatch = useDispatch();
  const [menu, setMenu] = useState(false);
  const accessToken = getAccessToken();

  const { user } = useSelector((state) => state.user);

  const showMenu = () => {
    setMenu((prev) => !prev);
  };

  useEffect(() => {
    if (accessToken) {
      dispatch(getUser());
    }
  }, [accessToken]);

  useEffect(() => {
    if (success) {
      console.log("logged out");
      sessionStorage.clear();
      dispatch(resetLogin());
      dispatch(resetLogout());
      // dispatch(resetLogout())
      setToken(false);
    }
  }, [success, dispatch]);

  return (
    <div
      onClick={showMenu}
      className="border-2 p-0.5 rounded-full cursor-pointer hover:border-purple-500 flex items-center"
    >
      <img src={profile} alt="" width={30} />
      <div
        className={
          menu
            ? "bg-slate-950 border dark:border-none text-white dark:bg-white dark:text-slate-950 w-[170px] absolute top-[47px] right-1 rounded-md shadow-sm font-[Montserrat]"
            : "hidden"
        }
      >
        <div className="py-2 px-3 flex justify-between items-center">
          <span className="border-2 p-0.5 rounded-full cursor-pointer hover:border-purple-500 flex items-center">
            <img src={profile} alt="" width={30} className="" />
          </span>
          <span className="text-xs flex flex-col">
            <small className="font-bold capitalize">{user?.username}</small>
            <small className="bg-purple-100 bg-opacity-15 py-1 px-2 rounded-lg text-purple-500 font-semibold">
              Balance: $0.00
            </small>
          </span>
        </div>
        <hr />
        <div className="px-3 text-xs font-medium">
          <ul className="flex flex-col py-5">
            <Sidebarlink
              title={"rewards"}
              icon={<MdFmdGood />}
              path={"/rewards"}
            />
            <Sidebarlink
              title={"plans"}
              icon={<MdSubscriptions />}
              path={"/plans"}
            />
            <Sidebarlink
              title={"documents"}
              icon={<MdEditDocument />}
              path={"/docs"}
            />

            <Sidebarlink
              title={"settings"}
              icon={<FaGears />}
              path={"/settings"}
            />

            <button
              className={`flex items-center gap-2 font-medium text-xs ${styles.hover.lightText}  has-toggle menu-link py-2 xl:py-3 active capitalize`}
              onClick={handleLogout}
            >
              <MdLogout /> logout
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navmenu;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LuBot, LuArchive } from "react-icons/lu";
import { IoWalletOutline } from "react-icons/io5";
import { LiaBusinessTimeSolid } from "react-icons/lia";
import { GoHome } from "react-icons/go";
import { MdSunny, MdNightlightRound } from "react-icons/md";
import Menu from "./Menu";
import Sidebarlink from "./Sidebarlink";
import Navmenu from "./Navmenu";
import { Link, useNavigate } from "react-router-dom";
import Mobilelink from "./Mobilelink";
import { full, whitelogo } from "../assets";
import { styles } from "../constants/styles";
import { getAccessToken } from "../constants";
import { getUser } from "../features/userSlice";
import Unverified from "./Unverified";

const Authlink = ({ title, icon, path, handleLinkClick }) => {
  return (
    <li className="relative menu-item group [&amp;>*]:text-purple-600 [&amp;>*]:dark:text-purple-600 active current">
      <Link
        onClick={handleLinkClick}
        to={path}
        className={`flex flex-col md:flex-row items-center gap-1 font-medium text-xs ${styles.hover.lightText}  has-toggle menu-link py-2 xl:py-3 active capitalize whitespace-nowrap`}
      >
        <span>{icon}</span>
        <span className="text-[8px] lg:text-xs">{title}</span>
      </Link>
    </li>
  );
};

const Authnav = ({
  handleModeToggle,
  darkMode,
  handleLogout,
  success,
  setToken,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [verifyError, setVerifyError] = useState(false);
  const { user } = useSelector((state) => state.user);

  const accessToken = getAccessToken();

  useEffect(() => {
    if (accessToken) {
      dispatch(getUser());
    }
  }, [accessToken, dispatch]);

  const handleLinkClick = (e, path) => {
    e.preventDefault();
    if (user?.isKYCVerified) {
      navigate(path);
    } else {
      setVerifyError(true);
    }
  };

  useEffect(() => {
    let timeout;
    if (verifyError) {
      timeout = 2000;
      setTimeout(() => {
        setVerifyError(false);
      }, timeout);
    }
    () => clearTimeout(timeout);
  }, [verifyError]);

  return (
    <header className="isolate fixed top-0 start-0 w-full py-4 xl:py-3 bg-black dark:bg-white z-[1020] px-3">
      <div className="container px-3">
        <nav className="flex items-center w-100 justify-between">
          <div className="flex items-center gap-x-2">
            <div className="xl:hidden -ms-1.5">
              <Menu handleLogout={handleLogout} />
            </div>

            <Link className=" py-1 px-1.5 rounded-xl">
              {!darkMode ? (
                <img src={whitelogo} alt="logo-image" width={80} />
              ) : (
                <img src={full} alt="logo-image" width={80} />
              )}
            </Link>
          </div>
          <ul className="hidden lg:flex items-center gap-10 text-xs font-thin ">
            <Sidebarlink title={"account"} icon={<GoHome />} path={"/dash"} />
            <Sidebarlink
              title={"portfolio"}
              icon={<LiaBusinessTimeSolid />}
              path={"/portfolio"}
            />
            <Sidebarlink
              title={"wallet"}
              icon={<IoWalletOutline />}
              path={"/wallet"}
            />
            <Authlink
              title={"trading bots"}
              icon={<LuBot />}
              path={"/tradingbot"}
              handleLinkClick={(e) => handleLinkClick(e, "/tradingbot")}
            />
            <Authlink
              title={"history"}
              icon={<LuArchive />}
              path={"/history"}
              handleLinkClick={(e) => handleLinkClick(e, "/history")}
            />
          </ul>
          <ul className="flex items-center gap-x-3 lg:gap-x-5">
            <li className="inline-flex relative">
              <button
                onClick={handleModeToggle}
                className="inline-flex items-center justify-center h-8 w-8 rounded-full overflow-hidden transition-all text-slate-400 hover:text-slate-600 hover:bg-slate-200 dark:text-slate-900 bg-slate-800 dark:bg-slate-200"
              >
                {darkMode ? <MdNightlightRound /> : <MdSunny />}
              </button>
            </li>
            <li className="inline-flex relative">
              <Navmenu
                handleLogout={handleLogout}
                success={success}
                setToken={setToken}
              />
            </li>
          </ul>
        </nav>
      </div>
      {/* mobile menu */}
      <div className="fixed bottom-0 left-0 sm:hidden w-full py-4 px-5 bg-slate-950 dark:bg-white">
        <ul className="flex items-center justify-between">
          <Mobilelink
            title={"account"}
            icon={<GoHome className="text-2xl" />}
            path={"/dash"}
          />
          <Mobilelink
            title={"portfolio"}
            icon={<LiaBusinessTimeSolid className="text-2xl" />}
            path={"/portfolio"}
          />
          <Mobilelink
            title={"wallet"}
            icon={<IoWalletOutline className="text-2xl" />}
            path={"/wallet"}
          />
          <Authlink
            title={"trading bots"}
            icon={<LuBot className="text-2xl" />}
            path={"/tradingbot"}
            handleLinkClick={(e) => handleLinkClick(e, "/tradingbot")}
          />
          <Authlink
            title={"history"}
            icon={<LuArchive className="text-2xl" />}
            path={"/history"}
            handleLinkClick={(e) => handleLinkClick(e, "/tradingbot")}
          />
        </ul>
      </div>
      {verifyError && <Unverified />}
    </header>
  );
};

export default Authnav;

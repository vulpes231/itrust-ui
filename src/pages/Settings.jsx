import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAccessToken } from "../constants";
import { getUser } from "../features/userSlice";
import { TitleContext } from "../contexts/TitleContext";
import { useNavigate } from "react-router-dom";

const Holder = ({ children }) => {
  return (
    <div className="flex justify-between items-center dark:border-slate-200 text-sm font-thin capitalize p-1.5">
      {children}
    </div>
  );
};

const Hr = () => {
  return <hr className=" dark:border-slate-200 border-slate-700 border" />;
};

const Settings = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const accessToken = getAccessToken();
  const { changeTitle } = useContext(TitleContext);
  const [activePage, setActivePage] = useState(0);

  const { user } = useSelector((state) => state.user);

  const handleActivePage = (index) => {
    setActivePage(index);
  };

  useEffect(() => {
    changeTitle("Quadx - User settings");

    if (!accessToken) {
      // dispatch(resetLogin());
      navigate("/signin");
    }
  }, [accessToken]);
  useEffect(() => {
    if (accessToken) {
      dispatch(getUser());
    }
  }, [accessToken]);

  const settingLinks = [
    "Personal information",
    "Investment profile",
    "Investing",
    "Security and privacy",
    "Identity documents",
  ];

  const [toggleID, setToggleID] = useState(false);
  const [togglePOA, setTogglePOA] = useState(false);
  const [togglePass, setTogglePass] = useState(false);

  const handleTogglePOA = () => {
    setTogglePOA((prev) => !prev);
  };
  const handleTogglePass = () => {
    setTogglePass((prev) => !prev);
  };
  const handleToggleID = () => {
    setToggleID((prev) => !prev);
  };

  return (
    <div className="w-full lg:max-w-[1100px] lg:mx-auto py-10 min-h-screen font-[Montserrat]">
      <div className="flex justify-between items-center w-full py-10 text-xs p-2">
        <h3 className="text-sm lg:text-xl capitalize font-semibold">
          settings
        </h3>
        <span className="flex items-center gap-2">
          Dashboard<span>{">"} Settings</span>
        </span>
      </div>
      <div className="grid md:grid-cols-3 w-full">
        <aside className=" p-2">
          <ul className="flex flex-col gap-3">
            {settingLinks.map((link, index) => {
              return (
                <li
                  className="w-full pr-5 text-white dark:text-slate-900"
                  key={index}
                >
                  <div
                    onClick={() => handleActivePage(index)}
                    className={`${
                      activePage === index
                        ? "bg-purple-500 rounded-sm shadow-lg text-white"
                        : "bg-transparent"
                    } p-2 cursor-pointer w-full capitalize font-medium`}
                  >
                    {link}
                  </div>
                </li>
              );
            })}
          </ul>
        </aside>
        <div className="md:col-span-2 w-full ">
          {activePage === 1 && (
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-2">
                <h3 className="font-bold capitalize">personal details</h3>
                <Hr />
                <Holder>
                  <span>employment</span>
                  <span>emp</span>
                </Holder>
                <Hr />
                <Holder>
                  <span>marital status</span>
                  <span>_ _ _</span>
                </Holder>
                <Hr />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-bold capitalize">assets</h3>
                <Hr />
                <Holder>
                  <span>Yearly Income</span>
                  <span>emp</span>
                </Holder>
                <Hr />
                <Holder>
                  <span>Source of Funds</span>
                  <span>_ _ _</span>
                </Holder>
                <Hr />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-bold capitalize">investment</h3>
                <Hr />
                <Holder>
                  <span>goal</span>
                  <span>emp</span>
                </Holder>
                <Hr />
                <Holder>
                  <span>timeline</span>
                  <span>_ _ _</span>
                </Holder>
                <Hr />
                <Holder>
                  <span>experience</span>
                  <span>_ _ _</span>
                </Holder>
                <Hr />
              </div>
            </div>
          )}
          {activePage === 2 && (
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-2">
                <h3 className="font-bold capitalize">investing</h3>
                <Hr />
                <Holder>
                  <span>dividend reinvestment</span>
                  <span>enable dividend reinvestment</span>
                </Holder>
                <Hr />
              </div>
            </div>
          )}
          {activePage === 3 && (
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-2">
                <h3 className="font-bold capitalize px-3">security</h3>
                <Hr />

                <h5
                  onClick={handleTogglePass}
                  className="p-2 bg-slate-800 dark:bg-slate-200 text-purple-700 font-medium cursor-pointer capitalize"
                >
                  change password
                </h5>
                <div
                  className={togglePass ? "flex flex-col gap-4 p-4" : "hidden"}
                >
                  <div className="flex flex-col capitalize">
                    <label htmlFor="">current password</label>
                    <input
                      type="password"
                      className="py-1.5 bg-transparent border border-slate-700 dark:border-slate-200"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="">new password</label>
                    <input
                      type="password"
                      className="py-1.5 bg-transparent border border-slate-700 dark:border-slate-200"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="">confirm password</label>
                    <input
                      type="password"
                      className="py-1.5 bg-transparent border border-slate-700 dark:border-slate-200"
                    />
                  </div>
                  <button className="py-1.5 bg-purple-500 rounded-sm text-white capitalize">
                    update
                  </button>
                </div>

                <Hr />
                <Holder>
                  <span>data sharing and permission</span>
                  <span>enabled</span>
                </Holder>
                <Hr />
              </div>
            </div>
          )}
          {activePage === 4 && (
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-2">
                <h3 className="font-bold capitalize">documents</h3>
                <div>
                  <h5
                    onClick={handleToggleID}
                    className="p-2 bg-slate-800 dark:bg-slate-200 text-purple-700 font-medium cursor-pointer"
                  >
                    ID/Drivers license/Passport
                  </h5>
                  <div className={toggleID ? "flex gap-4 p-4" : "hidden"}>
                    <figure className="border border-slate-700 dark:border-slate-300 w-full lg:w-[30%]">
                      <img src="" alt="" />
                    </figure>
                    <div className=" w-full lg:w-[70%] flex flex-col gap-6 ">
                      <input
                        type="file"
                        className="border border-slate-700 dark:border-slate-300 py-1.5"
                      />
                      <span className="flex justify-end gap-6 ">
                        <button className="bg-red-500 px-5 py-1.5 capitalize shadow-xl text-white rounded-sm">
                          cancel
                        </button>
                        <button className="bg-green-500 px-5 py-1.5 capitalize shadow-xl text-white rounded-sm">
                          upload
                        </button>
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  <h5
                    onClick={handleTogglePOA}
                    className="p-2 bg-slate-800 dark:bg-slate-200 text-purple-700 font-medium cursor-pointer"
                  >
                    Proof of Address
                  </h5>
                  <div className={togglePOA ? "flex gap-4 p-4" : "hidden"}>
                    <figure className="border border-slate-700 dark:border-slate-300 w-full lg:w-[30%]">
                      <img src="" alt="" />
                    </figure>
                    <div className=" w-full lg:w-[70%] flex flex-col gap-6 ">
                      <input
                        type="file"
                        className="border border-slate-700 dark:border-slate-300 py-1.5"
                      />
                      <span className="flex justify-end gap-6 ">
                        <button className="bg-red-500 px-5 py-1.5 capitalize shadow-xl text-white rounded-sm">
                          cancel
                        </button>
                        <button className="bg-green-500 px-5 py-1.5 capitalize shadow-xl text-white rounded-sm">
                          upload
                        </button>
                      </span>
                    </div>
                  </div>
                </div>
                <hr />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Settings;

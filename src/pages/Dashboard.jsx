import React, { useContext, useEffect } from "react";

import { TitleContext } from "../contexts/TitleContext";
import { styles } from "../constants/styles";
import { Account } from "../components";
const Dashboard = () => {
  const { changeTitle } = useContext(TitleContext);

  const username = sessionStorage.getItem("username");
  const accessTokenString = sessionStorage.getItem("accessToken");
  const accessToken = accessTokenString ? JSON.parse(accessTokenString) : null;

  useEffect(() => {
    changeTitle("Quadx - Dashboard");
    if (!accessToken) {
      window.location.href = "/signin";
    }
  }, [accessToken]);

  return (
    <section className="mt-16 p-6 min-h-screen bg-slate-200 bg-opacity-30 font-[Montserrat]">
      <div className="flex justify-between items-center mt-5 text-slate-500">
        <span className="flex flex-col gap-3">
          <h3 className="font-bold text-lg text-slate-700">Overview</h3>
          <small className="text-[10px] capitalize font-medium flex items-center gap-3">
            <span>Home </span>
            <span>{`>`}</span>
            <span>{username}</span>
          </small>
        </span>
        <button
          className={`py-2 px-6 ${styles.colors.primaryBgColor} text-[#fff] border-none capitalize rounded-lg font-medium`}
        >
          deposit
        </button>
      </div>
      <>
        <Account username={username} />
      </>
    </section>
  );
};

export default Dashboard;

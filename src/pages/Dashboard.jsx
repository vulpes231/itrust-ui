import React, { useContext, useEffect } from "react";
import { TitleContext } from "../contexts/TitleContext";
import { styles } from "../constants/styles";
import { Account } from "../components";
import { useNavigate } from "react-router-dom";
import Slider from "../components/dash/Slider";
import Section from "../components/Section";

const Dashboard = () => {
  const { changeTitle } = useContext(TitleContext);
  const username = sessionStorage.getItem("username");
  const accessTokenString = sessionStorage.getItem("accessToken");
  const accessToken = accessTokenString ? JSON.parse(accessTokenString) : null;
  const navigate = useNavigate();
  useEffect(() => {
    changeTitle("Quadx - Dashboard");
    if (!accessToken) {
      // window.location.href = "/signin";
      navigate("/signin");
    }
  }, [accessToken]);

  return (
    <Section>
      <div className="container px-3 font-[Montserrat] space-y-4">
        <div className="mb-7 flex justify-between items-center -mx-3">
          <div className="px-3">
            <h2 className="text-xl font-bold text-slate-700 dark:text-white mb-2">
              Overview
            </h2>
            <ul className="inline-flex items-center text-xs font-medium text-slate-500 dark:text-slate-300 gap-2">
              <li>Home </li>
              <li className="inline-flex items-center mt-0.5">{`>`}</li>
              <li>{username}</li>
            </ul>
          </div>
          <div className="px-3">
            <button
              className={`inline-flex justify-center items-center font-medium transition-all text-sm px-5 py-2 gap-3 rounded-md bg-blue-600 text-white hover:bg-blue-800`}
            >
              Deposit
            </button>
          </div>
        </div>
        <>
          <Account username={username} />
        </>
        <>
          <Slider />
        </>
      </div>
    </Section>
  );
};

export default Dashboard;

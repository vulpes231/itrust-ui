import React, { useContext, useEffect, useState } from "react";
import { TitleContext } from "../contexts/TitleContext";
import { Account } from "../components";
import { useNavigate } from "react-router-dom";
import Slider from "../components/dash/Slider";
import Section from "../components/Section";
import Currencies from "../components/dash/Currencies";

import { coins, getAccessToken } from "../constants";
import { useDispatch, useSelector } from "react-redux";
import { getCoinData } from "../features/coinSlice";
import { styles } from "../constants/styles";

const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { changeTitle } = useContext(TitleContext);
  const { coinData } = useSelector((state) => state.coin);
  const [currentIndex, setCurrentIndex] = useState(0);

  const username = sessionStorage.getItem("username");
  const accessToken = getAccessToken();

  // console.log(accessToken);

  useEffect(() => {
    changeTitle("Quadx - Dashboard");
    if (!accessToken) {
      // window.location.href = "/signin";
      navigate("/signin");
    } else {
      dispatch(getCoinData());
    }
  }, [accessToken]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === coins.length - 1 ? 0 : prevIndex + 1
      );
    }, 6000); // Update every minute

    return () => clearInterval(interval);
  }, []);

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
              className={`inline-flex justify-center items-center font-medium transition-all text-sm px-5 py-2 gap-3 rounded-md ${styles.hover.lightBg}  text-white ${styles.colors.primaryBgColor} `}
            >
              Deposit
            </button>
          </div>
        </div>
        <>
          <Account username={username} />
        </>
        <>
          <Slider coinData={coinData} currentIndex={currentIndex} />
        </>
        <>
          <Currencies coinData={coinData} />
        </>
      </div>
    </Section>
  );
};

export default Dashboard;

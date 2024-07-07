import React, { useContext, useEffect, useState } from "react";
import { TitleContext } from "../contexts/TitleContext";
import { coins, getAccessToken } from "../constants";
import { getCoinData } from "../features/coinSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  Balances,
  Piechart,
  Section,
  Slider,
  Tradinghistory,
  Userchart,
} from "../components";
import { useNavigate } from "react-router-dom";

const Porfolio = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const accessToken = getAccessToken();
  const { changeTitle } = useContext(TitleContext);
  const [currentIndex, setCurrentIndex] = useState(0);
  const username = sessionStorage.getItem("username");

  const { coinData } = useSelector((state) => state.coin);

  useEffect(() => {
    changeTitle("Quadx - Porfolio");

    if (!accessToken) {
      navigate("/signin");
    }
  }, [accessToken]);

  useEffect(() => {
    if (accessToken) {
      dispatch(getCoinData());
    }
  }, []);

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
              Portfolio
            </h2>
            <ul className="inline-flex items-center text-xs font-medium text-slate-500 dark:text-slate-300 gap-2">
              <li>Home </li>
              <li className="inline-flex items-center mt-0.5">{`>`}</li>
              <li>{username}</li>
            </ul>
          </div>
          <div className="px-3">
            <button
              className={`inline-flex justify-center items-center font-medium transition-all text-sm px-5 py-2 gap-3 rounded-md bg-purple-600 text-white hover:bg-purple-800`}
            >
              Deposit
            </button>
          </div>
        </div>
        {/* content */}
        <div className="grid gap-4">
          {/* assets */}
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="col-span-2 flex flex-col gap-4">
              <Balances />
              <Userchart />
            </div>
            <>
              <Piechart />
            </>
          </div>
          {/* slider */}
          <>
            <Slider coinData={coinData} currentIndex={currentIndex} />
          </>
          {/* history */}
          <>
            <Tradinghistory />
          </>
        </div>
      </div>
    </Section>
  );
};

export default Porfolio;

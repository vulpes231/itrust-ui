import React, { useContext, useEffect, useState } from "react";
import { TitleContext } from "../contexts/TitleContext";
import { styles } from "../constants/styles";
import { Account } from "../components";
import { useNavigate } from "react-router-dom";
import Slider from "../components/dash/Slider";
import Section from "../components/Section";
import Currencies from "../components/dash/Currencies";

import { btc, doge, eth, ltc, tether } from "../assets";
import { getAccessToken } from "../constants";
import RecentActivity from "../components/dash/Recentactivity";

const coins = [
  { id: "bitcoin", name: "Bitcoin", icon: btc, abbr: "BTC" },
  { id: "ethereum", name: "Ethereum", icon: eth, abbr: "ETH" },
  { id: "tether", name: "Tether", icon: tether, abbr: "USDT" },
  { id: "dogecoin", name: "Dogecoin", icon: doge, abbr: "DOGE" },
  { id: "litecoin", name: "Litecoin", icon: ltc, abbr: "LTC" },
];

const Dashboard = () => {
  const navigate = useNavigate();
  const { changeTitle } = useContext(TitleContext);
  const [coinData, setCoinData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const username = sessionStorage.getItem("username");
  const accessToken = getAccessToken();

  // console.log(accessToken);

  useEffect(() => {
    changeTitle("Quadx - Dashboard");
    if (!accessToken) {
      // window.location.href = "/signin";
      navigate("/signin");
    }
  }, [accessToken]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://api.coingecko.com/api/v3/simple/price?ids=${coins
          .map((coin) => coin.id)
          .join(",")}&vs_currencies=usd&include_24hr_change=true`
      );
      const data = await response.json();
      const formattedData = coins.map((coin) => ({
        id: coin.id,
        name: coin.name,
        price: data[coin.id].usd,
        change: data[coin.id].usd_24h_change,
        isPositive: data[coin.id].usd_24h_change > 0,
        icon: coin.icon,
        abbr: coin.abbr,
      }));
      setCoinData(formattedData);
    };

    fetchData();

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
          <Slider coinData={coinData} currentIndex={currentIndex} />
        </>
        <>
          <Currencies coinData={coinData} />
        </>
        <div className="grid md:grid-cols-2 lg:grid-cols-3">
          <RecentActivity />
        </div>
      </div>
    </Section>
  );
};

export default Dashboard;

import React, { useState, useEffect } from "react";
import { FaArrowTrendDown, FaArrowTrendUp } from "react-icons/fa6";
import { btc, doge, eth, ltc, tether } from "../../assets";

const coins = [
  { id: "bitcoin", name: "Bitcoin", icon: btc, abbr: "BTC" },
  { id: "ethereum", name: "Ethereum", icon: eth, abbr: "ETH" },
  { id: "tether", name: "Tether", icon: tether, abbr: "USDT" },
  { id: "dogecoin", name: "Dogecoin", icon: doge, abbr: "DOGE" },
  { id: "litecoin", name: "Litecoin", icon: ltc, abbr: "LTC" },
];

const Slider = () => {
  const [coinData, setCoinData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  // console.log(coinData);
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
    <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-x-4">
      {coinData.map((coin, index) => (
        <div
          key={coin.id}
          className={`mb-4 ${
            index !== currentIndex
              ? "hidden lg:flex bg-white dark:bg-slate-950 rounded-lg border border-slate-200 dark:border-slate-800 p-4 flex-col gap-5 w-full "
              : "bg-white dark:bg-slate-950 rounded-lg border border-slate-200 dark:border-slate-800 p-4 flex flex-col gap-5 w-full"
          }`}
        >
          <span className="flex items-center gap-3 capitalize font-semibold text-lg">
            <img src={coin.icon} alt="" className="w-[20px] h-[20px]" />
            <small>{coin.name}</small>
          </span>
          <div className="flex justify-between items-center font-semibold">
            <span>
              <h3>
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                }).format(coin.price)}
              </h3>
              <small
                className={coin.isPositive ? "text-green-500" : "text-red-500"}
              >
                {`${coin.change.toFixed(2)}% (${coin.abbr})`}
              </small>
            </span>
            <span>
              {coin.isPositive ? (
                <FaArrowTrendUp
                  style={{ color: "green", marginLeft: "10px" }}
                />
              ) : (
                <FaArrowTrendDown
                  style={{ color: "red", marginLeft: "10px" }}
                />
              )}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Slider;

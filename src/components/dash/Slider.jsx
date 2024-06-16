import React from "react";
import { FaArrowTrendDown, FaArrowTrendUp } from "react-icons/fa6";

const Slider = ({ coinData, currentIndex }) => {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-5  place-items-center gap-5 text-slate-950 dark:text-slate-200">
      {coinData?.map((coin, index) => (
        <div
          key={coin.id}
          className={`${
            index !== currentIndex
              ? "hidden lg:flex bg-white dark:bg-slate-950 rounded-lg border border-slate-200 dark:border-slate-800 p-4 w-full gap-5 flex-col"
              : "bg-white dark:bg-slate-950 rounded-lg border border-slate-200 dark:border-slate-800 p-4 space-y-5 w-full"
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

import React from "react";
import { Bar, Doughnut, Line } from "react-chartjs-2";

import { Chart as ChartJS } from "chart.js/auto";
import { Piechart } from "..";
import { btc, eth, tether } from "../../assets";
import { getSingleCoinPrice } from "../../constants";

const PieChart = ({ userBalance, coinData }) => {
  const coins = ["BTC", "ETH", "USDT"];

  const amount = [
    userBalance.btcBalance,
    userBalance.ethBalance,
    userBalance.usdtBalance,
  ];

  const btcPrice = getSingleCoinPrice("btc", coinData);
  const ethPrice = getSingleCoinPrice("eth", coinData);
  const usdtPrice = getSingleCoinPrice("usdt", coinData);

  const bp = btcPrice?.price || 0;
  const ep = ethPrice?.price || 0;
  const up = usdtPrice?.price || 0;

  return (
    <div className="dark:bg-white bg-black space-y-5 border dark:border-slate-200 border-slate-800 rounded-lg">
      <div className="flex justify-between items-center p-6">
        <h3 className="capitalize font-medium text-lg">crypto portfolio</h3>
        <select className="flex items-center gap-2 text-xs font-medium bg-transparent border p-1 rounded-lg">
          <option value="">BTC</option>
          <option value="">ETH</option>
          <option value="">USDT</option>
        </select>
      </div>
      <div className="p-6">
        <Doughnut
          data={{
            labels: coins,
            datasets: [
              {
                label: "Amount $",
                data: amount,
              },
            ],
          }}
        />
      </div>
      <div className="flex flex-col">
        <div className="flex justify-between text-xs bg-slate-900 p-3 dark:bg-slate-100">
          <div className="flex items-center gap-2">
            <figure>
              <img src={btc} alt="BTC" width={30} />
            </figure>
            <span>
              <h4>Bitcoin</h4>
              <small>BTC</small>
            </span>
          </div>
          <div className=" text-end">
            <h4>{(userBalance.btcBalance / bp).toFixed(4)} BTC</h4>
            <small>${userBalance.btcBalance}</small>
          </div>
        </div>
        <div className="flex justify-between text-xs bg-slate-700 p-3 dark:bg-slate-300">
          <div className="flex items-center gap-2 ">
            <figure>
              <img src={eth} alt="ETH" width={20} />
            </figure>
            <span>
              <h4>Ethereum</h4>
              <small>ETH</small>
            </span>
          </div>
          <div className="text-end">
            <h4>{(userBalance.ethBalance / ep).toFixed(4)} ETH</h4>
            <small>${userBalance.ethBalance}</small>
          </div>
        </div>
        <div className="flex justify-between text-xs bg-slate-900 p-3 dark:bg-slate-100">
          <div className="flex items-center gap-2 ">
            <figure>
              <img src={tether} alt="USDT" width={30} />
            </figure>
            <span>
              <h4>Tether</h4>
              <small>USDT</small>
            </span>
          </div>
          <div className=" text-end">
            <h4>{(userBalance.usdtBalance / up).toFixed(2)} USDT</h4>
            <small>${userBalance.usdtBalance}</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PieChart;

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
    <div className="bg-white p-6 dark:bg-slate-950 dark:text-slate-200 space-y-5 border border-slate-200 dark:border-slate-800 rounded-lg">
      <div className="flex justify-between items-center">
        <h3 className="capitalize font-medium text-lg">crypto portfolio</h3>
        <select className="flex items-center gap-2 text-xs font-medium bg-transparent border p-1 rounded-lg">
          <option value="">BTC</option>
          <option value="">ETH</option>
          <option value="">USDT</option>
        </select>
      </div>
      <div>
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
      <div className="flex flex-col gap-4">
        <div className="flex justify-between text-xs">
          <div className="flex items-center gap-2 ">
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
        <div className="flex justify-between text-xs">
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
        <div className="flex justify-between text-xs">
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

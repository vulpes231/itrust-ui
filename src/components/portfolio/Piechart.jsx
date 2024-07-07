import React from "react";
import { Bar, Doughnut, Line } from "react-chartjs-2";

import { Chart as ChartJS } from "chart.js/auto";
import { Piechart } from "..";
import { btc, eth, tether } from "../../assets";

const coins = ["BTC", "USDT", "ETH"];

const amount = [100, 50, 20];

const PieChart = () => {
  return (
    <div className="bg-white p-6 dark:bg-slate-950 dark:text-slate-200 space-y-5">
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
            <h4>0.002634764 BTC</h4>
            <small>$12,095</small>
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
            <h4>0.500000 ETH</h4>
            <small>$800</small>
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
            <h4>100.00 USDT</h4>
            <small>$100</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PieChart;

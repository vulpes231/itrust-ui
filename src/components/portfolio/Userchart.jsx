import React from "react";
import { Bar, Line } from "react-chartjs-2";

import { Chart as ChartJS } from "chart.js/auto";

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const earnings = [1, 5, 4, 8, 6, 10, 15, 20, 18, 30, 28, 40, 20, 50, 55];

const Userchart = () => {
  return (
    <div className="bg-white p-6 dark:bg-slate-950 dark:text-slate-200">
      <div className="flex justify-between items-center">
        <h3 className="capitalize font-medium text-lg">
          my portfolio statistics
        </h3>
        <span className="flex items-center gap-2 text-xs font-medium">
          <button className="py-2 px-3 bg-purple-50 text-purple-500">1M</button>
          <button className="py-2 px-3 bg-purple-50 text-purple-500">6M</button>
          <button className="py-2 px-3 bg-purple-50 text-purple-500">1Y</button>
          <button className="py-2 px-3 bg-purple-500 text-white">ALL</button>
        </span>
      </div>
      <div>
        <Line
          data={{
            labels: months,
            datasets: [
              {
                label: "Earnings (Thousand)",
                data: earnings,
                borderRadius: 5,
                borderColor: "gray",
              },
            ],
          }}
        />
      </div>
    </div>
  );
};

export default Userchart;

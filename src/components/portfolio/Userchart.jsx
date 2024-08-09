import React from "react";
import { Bar, Line } from "react-chartjs-2";

import { Chart as ChartJS } from "chart.js/auto";
import { styles } from "../../constants/styles";

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
    <div className="dark:bg-white p-6 bg-slate-950 border dark:border-slate-200 border-slate-800 rounded-lg">
      <div className="flex justify-between items-center">
        <h3 className="capitalize font-medium text-lg">
          my portfolio statistics
        </h3>
        <span className="flex items-center gap-2 text-xs font-medium">
          <button
            className={`py-2 px-3 bg-purple-500 ${styles.colors.primaryBgColor} text-white`}
          >
            1M
          </button>
          <button
            className={`py-2 px-3 bg-purple-500 ${styles.colors.primaryBgColor} text-white`}
          >
            6M
          </button>
          <button
            className={`py-2 px-3 bg-purple-500 ${styles.colors.primaryBgColor} text-white`}
          >
            1Y
          </button>
          <button
            className={`py-2 px-3 ${styles.colors.primaryBgColor} text-white`}
          >
            ALL
          </button>
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
                borderRadius: 2,
                borderColor: "white",
              },
            ],
          }}
        />
      </div>
    </div>
  );
};

export default Userchart;

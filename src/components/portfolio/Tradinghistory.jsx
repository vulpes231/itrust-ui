import React from "react";

const Tradinghistory = () => {
  return (
    <div className="bg-white p-6 dark:bg-slate-950 dark:text-slate-200 rounded-lg space-y-5 border border-slate-200 dark:border-slate-800">
      <div className="flex justify-between items-center">
        <h3 className="capitalize font-medium text-lg">recent trades</h3>
        <button>see all</button>
      </div>
      <div>
        <table className="overflow-auto text-xs min-w-full">
          <thead className="bg-gray-100 text-gray-400 dark:bg-slate-800 dark:text-slate-200 divide text-left">
            <tr className="text-xs p-2 font-medium uppercase">
              <th className="px-4 py-3">copy bot</th>
              <th className="px-4 py-3">date</th>
              <th className="px-4 py-3">amount traded</th>
              <th className="px-4 py-3">pair</th>
              <th className="px-4 py-3">roi</th>
              <th className="px-4 py-3">status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="capitalize">
              <td className="px-4 py-3">swan</td>
              <td className="px-4 py-3">
                <span>
                  <h6 className="font-medium">12/07/2024</h6>
                  <small>12:34am</small>
                </span>
              </td>
              <td className="px-4 py-3">$10,000</td>
              <td className="px-4 py-3">BTC/USDT</td>
              <td className="px-4 py-3">
                <span className="flex flex-col items-center">
                  <h6 className="font-medium">$4000</h6>
                  <small>0.8%</small>
                </span>
              </td>
              <td className="px-4 py-3">
                <span
                  className={`bg-green-100 text-green-500 py-1 px-2 rounded-lg lowercase text-xs`}
                >
                  open
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Tradinghistory;

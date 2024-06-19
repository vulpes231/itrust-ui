import React from "react";
import { FiArrowDownCircle, FiArrowUpCircle } from "react-icons/fi";
const RecentActivity = () => {
  // Custom scrollbar styling CSS
  const scrollbarStyle = `
    /* width */
    ::-webkit-scrollbar {
      width: 8px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      background: #f1f1f1;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: #888;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: #555;
    }
  `;

  return (
    <div className="h-64 bg-white dark:bg-slate-950 rounded-lg border border-slate-200 dark:border-slate-800  overflow-hidden text-slate-950 dark:text-slate-200">
      {/* Add custom style for scrollbar
      <style>{scrollbarStyle}</style> */}

      <div className="flex justify-between items-center p-4 capitalize">
        <h2 className="text-xl font-bold">recent activity</h2>
        <small>sort by: current week</small>
      </div>
      <hr />
      <div className="overflow-y-scroll h-full p-4 ">
        <div className="px-4 py-2 space-y-4">
          <div className="flex justify-between items-center text-xs">
            <span className="flex items-center gap-4">
              <FiArrowDownCircle className="w-5 h-5 text-green-600" />
              <span>
                <h4 className="capitalize">bought bitcoin</h4>
                <small>visa debit card **2345</small>
              </span>
            </span>

            <span className="text-end text-gray-500">
              <h4 className="text-green-500">+0.000345768 BTC</h4>
              <small>+234.34 USD</small>
            </span>
          </div>
          <div className="flex justify-between items-center text-xs">
            <span className="flex items-center gap-4">
              <FiArrowUpCircle className="w-5 h-5 text-red-600" />
              <span>
                <h4 className="capitalize">sold tether</h4>
                <small>wallet balance</small>
              </span>
            </span>

            <span className="text-end text-gray-500">
              <h4 className="text-red-500">-500 USDT</h4>
              <small>-500.00 USD</small>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentActivity;

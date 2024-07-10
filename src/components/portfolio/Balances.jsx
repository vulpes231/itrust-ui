import React from "react";
import { PiHandCoins } from "react-icons/pi";
import { IoWalletOutline } from "react-icons/io5";
import { FaChartLine } from "react-icons/fa6";
import { styles } from "../../constants/styles";
// styles
const Balances = () => {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
      <div className="bg-slate-800 rounded-md border border-slate-800 p-5 h-full text-slate-200 flex flex-col gap-2">
        <span className="flex justify-between">
          <h6 className="font-medium w-max bg-gradient-to-r from-blue-300 to-pink-500 text-transparent bg-clip-text">
            Trading balance
          </h6>
          <IoWalletOutline
            className={`${styles.colors.primaryTextColor} text-2xl text-purple-500`}
          />
        </span>
        <p className="font-semibold text-lg">$0.00</p>
        <p className="capitalize font-normal text-xs">crypto holdings: $0.00</p>
      </div>

      <div className="bg-white rounded-md border border-slate-200 p-5 h-full text-slate-950 flex flex-col gap-2">
        <span className="flex justify-between">
          <h6 className="font-medium text-sm">Today's profit</h6>
          <PiHandCoins
            className={`${styles.colors.primaryTextColor} text-2xl text-purple-500`}
          />
        </span>
        <p className="font-semibold text-lg">$0.00</p>
        <span className="capitalize font-normal text-xs p-1 rounded-md flex">
          <small className="justify-start bg-green-100 py-1 px-2 text-green-500 rounded-md">
            1.27%
          </small>
        </span>
      </div>

      <div className="bg-white rounded-md border border-slate-200 p-5 h-full text-slate-950 flex flex-col gap-2">
        <span className="flex justify-between">
          <h6 className="font-medium text-sm">Average daily earnings</h6>
          <FaChartLine
            className={`${styles.colors.primaryTextColor} text-2xl text-purple-500`}
          />
        </span>
        <p className="font-semibold text-lg">$0.00</p>
        <span className="capitalize font-normal text-xs p-1 rounded-md flex">
          <small className="justify-start bg-green-100 py-1 px-2 text-green-500 rounded-md">
            1.27%
          </small>
        </span>
      </div>
    </div>
  );
};

export default Balances;

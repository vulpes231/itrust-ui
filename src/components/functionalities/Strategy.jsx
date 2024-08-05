import React from "react";
import { MdCheck } from "react-icons/md";
import { tfeat } from "../../assets";

const feats = [
  "strategy builder",
  "130+ Indicators & Candlestick",
  "strategy backtesting",
  "algoritm intelligence",
  "Premium Strategy indicator",
];

const Strategy = () => {
  return (
    <div className=" dark:bg-slate-900 bg-slate-200 dark:text-white text-xs font-medium">
      <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:mx-32 py-28">
        <figure className="w-full">
          <img src={tfeat} alt="" />
        </figure>
        <div className="flex flex-col gap-6 w-full">
          <div className="flex flex-col gap-2">
            <h3 className="text-xl lg:text-3xl font-bold capitalize">
              strategies
            </h3>
            <small className="text-slate-400">
              Don’t let the fear of a market shift keep you up at night. With
              our A.I., your bot can automatically recognize trends and switch
              to a better strategy.
            </small>
          </div>
          <ul className="grid grid-cols-2 ">
            {feats.map((ft, index) => {
              return (
                <li
                  className="flex items-center gap-3 capitalize text-slate-400"
                  key={index}
                >
                  <MdCheck className="text-green-500 font-bold" />
                  <span>{ft}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Strategy;

import React from "react";
import { MdCheck } from "react-icons/md";
import Breaklarge from "../Breaklarge";

const feats = [
  "trailing feature",
  "autoclose",
  "stop loss",
  "DCA",
  "take profit",
  "shorting",
  "copy trading",
];

const Tradingfeat = () => {
  return (
    <div className=" bg-[#000] text-white text-xs font-medium">
      <div className="flex flex-col gap-8 lg:mx-32 py-28">
        <div className="flex flex-col gap-2">
          <h3 className="text-xl lg:text-4xl font-bold capitalize">
            trading features
          </h3>
          <small className="text-slate-500 text-sm font-thin">
            Don’t let the fear of a market shift keep you up at night. With our
            A.I., your bot can automatically <Breaklarge /> recognize trends and
            switch to a better strategy.
          </small>
        </div>
        <ul className="grid grid-cols-2 lg:w-[40%]">
          {feats.map((ft, index) => {
            return (
              <li
                className="flex items-center gap-3 capitalize text-slate-500 text-sm font-thin"
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
  );
};

export default Tradingfeat;

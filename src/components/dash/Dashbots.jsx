import React from "react";
import { MdStar } from "react-icons/md";
const Dashbots = ({ botName, botShort, rating, interest, aum, winRate }) => {
  return (
    <div className="flex flex-col mx-8 rounded shadow  text-xs text-slate-400 dark:text-slate-200">
      <article className="flex justify-between items-center p-4">
        <div className="bg-slate-200 w-10 h-10 shadow rounded-lg">
          <img src="" alt="" />
        </div>
        <span className="capitalize">
          <h3 className="text-slate-950 dark:text-slate-200 font-medium">
            {botName}
          </h3>
          <small>{botShort}</small>
        </span>
        <span className="flex items-center text-slate-950 dark:text-slate-200">
          {rating} <MdStar className="text-yellow-300 text-md" />
        </span>
      </article>
      <article className="flex gap-10 items-center capitalize font-thin p-4">
        <span>
          <small>30D yield</small>
          <h3 className="font-medium">{interest}%</h3>
        </span>
        <span>
          <small>AUM (USDT)</small>
          <h3 className="font-medium">{aum}M</h3>
        </span>
        <span className="">
          <small>win rate</small>
          <h3 className="bg-green-100 text-green-500 py-0.5 px-1 rounded-md">
            {winRate}%
          </h3>
        </span>
      </article>
      <hr />
      <div className="capitalize flex items-end justify-end p-2">
        <button className="bg-purple-500 p-2 text-white rounded-md inline-flex capitalize text-xs font-[Montserrat]">
          add bot
        </button>
      </div>
    </div>
  );
};

export default Dashbots;

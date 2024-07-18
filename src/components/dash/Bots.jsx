import React from "react";
import Dashbots from "./Dashbots";
import { mant, swan, swanny } from "../../assets";

const Bots = ({ title, name, botData }) => {
  const availableBots = botData?.map((bot) => {
    return (
      <div key={bot._id}>
        <Dashbots
          botName={bot.name}
          botShort={bot.info}
          winRate={bot.winRate}
          interest={bot.yield}
          aum={bot.aum}
          rating={bot.rating}
          btnName={name}
          botImg={
            bot.name.includes("swan")
              ? swanny
              : bot.name.includes("mantra")
              ? swan
              : bot.name.includes("great")
              ? mant
              : null
          }
        />
      </div>
    );
  });

  return (
    <div className="overflox-auto">
      <div className="flex flex-col gap-6">
        <h3 className="bg-orange-50 dark:bg-slate-950 dark:text-slate-200 text-center p-3 rounded shadow font-medium text-sm">
          {title}
        </h3>
        {availableBots}
      </div>
    </div>
  );
};

export default Bots;

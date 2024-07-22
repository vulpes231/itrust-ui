import React from "react";
import Dashbots from "../dash/Dashbots";
import { mant, swan, swanny } from "../../assets";
import { MdTimer } from "react-icons/md";

const Activebot = ({ title, name, botData, handleClick }) => {
  const availableBots = botData?.map((bot) => {
    return (
      <div key={bot._id}>
        <Dashbots
          botName={bot.name}
          botShort={bot.info}
          winRate={parseFloat(bot.winRate).toFixed(1)}
          interest={parseFloat(bot.yield).toFixed(1)}
          aum={bot.aum}
          rating={parseFloat(bot.rating).toFixed(1)}
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
          handleClick={handleClick}
          customBg={"bg-green-500 hover:bg-green-700"}
          expiry={`${bot.remainingDays} days`}
          icon={<MdTimer />}
        />
      </div>
    );
  });

  // console.log(title);

  return (
    <div className="overflox-auto">
      <div className="flex flex-col gap-6">
        <h3
          className={`${
            title.includes("Active") ? "bg-green-100" : "bg-orange-100"
          } text-center p-3 rounded shadow font-medium text-sm`}
        >
          {title}
        </h3>
        {availableBots}
      </div>
    </div>
  );
};

export default Activebot;

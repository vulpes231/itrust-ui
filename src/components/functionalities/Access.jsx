import React from "react";
import { styles } from "../../constants/styles";
import { MdStar } from "react-icons/md";
import { btc } from "../../assets";
import { Link } from "react-router-dom";
import Breaklarge from "../Breaklarge";
btc;
const bots = [
  {
    id: 1,
    img: btc,
    botName: "smart swan",
    info: "smart swan services",
    yield: "37%",
    aum: "257m",
    winRate: "84.37%",
    rating: 4.8,
  },
  {
    id: 2,
    img: btc,
    botName: "greatRiver technology",
    info: "information technology",
    yield: "37%",
    aum: "257m",
    winRate: "84.37%",
    rating: 4.8,
  },
  {
    id: 3,
    img: btc,
    botName: "greatRiver technology",
    info: "information technology",
    yield: "37%",
    aum: "257m",
    winRate: "84.37%",
    rating: 4.8,
  },
  {
    id: 4,
    img: btc,
    botName: "smart swan",
    info: "smart swan services",
    yield: "37%",
    aum: "257m",
    winRate: "84.37%",
    rating: 4.8,
  },
  {
    id: 5,
    img: btc,
    botName: "greatRiver technology",
    info: "information technology",
    yield: "37%",
    aum: "257m",
    winRate: "84.37%",
    rating: 4.8,
  },
];

const Access = () => {
  return (
    <div className=" text-xs font-medium overflow-auto">
      <div className="flex flex-col items-center justify-center gap-6 py-16 lg:py-32">
        <h3 className="text-xl lg:text-4xl font-bold capitalize text-center ">
          Access Most Powerful Copybots on QuadX
        </h3>
        <small className="text-slate-500 text-sm font-thin">
          Create an account, track strategy statistics, launch bots, and close
          orders. <Breaklarge /> Whether you’re at home or on the road, manage
          your portfolio anywhere.
        </small>
        <div className="overflow-auto flex items-center gap-4 lg:max-w-[1200px] px-2 w-full">
          {bots.map((bot) => {
            return (
              <div
                key={bot.id}
                className=" bg-purple-500 bg-opacity-10 rounded-xl flex flex-col gap-2 min-w-[300px]"
              >
                <div className="flex items-start justify-between gap-6 whitespace-nowrap p-4">
                  <img src={bot.img} alt="" className="w-[30px]" />
                  <span className="capitalize">
                    <h5 className="font-medium ">{bot.botName}</h5>
                    <small className="font-thin">{bot.info}</small>
                  </span>
                  <span className="flex">
                    {bot.rating} <MdStar className="text-yellow-400" />{" "}
                  </span>
                </div>
                <div className="flex items-start justify-between gap-6 whitespace-nowrap p-4">
                  <span className="font-thin text-slate-400">
                    <small>30D Yield</small>
                    <h5 className="font-medium">{bot.yield}</h5>
                  </span>
                  <span className="font-thin text-slate-400">
                    <small>AUM (USDT)</small>
                    <h5 className="font-medium">{bot.aum}</h5>
                  </span>
                  <span className="font-thin text-slate-400">
                    <small>Winrate</small>
                    <h5 className="font-medium">{bot.winRate}</h5>
                  </span>
                </div>
                <hr className="border-purple-500 dark:border-white" />

                <div className="flex justify-end px-3 py-1.5">
                  <Link
                    to={"/signup"}
                    className={`${styles.colors.primaryBgColor} py-2 px-4 capitalize rounded-2xl inline-flex items-center text-white shadow-lg`}
                  >
                    get bot
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Access;

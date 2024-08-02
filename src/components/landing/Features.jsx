import React from "react";
import Feat from "./Feat";
import { cp, am, pos, pros, strat, tops } from "../../assets";
import { styles } from "../../constants/styles";

const features = [
  {
    id: 1,
    img: pros,
    title: "pro tools",
    info: `Create portfolios with any coin alocation and
            rebalance your account with a click.`,
  },

  {
    id: 2,
    img: strat,
    title: "strategies",
    info: `Add multiple accounts to track your portfolio
            and check your daily PnL.`,
  },

  {
    id: 3,
    img: cp,
    title: "copy trading",
    info: `Trade without money. Test strategies safely
            and without any risk.`,
  },
  {
    id: 4,
    img: am,
    title: "automated trading",
    info: `Accrue additional assets with unexpected
        market moves. Sell and buy back coins.`,
  },
  {
    id: 5,
    img: tops,
    title: " trading options",
    info: `Subscribe to signals provided by other traders
        to copy strategies.`,
  },
  {
    id: 6,
    img: pos,
    title: "positions",
    info: `Manage Trends and analyse position`,
  },
];

const Features = () => {
  const myfeatures = features.map((ft) => {
    return <Feat key={ft.id} title={ft.title} info={ft.info} img={ft.img} />;
  });
  return (
    <div className="bg lg:h-[600px] px-5 sm:px-20 py-20 flex flex-col-reverse gap-4 sm:flex-row sm:items-center pt-20 lg:pt-52 ">
      <div className="flex flex-col gap-4 w-full text-[#333] dark:text-white lg:mx-32">
        <h5 className="capitalize text-xl sm:text-3xl font-medium text-white text-center">
          QuadX features
        </h5>
        <div className="grid lg:grid-cols-3 gap-6 ">{myfeatures}</div>
        <button
          className={`${styles.colors.primaryBgColor} text-white rounded-3xl mx-auto py-2.5 px-6 uppercase ${styles.hover.lightBg} text-xs shadow-xl my-10`}
        >
          start free trial
        </button>
      </div>
    </div>
  );
};

export default Features;

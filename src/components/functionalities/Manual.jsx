import React from "react";
import { styles } from "../../constants/styles";

const feats = [
  {
    id: 1,
    title: "Concurrent Take Profit and Stop Loss",
    info: `Deal closes when the indicated price is reached, or the deal closes when
        the price drops at or below the indicated value.`,
  },
  {
    id: 2,
    title: "Take Profit and Stop Loss Trailing feature",
    info: `Automated value adjustments as coin prices
            rise. Take Profit and Stop Loss points can
            automatically set to increase if a coin rises.`,
  },
  {
    id: 3,
    title: "Sell by multiple targets",
    info: `Sell your coins by multiple targets. Sell half
        your coins for $10,000, then 25% for $11,000,
        and the rest for $11,500.`,
  },
  {
    id: 4,
    title: "Smart cover",
    info: `Generate additional returns by capitalizing on
    unexpected market movements. Execute sell
    and buy-back strategies for coins.`,
  },
  {
    id: 5,
    title: "Chart and Signals From Tradingview",
    info: `View concurrent currency rate charts and
TradingView signals in a single window.`,
  },
];

const Manual = () => {
  return (
    <div className=" dark:bg-slate-900 bg-slate-200 dark:text-white text-xs font-medium">
      <div className="flex flex-col gap-8 lg:mx-32 py-28">
        <div className="flex flex-col gap-2">
          <h6
            className={`${styles.colors.primaryTextColor} uppercase underline`}
          >
            manual trade
          </h6>
          <h3 className="text-xl lg:text-3xl font-bold capitalize">
            manual trading with smart trade
          </h3>
          <small className="text-slate-400">
            Trade optimization: Sell and buy coins in a single window.Utilize
            Smart Trade from start to finish
          </small>
        </div>
        <div className="grid lg:grid-cols-3 gap-10">
          {feats.map((ft) => {
            return (
              <div key={ft.id}>
                <h3 className="text-lg lg:text-xl font-bold">{ft.title}</h3>
                <small className="text-slate-400">{ft.info}</small>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Manual;

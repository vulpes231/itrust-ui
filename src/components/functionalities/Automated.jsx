import React from "react";
import { styles } from "../../constants/styles";

const feats = [
  {
    id: 1,
    title: "Single-Pair Bot",
    info: `Runs one trading pair`,
  },
  {
    id: 2,
    title: "Multiple-Pair Bot",
    info: `Multiple pairs trading`,
  },
  {
    id: 3,
    title: "Long Algorithm ",
    info: `Bot buys a coin with settings you build. Next,
orders for sale are placed at a higher price. For
example, buys it for $10 and sells it for $11.`,
  },
  {
    id: 4,
    title: "Short Algorithm",
    info: `Bot sells a coin after you create settings, and
then set a buy order at a lower price. For
example, sells it for $10 and buys it for $9.`,
  },
  {
    id: 5,
    title: "Deal close Signals",
    info: `Bot trades according to Trading View signals:
        RSI — 7; ULT — 7-14-29; TA Presets; CQS
        Scalping; Trading View custom signals. You can
        set a deal start condition manually and open
        trade asap.`,
  },
  {
    id: 6,
    title: "Analyze and copy bots",
    info: `Bots can analyze performance, view and copy
other bot settings using QuadX software`,
  },
];

const Automated = () => {
  return (
    <div className=" bg-[#000] text-white text-xs font-medium">
      <div className="flex flex-col gap-8 lg:mx-32 py-28">
        <div className="flex flex-col gap-2">
          <h6
            className={`${styles.colors.primaryTextColor} uppercase underline`}
          >
            Automated trade
          </h6>
          <h3 className="text-xl lg:text-3xl font-bold capitalize ">
            Automated trading with Trading Bot
          </h3>
          <small className="text-slate-400">
            Trade 24 hours a day with automated bots
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

export default Automated;

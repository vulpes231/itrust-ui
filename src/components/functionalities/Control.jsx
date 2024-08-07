import React from "react";
import { styles } from "../../constants/styles";

const ports = [
  {
    id: 1,
    title: "Create",
    info: `Create portfolios with any coin amount`,
  },
  {
    id: 2,
    title: "Balancing",
    info: `Balance your positions by maintaining coin
  ratios`,
  },
  {
    id: 3,
    title: "View",
    info: `View and monitor your progress.`,
  },
  {
    id: 4,
    title: "Copy and Edit",
    info: `Copy and edit coin ratios in your portfolio`,
  },
];

const Control = () => {
  return (
    <div className=" dark:bg-slate-900 dark:text-white text-xs font-medium">
      <div className="flex flex-col gap-8 lg:mx-32 py-28">
        <div className="flex flex-col gap-2">
          <h6
            className={`${styles.colors.primaryTextColor} uppercase underline`}
          >
            positions
          </h6>
          <h3 className="text-xl lg:text-3xl font-bold capitalize">porfolio</h3>
          <small className="text-slate-400">
            Don’t let the fear of a market shift keep you up at night. With our
            A.I., your bot can automatically recognize trends and switch to a
            better strategy.
          </small>
        </div>
        <div className="grid lg:grid-cols-3 gap-10">
          {ports.map((ft) => {
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

export default Control;

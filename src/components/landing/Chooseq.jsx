import React from "react";
import { styles } from "../../constants/styles";
import Review from "./Review";

const Chooseq = () => {
  return (
    <div className="px-5 sm:px-20 py-20 flex flex-col  lg:mx-32">
      <div className="flex flex-col gap-4 w-full text-[#333] dark:text-white ">
        <h5 className="capitalize text-xl sm:text-3xl font-bold ">
          Trade automation opens up <br className="sm:hidden" /> new ways to
          seize <br /> opportunities
        </h5>
        <p className="font-thin text-xs text-slate-400">
          Unlike traditional stock markets, cryptocurrency{" "}
          <br className="sm:hidden" /> markets operate 24 hours per day, 7 days
          per week. <br className="sm:hidden" /> This is a point of fear for
          manual traders, but <br /> not for QuadX users. Your ai crypto trading
          bots aren’t <br className="sm:hidden" /> limited to Mon-Fri normal
          business hours to open <br className="sm:hidden" /> deals. You can set
          up bots to operate <br /> under almost any contingency, whether it’s a
          flash <br className="sm:hidden" /> crash or the market shooting to the
          moon. Sleep easy <br className="sm:hidden" /> at night and let bots do
          the work.
        </p>
        <button
          className={`${styles.colors.primaryBgColor} text-white rounded-3xl w-[60%] lg:w-[15%] py-2.5 px-6 uppercase ${styles.hover.lightBg} text-xs shadow-xl whitespace-nowrap`}
        >
          start free trial
        </button>

        <h5 className="capitalize text-xl sm:text-3xl font-bold mt-6">
          Why do traders choose QuadX?
        </h5>
        <div className="flex flex-col lg:flex-row gap-4 ">
          <Review
            review={`It’s a beautiful tool for making money, automated trading, and
            optimizing your crypto wallet management.`}
            name={`– Lilyana , QuadX User Review on`}
          />
          <Review
            review={`"QuadX is one of the best
            services for automated trading
            on cryptocurrency
            exchanges."`}
            name={`– Jan, QuadX User Review on`}
          />
          <Review
            review={`Great platform with clear
            presentation of your crypto's
            and DCA bots performance!`}
            name={`– David, QuadX User Review on`}
          />
        </div>
      </div>
    </div>
  );
};

export default Chooseq;

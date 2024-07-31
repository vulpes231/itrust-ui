import React from "react";
import { MdAppRegistration } from "react-icons/md";
import { Link } from "react-router-dom";
import { hand, hero } from "../assets";
import { styles } from "../constants/styles";
import Pageslider from "./landing/Pageslider";
import Roadmap from "./landing/Roadmap";

const Hero = () => {
  return (
    <div className="pt-32">
      <div className="flex flex-col gap-6 items-center justify-center">
        <div className="flex flex-col gap-6 text-white">
          <h3 className="font-[Roboto] text-2xl md:text-5xl text-center font-semibold leading-normal">
            World biggest stocks and crypto trading bot.
          </h3>
          <p className="font-style text-center w-[90%] mx-auto leading-relaxed font-thin text-sm text-slate-400">
            Build your portfolio while you sleep using expertly engineered
            automated bots that deliver <br /> the performance elite traders
            demand with the simplicity new users need.
          </p>

          <Link
            className={`flex font-medium text-sm ${styles.colors.primaryBgColor} text-white ${styles.hover.lightBg} px-10 py-2.5 rounded-3xl mx-auto items-center gap-1 capitalize`}
          >
            <span>
              <MdAppRegistration />
            </span>
            Get started
          </Link>
          <figure className="w-full grid place-content-center mt-3">
            <img src={hero} alt="" className="w-full lg:w-[550px] block" />
          </figure>

          <div className="px-5 sm:px-20 flex flex-col gap-4 sm:flex-row sm:items-center">
            <figure className="w-full grid place-content-center">
              <img src={hand} alt="" className="w-full sm:w-[300px]" />
            </figure>
            <div className="flex flex-col gap-6 w-full text-[#333] dark:text-white">
              <h3
                className={`uppercase font-medium text-xs ${styles.colors.primaryTextColor}`}
              >
                about quadx
              </h3>
              <h5 className="capitalize text-xl sm:text-3xl font-bold">
                QuadX helps traders win regardless of market conditions.
              </h5>
              <p className="font-thin text-xs text-slate-400">
                For every market condition, there’s a trading strategy that can
                take advantage of it. Quadx trade bots happen to be really good
                at reducing average acquisition costs, directly increasing your
                positive margins from each trade.
              </p>
              <button
                className={`${styles.colors.primaryBgColor} text-white rounded-3xl w-[50%] py-2.5 px-6 uppercase ${styles.hover.lightBg}`}
              >
                start free trial
              </button>
            </div>
          </div>
          <div className="bg h-[500px]">
            <div className="px-5 py-20 sm:px-20 flex flex-col items-center justify-center gap-10">
              <h3 className="uppercase text-xs font-bold">why choose us?</h3>
              <h5 className="capitalize text-xl sm:text-3xl text-center font-bold">
                Trading is hard, but <br />
                QuadX makes it easier
              </h5>
              <div>
                <Pageslider />
              </div>
            </div>
          </div>
          {/* roadmap */}
          <div className="px-5 sm:px-20 flex flex-col gap-4 py-20 text-[#333] dark:text-white ">
            <div className="flex flex-col gap-6 items-center justify-center">
              <h3
                className={`uppercase text-xs font-bold ${styles.colors.primaryTextColor}`}
              >
                roadmap
              </h3>
              <h5 className="capitalize text-xl sm:text-3xl font-bold text-center">
                the right tools for <br /> every kind of market.
              </h5>
            </div>
            <div className="lg:mx-20">
              <Roadmap />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

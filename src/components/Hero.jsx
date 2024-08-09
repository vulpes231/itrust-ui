import React from "react";
import { MdAppRegistration } from "react-icons/md";
import { Link } from "react-router-dom";
import { hand, hero } from "../assets";
import { styles } from "../constants/styles";
import Pageslider from "./landing/Pageslider";
import Roadmap from "./landing/Roadmap";
import Connect from "./landing/Connect";
import Chooseq from "./landing/Chooseq";
import Features from "./landing/Features";
import Faq from "./landing/Faq";
import Blog from "./landing/Blog";
import Manage from "./landing/Manage";
import Footer from "./Footer";

const Hero = () => {
  return (
    <div className="pt-20 sm:pt-32">
      <div className="flex flex-col gap-6 items-center justify-center">
        <div className="flex flex-col gap-6 ">
          <h3 className="font-[Roboto] text-3xl md:text-5xl text-center font-semibold leading-normal text-white">
            World biggest <br className="sm:hidden" /> stocks and crypto{" "}
            <br className="sm:hidden" /> trading bot.
          </h3>
          <p className="font-style text-center mx-auto leading-relaxed font-thin text-sm text-slate-400">
            Build your portfolio while you sleep using{" "}
            <br className="sm:hidden" /> expertly engineered automated bots that
            deliver <br className="sm:hidden" /> the performance elite traders
            demand <br className="sm:hidden" /> with the simplicity new users
            need.
          </p>

          <Link
            to={"/signup"}
            className={`flex font-medium text-sm ${styles.colors.primaryBgColor} text-white ${styles.hover.lightBg} px-10 py-2.5 rounded-3xl mx-auto items-center gap-1 capitalize`}
          >
            <span>
              <MdAppRegistration />
            </span>
            Get started
          </Link>
          <figure className="w-full grid place-content-center mt-3">
            <img src={hero} alt="" className="w-[300px] lg:w-[550px]" />
          </figure>

          <div className="px-5 sm:px-20 flex flex-col-reverse gap-4 sm:flex-row sm:items-center pt-24">
            <figure className="w-full grid place-content-center">
              <img src={hand} alt="" className="w-full sm:w-[300px]" />
            </figure>
            <div className="flex flex-col gap-6 w-full">
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
              <Link
                to={"/signup"}
                className={`${styles.colors.primaryBgColor} text-white rounded-3xl w-[70%] lg:w-[50%] py-2.5 px-6 uppercase ${styles.hover.lightBg} whitespace-nowrap text-xs`}
              >
                start free trial
              </Link>
            </div>
          </div>
          <div className="bg h-[500px] text-white">
            <div className="px-5 py-20 sm:px-20 flex flex-col items-center justify-center gap-10">
              <h3 className="uppercase text-xs font-bold">why choose us</h3>
              <h5 className="capitalize text-xl sm:text-3xl text-center font-bold">
                Trading is hard, but <br />
                QuadX makes it <br className="sm:hidden" /> easier
              </h5>
              <div>
                <Pageslider />
              </div>
            </div>
          </div>
          {/* roadmap */}
          <div className="px-5 sm:px-20 flex flex-col gap-4 py-20 ">
            <div className="flex flex-col gap-6 items-center justify-center">
              <h3
                className={`uppercase text-xs font-bold ${styles.colors.primaryTextColor}`}
              >
                roadmap
              </h3>
              <h5 className="capitalize text-xl sm:text-3xl font-bold text-center">
                the right tools for <br /> every kind of
                <br className="sm:hidden" /> market.
              </h5>
            </div>
            <div className="lg:mx-32 flex flex-col gap-6">
              <Roadmap />
              <h5 className="capitalize text-xl lg:text-3xl font-semibold px-6 tracking-wide ">
                Level up your trading game with advanced ai <br /> crypto
                trading tools that work on the biggest <br /> exchanges
              </h5>

              <p className="font-thin text-xs text-slate-500  px-6">
                Winning trades is the goal, and QuadX is your all-in-one tool to
                achieve it. Integrating with most any exchange, QuadX provides
                you the <br /> functions you wish you had and doesn't make you
                move your assets.
              </p>

              <Link
                to={"/signup"}
                className={`${styles.colors.primaryBgColor} text-white rounded-3xl mx-auto py-2.5 px-6 uppercase ${styles.hover.lightBg} text-xs shadow-xl`}
              >
                start free trial
              </Link>

              <div className="p-6 rounded-xl bg-[#564DCA] bg-opacity-15 flex flex-col lg:justify-between lg:items-center lg:flex-row shadow-md">
                <div>
                  <h4 className="font-medium text-lg">
                    Start Trading on QuadX Today
                  </h4>
                  <p className="font-thin text-xs text-slate-500">
                    Get trial with full-access to all QuadX trading tools.
                  </p>
                </div>
                <Link
                  to={"/signup"}
                  className="bg-white text-[#333] rounded-3xl py-2.5 px-6 capitalize shadow-xl w-[40%] md:w-[15%] text-xs mt-3"
                >
                  start now
                </Link>
              </div>
            </div>
          </div>

          {/* connect */}
          <Connect />
          {/* choose */}
          <Chooseq />
          {/* features */}
          <Features />
          {/* faqs */}
          <Faq />
          {/* blog */}
          {/* <Blog /> */}
          {/* manage */}
          <Manage />
          {/* Footer */}
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Hero;

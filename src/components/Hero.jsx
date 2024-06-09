import React from "react";
import { MdAppRegistration } from "react-icons/md";
import { Link } from "react-router-dom";
import { hero } from "../assets";
const Hero = () => {
  return (
    <div className="container -mx-3">
      <div className="">
        <figure>
          <img src={hero} alt="" className="" />
        </figure>
        <div className="flex flex-col gap-6 text-[#333] dark:text-slate-200">
          <h1 className="font-[Roboto] text-2xl text-center capitalize font-semibold  leading-normal">
            Premier AI-driven stock and cryptocurrency trading bot.
          </h1>
          <p className="font-[Montserrat] text-center w-[90%] mx-auto leading-relaxed font-thin text-sm">
            Enhance your trading skills. Our AI-driven stock and crypto trading
            bot saves you time, trades around the clock, and automates your
            strategies.
          </p>
          <Link
            className={`inline-flex font-medium text-sm bg-blue-600 text-white hover:bg-blue-800 transition-all px-8 py-2 rounded-full mx-auto items-center gap-1`}
          >
            <span>
              <MdAppRegistration />
            </span>
            Get started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;

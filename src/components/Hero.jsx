import React from "react";
import { MdAppRegistration } from "react-icons/md";
import { Link } from "react-router-dom";
import { styles } from "../constants/styles";
import { hero } from "../assets";
const Hero = () => {
  return (
    <div>
      <figure>
        <img src={hero} alt="" className="" />
      </figure>
      <div className="flex flex-col gap-6">
        <h1 className="font-[Roboto] text-2xl text-center capitalize font-semibold text-[#333] leading-normal">
          Premier AI-driven stock and cryptocurrency trading bot.
        </h1>
        <p className="font-[Montserrat] text-center w-[90%] mx-auto leading-relaxed font-thin text-lg">
          Enhance your trading skills. Our AI-driven stock and crypto trading
          bot saves you time, trades around the clock, and automates your
          strategies.
        </p>
        <Link
          className={`border flex items-center py-3 mx-auto ${styles.colors.primaryBgColor} text-[#fff] px-10 rounded-md gap-2`}
        >
          <span>
            <MdAppRegistration />
          </span>
          Get started
        </Link>
      </div>
    </div>
  );
};

export default Hero;

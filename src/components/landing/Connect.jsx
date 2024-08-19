import React from "react";
import { styles } from "../../constants/styles";
import {
  binance,
  bitfinex,
  bitget,
  bybit,
  codeio,
  coinb,
  gemini,
  htx,
  kraken,
  kucoin,
  ok,
  stamp,
} from "../../assets";
import Analytics from "./Analytics";
import { Link } from "react-router-dom";

const Connect = () => {
  return (
    <div className="bg lg:h-[500px] px-5 sm:px-20 py-20 flex flex-col-reverse gap-4 sm:flex-row sm:items-center pt-20 lg:pt-52 ">
      <div className="flex flex-col gap-4 w-full text-[#333] dark:text-white lg:mx-32">
        <h5 className="capitalize text-xl sm:text-4xl font-bold text-white ">
          Connect your exchange accounts on one platform
        </h5>
        <p className="font-normal text-sm text-slate-400">
          Automated trading tools are supported on 14 major cryptocurrency
          exchanges
        </p>
        <div className="flex items-center justify-center flex-col">
          <div className="w-full grid lg:grid-cols-3 gap-2">
            <img src={bybit} alt="" />
            <img src={binance} alt="" />
            <img src={ok} alt="" />
          </div>
          <div className=" w-full flex items-center justify-center">
            <div className="flex flex-col lg:flex-row justify-center items-center w-full mx-auto">
              <div className=" grid grid-cols-2 ">
                <img className="w-[100px]" src={bitfinex} alt="" />
                <img className="w-[100px]" src={coinb} alt="" />
              </div>
              <div className=" grid grid-cols-2 ">
                <img className="w-[100px]" src={bitget} alt="" />
                <img className="w-[100px]" src={stamp} alt="" />
              </div>
              <div className=" grid grid-cols-2 ">
                <img className="w-[100px]" src={codeio} alt="" />
                <img className="w-[100px]" src={kraken} alt="" />
              </div>
            </div>
          </div>
          <div className=" w-full mx-auto flex items-center justify-center">
            <div className="flex flex-col lg:flex-row">
              <div className="w-full grid grid-cols-2 gap-2">
                <img className="w-[100px]" src={gemini} alt="" />
                <img className="w-[100px]" src={htx} alt="" />
              </div>
              <div className="w-full grid grid-cols-2">
                <img className="w-[100px]" src={kucoin} alt="" />
              </div>
            </div>
          </div>
        </div>

        <Link
          to={"/signup"}
          className={`${styles.colors.primaryBgColor} text-white rounded-3xl py-2.5 px-6 uppercase ${styles.hover.lightBg} whitespace-nowrap text-xs mx-auto`}
        >
          start trial
        </Link>

        <div className="bg-white p-6 flex flex-col gap-4 lg:flex-row lg:justify-between lg:px-32 rounded-xl shadow-lg">
          <Analytics title={"active users"} value={"412k+"} />
          <Analytics title={"active bots"} value={"5k+"} />
          <Analytics title={"traded funds"} value={"$1.73B+"} />
        </div>
      </div>
    </div>
  );
};

export default Connect;

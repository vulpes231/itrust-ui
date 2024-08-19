import React from "react";
import { Breaklarge, Footer } from "../components";
import { ftpg } from "../assets";

import Getstartedbtn from "../components/Getstartedbtn";
import Manual from "../components/functionalities/Manual";
import Automated from "../components/functionalities/Automated";
import Control from "../components/functionalities/Control";
import Tradingfeat from "../components/functionalities/Tradingfeat";
import Strategy from "../components/functionalities/Strategy";
import Bottypes from "../components/functionalities/Bottypes";
import Access from "../components/functionalities/Access";

// ftpg
const Functions = () => {
  return (
    <section className="">
      {/* get started */}
      <div className=" bg-[#000] text-white">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:mx-32 py-10">
          <figure className="w-full flex items-center justify-center">
            <img src={ftpg} alt="" className="lg:w-[250px]" />
          </figure>
          <div className="flex flex-col gap-4 w-full">
            <h3 className="text-2xl lg:text-4xl font-bold">
              Get Maximum <br className="hidden lg:flex" /> Value
            </h3>
            <small>
              Cryptotrading is 24/7. So is your bot. Give yourself an edge,{" "}
              <Breaklarge />
               and while everyone else sleeps, you’ll never miss a beat.
            </small>
            <Getstartedbtn />
          </div>
        </div>
      </div>
      {/* manual */}
      <Manual />
      {/* auto */}
      <Automated />
      {/* port */}
      <Control />
      {/* feat */}
      <Tradingfeat />
      {/* start */}
      <Strategy />
      {/* Bot */}
      <Bottypes />
      {/* access */}
      <Access />
      {/* footer */}
      <Footer />
    </section>
  );
};

export default Functions;

import React from "react";
import { aside, dcasub, grid, grid2, grid3, grid4 } from "../../assets";
import Imagecontainer from "../general/Imagecontainer";
import Containerdark from "../general/Containerdark";
import Containerlight from "../general/Containerlight";
import Title from "../general/Title";
import Innerflexrow from "../general/Innerflexrow";
import Lineicon from "../general/Lineicon";
import { GiLightThornyTriskelion } from "react-icons/gi";
import { GrLineChart } from "react-icons/gr";
import { SiAmazonsimpleemailservice } from "react-icons/si";
import { styles } from "../../constants/styles";
import Bottypes from "../functionalities/Bottypes";
import Access from "../functionalities/Access";
import Footer from "../Footer";

const iconData = [
  {
    id: 1,
    title: "beginner",
    icon: <GiLightThornyTriskelion />,
    info: "mitigate risk",
  },
  {
    id: 2,
    title: "pros",
    icon: <GrLineChart />,
    info: "combat volatility",
  },
  {
    id: 3,
    title: "easy",
    icon: <SiAmazonsimpleemailservice />,
    info: "in the cloud",
  },
];

const Griddisplay = ({ img, title }) => {
  return (
    <div className="flex flex-col gap-2 items-center justify-center p-2">
      <img src={img} alt="bot-info" className="w-[100px]" />
      <h6>{title}</h6>
    </div>
  );
};

const DCA = () => {
  return (
    <section className="bg-slate-50 dark:bg-slate-800">
      <Containerdark>
        <div className="flex flex-col lg:flex-row gap-6 py-10 lg:mx-32 ">
          <div className=" pl-16 w-full flex flex-col gap-6 justify-center place-items-center">
            <Title text={"Don’t worry about buying at the wrong moment."} />

            <small className="text-slate-400 break-words text-xs font-thin">
              Use DCA to invest gradually over time to mitigate risk, or to make
              up for a loss making position. Buying extra on a loss making
              position will lower the average buying price.
            </small>
          </div>
          <Imagecontainer img={aside} />
        </div>
      </Containerdark>
      <Containerlight>
        <div className="flex flex-col gap-6 py-10 lg:mx-32 ">
          <div className="flex flex-col gap-2 w-full ">
            <Lineicon iconData={iconData} />
            <hr className="border-[#333] border w-[95%] mx-auto" />
          </div>
          <Innerflexrow>
            <Imagecontainer img={dcasub} imageWidth={"lg:w-[400px]"} />
            <div className=" pl-16 w-full flex flex-col gap-6 ">
              <h6
                className={`${styles.colors.primaryTextColor} underline uppercase font-thin`}
              >
                invest over time
              </h6>
              <Title text={"Invest with less risk, the easy way"} />
              <small className="text-slate-400 break-words text-xs font-thin">
                You don’t need to be a pro to trade like one. Level up your game
                - and your results - by copying pro traders on our marketplace.
                Subscribe to trading signals, which tell your bot when to buy or
                sell. Use strategies from professionals to scan the markets, and
                download pre-configured bot templates.
              </small>
            </div>
          </Innerflexrow>
        </div>
      </Containerlight>
      <Containerdark>
        <div className="flex flex-col lg:flex-row gap-6 py-10 lg:mx-32 text-white">
          <div className="w-full  flex flex-col gap-4">
            <Title text={"DCA Bots"} />
            <small className="text-slate-400 break-words text-xs font-thin">
              DCA (or "Dollar Cost Averaging") strategy is the practice of
              investing into a currency at preset intervals to reduce the entry
              price of a position over time and mitigate volatility risk. <br />
              <br />
              For example, when you enter a position with a lump-sum investment
              (all-in) you run the risk of purchasing "highs" only to see the
              price drop and end up with a losing position, that you must choose
              whether to hold, or cut at a loss. <br />
              <br />
              However, if you DCA, you can divide your investment into smaller
              pieces and buy the asset at various points over time at different
              prices, thereby getting a better average price for your position
              and greatly reducing risks from the consequences of volatility.
            </small>
          </div>
          <div className="w-full flex flex-col gap-4">
            <Title text={"Great for traders of any level."} />
            <small className="text-slate-400 break-words text-xs font-thin">
              Let’s look at an example <br /> <br /> You have $5,000 and decide
              to invest $1,000 every 30 days for five months <br />
              <br />
              If prices at the time of each entry were $100, $90, $80, $70 and
              $95, your average asset price would be the average cost of entry
              at $85.50. <br /> <br />
              Had you entered the entirety of your investment at the beginning,
              you would have paid $100 per share (almost 20% more!).
            </small>
          </div>
        </div>
      </Containerdark>
      <Containerlight>
        <div className="flex flex-col gap-6 py-10 lg:mx-32 ">
          <div className="flex items-center justify-center flex-col">
            <h3 className="text-xl lg:text-3xl font-bold">Ready-to-use Bots</h3>
            <small className="text-slate-400 break-words text-xs font-thin">
              -Steps for Configure a Bot strategy
            </small>
          </div>
          <div className="grid lg:grid-cols-4 gap-6">
            <Griddisplay img={grid} title={"choose a bot"} />
            <Griddisplay img={grid2} title={"connect an exchange"} />
            <Griddisplay img={grid3} title={"apply bot configuration"} />
            <Griddisplay img={grid4} title={"view performance"} />
          </div>
          <div className="p-6 rounded-xl bg-[#564DCA] bg-opacity-15 flex flex-col lg:justify-between lg:items-center lg:flex-row shadow-md">
            <div>
              <h4 className="font-medium text-lg">
                Start Trading on QuadX Today
              </h4>
              <p className="font-thin text-xs text-slate-500">
                Get trial with full-access to all QuadX trading tools.
              </p>
            </div>
            <button className="bg-white text-[#333] rounded-3xl py-2.5 px-6 capitalize shadow-xl w-[40%] md:w-[15%] text-xs mt-3">
              start now
            </button>
          </div>
        </div>
      </Containerlight>
      <Containerdark>
        <Bottypes />
      </Containerdark>
      <Containerlight>
        <div className="flex flex-col gap-6 py-10 lg:mx-32 ">
          <Access />
        </div>
      </Containerlight>
      <Footer />
    </section>
  );
};

export default DCA;

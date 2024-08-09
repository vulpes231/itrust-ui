import React, { useEffect } from "react";
import Containerdark from "../components/general/Containerdark";
import Containerlight from "../components/general/Containerlight";
import Imagecontainer from "../components/general/Imagecontainer";

import { MdAppRegistration } from "react-icons/md";
import { styles } from "../constants/styles";
import Bottypes from "../components/functionalities/Bottypes";
import Access from "../components/functionalities/Access";
import { Footer, Lineicon } from "../components";
import { ai1, ai2, ai3, ai4 } from "../assets";
import { GiLightThornyTriskelion } from "react-icons/gi";
import { GrLineChart } from "react-icons/gr";
import { SiAmazonsimpleemailservice } from "react-icons/si";
import { Link } from "react-router-dom";

const Title = ({ txt }) => {
  return <h3 className="text-xl lg:text-3xl font-bold">{txt}</h3>;
};
const Small = ({ txt }) => {
  return <small className="font-thin text-xs text-slate-400">{txt}</small>;
};
const Subtitle = ({ txt }) => {
  return (
    <h5 className="underline uppercase font-thin text-purple-500">{txt}</h5>
  );
};
const Holder = ({ children, customClass }) => {
  return (
    <div className={`flex flex-col py-16 lg:mx-32  ${customClass}`}>
      {children}
    </div>
  );
};

const iconData = [
  {
    id: 1,
    title: "feed",
    icon: <GiLightThornyTriskelion />,
    info: "strategies",
  },
  {
    id: 2,
    title: "learn",
    icon: <GrLineChart />,
    info: "automatically",
  },
  {
    id: 3,
    title: "adapt",
    icon: <SiAmazonsimpleemailservice />,
    info: "on change",
  },
];

const Aitrading = ({ setActiveLink }) => {
  useEffect(() => {
    setActiveLink();
  }, []);
  return (
    <section>
      <Containerdark>
        <Holder customClass={"lg:flex-row lg:items-center gap-10"}>
          <div className="flex flex-col gap-4">
            <Subtitle txt={"AI Trading"} />
            <Title txt={"Let your bot learn and decide by itself"} />
            <Small
              txt={
                "A break-through innovation in trading - this is what the hedge-funds don't want you to know. AI analyses all the strategies you feed it, and can decide on its own which one it should use."
              }
            />
            <Link
              to={"/signup"}
              className={`${styles.colors.primaryBgColor} capitalize text-white px-4 py-2.5 rounded-3xl border-none w-[25%] flex items-center gap-1`}
            >
              {" "}
              <MdAppRegistration /> start trading
            </Link>
          </div>
          <Imagecontainer imageWidth={"lg:w-[400px]"} img={ai1} />
        </Holder>
      </Containerdark>
      <Containerlight>
        <div className="flex flex-col gap-2 w-full py-5">
          <Lineicon iconData={iconData} />
          <hr className="border-[#333] border w-[95%] mx-auto" />
        </div>
        <Holder customClass={"lg:flex-row lg:items-center gap-10"}>
          <Imagecontainer img={ai2} imageWidth={"lg:w-[400px]"} />
          <div className="flex flex-col gap-4">
            <Subtitle txt={"RATE ALL YOUR STRATEGIES"} />
            <Title
              txt={
                "Automatically backtest all your strategies, Simultaneously."
              }
            />
            <Small
              txt={
                "Imagine having hundreds of strategies, using signals and even TradingView? Combine all of these and import them all into your AI."
              }
            />
          </div>
        </Holder>
      </Containerlight>
      <Containerdark>
        <Holder customClass={"lg:flex-row lg:items-center gap-10"}>
          <div className="flex flex-col gap-4">
            <Subtitle txt={"LEARN AUTOMATICALLY"} />
            <Title txt={"Once you’ve fed your AI,it’s time to train."} />
            <Small
              txt={
                "When you've imported all your strategies, it's time to train your AI. Rate and rank all your strategies at once, for every market you're active on. Your AI will rate and rank all strategies for you, and pick the best for the current market."
              }
            />
          </div>
          <Imagecontainer img={ai3} imageWidth={"lg:w-[400px]"} />
        </Holder>
      </Containerdark>
      <Containerlight>
        <Holder customClass={"lg:flex-row lg:items-center gap-10"}>
          <Imagecontainer img={ai4} imageWidth={"lg:w-[400px]"} />
          <div className="flex flex-col gap-4">
            <Subtitle txt={"ADAPT TO CHANGING MARKET"} />
            <Title txt={"Your pocket hedge-fund"} />
            <Small
              txt={
                "Hedge-funds don't have one strategy to rule them all. They have hundreds of strategies and constantly switch between them to optimize trading. Now you can do the same thing. Your AI will scan for changing trends and adapt accordingly for every trading pair."
              }
            />
          </div>
        </Holder>
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

export default Aitrading;

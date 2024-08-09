import React, { useEffect } from "react";
import Containerdark from "../components/general/Containerdark";
import { styles } from "../constants/styles";
import Title from "../components/general/Title";
import { MdCheck } from "react-icons/md";
import {
  clip,
  clipbg,
  clipcon,
  cliphone,
  grid,
  grid2,
  grid3,
  grid4,
  ideal,
} from "../assets";
import Containerlight from "../components/general/Containerlight";
import { Footer, Imagecontainer, Lineicon } from "../components";
import { GiLightThornyTriskelion } from "react-icons/gi";
import { GrLineChart } from "react-icons/gr";
import { SiAmazonsimpleemailservice } from "react-icons/si";
import Bottypes from "../components/functionalities/Bottypes";
import Access from "../components/functionalities/Access";
import { Link } from "react-router-dom";

const formatTextWithLineBreaks = (text) => {
  return text.split("\n").map((part, index) => (
    <React.Fragment key={index}>
      {part}
      {index < text.split("\n").length - 1 && <br />}
    </React.Fragment>
  ));
};

const copies = [
  {
    id: 1,
    icon: <MdCheck className="text-green-500 font-bold" />,
    text: "Choose a trader and connect your exchange",
  },
  {
    id: 2,
    icon: <MdCheck className="text-green-500 font-bold" />,
    text: "Sit back and keep track in the Cryptohopper App",
  },
  {
    id: 3,
    icon: <MdCheck className="text-green-500 font-bold" />,
    text: "Let other traders do the work for you",
  },
];

const benefits = [
  {
    id: 1,
    heading: "for subscribers",
    features: [
      {
        title: "Copy the best traders",
        info: "See every seller's profits, most traded currencies,\n max drawdown, and reviews.",
      },
      {
        title: "Calculate your profit",
        info: "Calculate your minimum investment needed to cover\n the subscription costs and to make a profit.",
      },
      {
        title: "Pump & dump protection",
        info: "There is a minimum traded volume before the seller\n can trade.",
      },
      {
        title: "Join communities",
        info: "Join trading communities and gain market\n knowledge.",
      },
    ],
  },
  {
    id: 2,
    heading: "for sellers",
    features: [
      {
        title: "Earn passive income",
        info: "Earn monthly subscription fees each time a trader subscribes to your bot.",
      },
      {
        title: "Trade like you usually do",
        info: "No need to adjust your trading style.",
      },
      {
        title: "Global audience",
        info: "Offer your trading services worldwide.",
      },
      {
        title: "Manage communities",
        info: "Grow your community and professionalize.",
      },
    ],
  },
];

const Holder = ({ children, customClass }) => {
  return (
    <div className={`flex flex-col py-10 lg:mx-32  ${customClass}`}>
      {children}
    </div>
  );
};

const Small = ({ text }) => {
  return (
    <small className="text-slate-400 break-words text-xs font-thin">
      {formatTextWithLineBreaks(text)}
    </small>
  );
};

const Subtitle = ({ text }) => {
  return (
    <h6
      className={`${styles.colors.primaryTextColor} underline uppercase font-thin`}
    >
      {text}
    </h6>
  );
};

const iconData = [
  {
    id: 1,
    title: "select",
    icon: <GiLightThornyTriskelion />,
    info: "who to copy",
  },
  {
    id: 2,
    title: "connect",
    icon: <GrLineChart />,
    info: "your exchange",
  },
  {
    id: 3,
    title: "keep track",
    icon: <SiAmazonsimpleemailservice />,
    info: "of your positions",
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

const Copybot = ({ setActiveLink }) => {
  useEffect(() => {
    setActiveLink();
  }, []);
  return (
    <section>
      <Containerdark>
        <Holder customClass={"lg:justify-between lg:flex-row lg:items-center"}>
          <div className="flex flex-col gap-4">
            <Subtitle text={"Copy Bots"} />
            <Title text={"Copy top traders"} />
            <div className="flex flex-col gap-2">
              {copies.map((cp) => (
                <span className="flex gap-1 items-center" key={cp.id}>
                  <span className="font-bold">{cp.icon}</span>
                  <span>{cp.text}</span>
                </span>
              ))}
            </div>
          </div>
          <figure>
            <img src={clip} alt="Trading graphic" />
          </figure>
        </Holder>
      </Containerdark>
      <Containerlight>
        <Holder customClass={"pl-20 gap-20 lg:flex-row lg:items-center "}>
          <div className="flex flex-col gap-4 w-full">
            <h3 className="text-xl lg:text-3xl font-bold text-center">
              The benefits of a Copy Bot
            </h3>
            <div className={`flex flex-col lg:flex-row lg:items-start w-full `}>
              {benefits.map((ben, index) => (
                <div
                  key={ben.id}
                  className={` flex flex-col gap-4 w-full ${
                    index === 0 ? `border-r` : `border-none pl-10`
                  }`}
                >
                  <h5
                    className={`${styles.colors.primaryTextColor} font-semibold text-lg capitalize`}
                  >
                    {ben.heading}
                  </h5>
                  <ul className="list-disc pl-5 flex flex-col gap-2">
                    {ben.features.map((feat, index) => (
                      <li key={index} className="mb-2">
                        <h3 className="font-semibold">{feat.title}</h3>
                        <Small text={feat.info} />
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </Holder>
      </Containerlight>
      <Containerdark>
        <Holder>
          <div className="flex flex-col gap-2 w-full">
            <Lineicon iconData={iconData} />
            <hr className="border-[#333] border w-[95%] mx-auto" />
          </div>
          <div className="flex flex-col items-center justify-center gap-6 mt-10">
            <h3 className="text-xl lg:text-3xl font-bold capitalize text-center ">
              1.Select Copy Bot
            </h3>
            <Small
              text={
                "Make informed decisions on who to copy based on the exchange the trader uses, the currencies they are trading, their trading results and reviews."
              }
            />
            <figure className="relative">
              <img src={ideal} alt="" className="w-[400px]" />
              <img
                src={cliphone}
                className="absolute bottom-0 right-[-70px] w-[150px]"
                alt=""
              />
            </figure>
          </div>
        </Holder>
      </Containerdark>
      <Containerlight>
        <Holder
          customClass={"lg:justify-between lg:flex-row lg:items-center gap-10"}
        >
          <Imagecontainer img={clipcon} imageWidth={"w-[400px]"} />
          <div>
            <Title text={"2. Connect Your Exchange"} />
            <Small
              text={`Your funds stay safe on your exchange. Connect QuadX with API keys or Wallet Connect. We offer “How to connect to” tutorials for all supported crypto exchanges.The exchanges that are supported are Bybit, Binance, OKX, BitFinex, Coinbase, Bitget, Bitstamp, Gate.io, Kraken,. Gemini, HtX, Kucoin`}
            />
          </div>
        </Holder>
      </Containerlight>
      <Containerdark>
        <Holder>
          <div className="flex flex-col items-center justify-center gap-6">
            <h3 className="text-xl lg:text-3xl font-bold capitalize text-center ">
              3. Easily keep track of your Copy Bots` activity
            </h3>
            <Small
              text={
                "Keeping track of your investments have never been easier Manual entries to a portfolio tracker are something of the past Your Dashboard will show all the positions your Copy Bot has opened"
              }
            />
            <figure className="relative">
              <img src={clipbg} alt="" className="w-[450px]" />
            </figure>
          </div>
        </Holder>
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
            <Link
              to={"/signup"}
              className="bg-white text-center text-[#333] rounded-3xl py-2.5 px-6 capitalize shadow-xl w-[40%] md:w-[15%] text-xs mt-3"
            >
              start now
            </Link>
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

export default Copybot;

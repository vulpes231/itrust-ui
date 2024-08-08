import React, { useEffect } from "react";
import Containerdark from "../components/general/Containerdark";
import Containerlight from "../components/general/Containerlight";
import Imagecontainer from "../components/general/Imagecontainer";
import Bottypes from "../components/functionalities/Bottypes";
import Access from "../components/functionalities/Access";
import { styles } from "../constants/styles";
import { MdAppRegistration } from "react-icons/md";
import { GiLightThornyTriskelion } from "react-icons/gi";
import { GrLineChart } from "react-icons/gr";
import { SiAmazonsimpleemailservice } from "react-icons/si";
import { Footer, Lineicon } from "../components";
import { autosub, fund1, fund2, fund3, fund4 } from "../assets";

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
    <div className={`flex flex-col py-10 lg:mx-32  ${customClass}`}>
      {children}
    </div>
  );
};

const iconData = [
  {
    id: 1,
    title: "market arbitrage",
    icon: <GiLightThornyTriskelion />,
    info: "on one echange",
  },
  {
    id: 2,
    title: "exchange arbitrage",
    icon: <GrLineChart />,
    info: "accross exchanges",
  },
  {
    id: 3,
    title: "market making",
    icon: <SiAmazonsimpleemailservice />,
    info: "made accessible",
  },
];

const Getfunded = ({ setActiveLink }) => {
  useEffect(() => {
    setActiveLink();
  }, []);
  return (
    <section>
      <Containerdark>
        <Holder customClass={"lg:flex-row lg:items-center gap-10"}>
          <div className="flex flex-col gap-4">
            <Subtitle txt={"Get Funded"} />
            <Title txt={"Funding Promising Traders Worldwide"} />
            <Small
              txt={
                " Maximize Your Trading Success with Itrust Investment: Trade up to $1,000,000 on QuadX and earn up to 95% of the profits."
              }
            />
            <button
              className={`${styles.colors.primaryBgColor} text-white px-4 py-2.5 rounded-3xl border-none w-[30%] text-center flex items-center justify-center gap-1`}
            >
              {" "}
              <MdAppRegistration /> get started
            </button>
          </div>
          <Imagecontainer imageWidth={"lg:w-[400px]"} img={fund1} />
        </Holder>
      </Containerdark>
      <Containerlight>
        <div className="flex flex-col gap-2 w-full py-5">
          <Lineicon iconData={iconData} />
          <hr className="border-[#333] border w-[95%] mx-auto" />
        </div>
        <Holder customClass={"lg:flex-row lg:items-center gap-10"}>
          <Imagecontainer img={fund2} imageWidth={"lg:w-[400px]"} />
          <div className="flex flex-col gap-4">
            <Subtitle txt={"PROFIT SHARING"} />
            <Title txt={"5% Profit Sharing from Challenge Phase"} />
            <Small
              txt={
                "QuadX is the only prop firm to offer a 5% profit sharing from the profit you make during the challenge phases. This is to incentivise our top traders and to deliver on our promise of the world’s best payout bonuses."
              }
            />
          </div>
        </Holder>
      </Containerlight>
      <Containerdark>
        <Holder customClass={"lg:flex-row lg:items-center gap-10"}>
          <div className="flex flex-col gap-4">
            <Subtitle txt={"NO TIME LIMIT"} />
            <Title txt={"No Time Limit on Challenge Phase"} />
            <Small
              txt={
                "QuadX offers no time limits in its funding challenges. This means that you can trade with complete peace of mind. No more anxiety to reach the profit target within a deadline."
              }
            />
          </div>
          <Imagecontainer img={fund3} imageWidth={"lg:w-[400px]"} />
        </Holder>
      </Containerdark>
      <Containerlight>
        <Holder customClass={"lg:flex-row lg:items-center gap-10"}>
          <Imagecontainer img={fund4} imageWidth={"lg:w-[400px]"} />
          <div className="flex flex-col gap-4">
            <Subtitle txt={"WITHDRAW BALANCE"} />
            <Title txt={"Balance Based Drawdown"} />
            <Small
              txt={
                "Max daily drawdown is calculated based on your balance. If you have trades running when a new trading day starts, the crypto balance at that time will be considered for Daily drawdown calculation, not the equity. This is to deliver on our promise of the world's most reliable prop firm."
              }
            />
          </div>
        </Holder>
      </Containerlight>
      <Containerdark>
        <Holder customClass={"lg:flex-row lg:items-center gap-10"}>
          <div className="flex flex-col gap-4">
            <Subtitle txt={"LOW COMMISSION"} />
            <Title txt={"Raw Spreads & Lowest Commissions"} />
            <Small
              txt={
                "QuadX ensures raw spread, including in Swap Free accounts to deliver on its promise of the world's best prop trading conditions. QuadX also offers the lowest commissions for traders with 3$/round lot on Stock & Commodities and 1$/round lot on Cryptocurrency."
              }
            />
          </div>
          <Imagecontainer img={autosub} imageWidth={"lg:w-[400px]"} />
        </Holder>
      </Containerdark>
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

export default Getfunded;

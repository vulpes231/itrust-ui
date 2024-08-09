import React, { useEffect } from "react";
import Containerdark from "../components/general/Containerdark";
import Containerlight from "../components/general/Containerlight";
import Imagecontainer from "../components/general/Imagecontainer";
import { GiLightThornyTriskelion } from "react-icons/gi";
import { GrLineChart } from "react-icons/gr";
import { SiAmazonsimpleemailservice } from "react-icons/si";
import { Footer, Lineicon } from "../components";
import { pro1, pro2, pro3, pro4 } from "../assets";
import Bottypes from "../components/functionalities/Bottypes";
import Access from "../components/functionalities/Access";
import { styles } from "../constants/styles";
import { MdAppRegistration } from "react-icons/md";
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

const Protools = ({ setActiveLink }) => {
  useEffect(() => {
    setActiveLink();
  }, []);
  return (
    <section>
      <Containerdark>
        <Holder customClass={"lg:flex-row lg:items-center gap-10"}>
          <div className="flex flex-col gap-4">
            <Subtitle txt={"Pro Tools"} />
            <Title txt={"Leverage market inefficiencies or liquidity"} />
            <Small
              txt={
                " Advanced trading techniques made available for everyone. Utilise pro tools that were previously only available for professionals or developers."
              }
            />
            <Link
              to={"/signup"}
              className={`${styles.colors.primaryBgColor} capitalize text-white px-4 py-2.5 rounded-3xl border-none w-[25%] flex items-center gap-1`}
            >
              {" "}
              <MdAppRegistration /> get started
            </Link>
          </div>
          <Imagecontainer imageWidth={"lg:w-[400px]"} img={pro1} />
        </Holder>
      </Containerdark>
      <Containerlight>
        <div className="flex flex-col gap-2 w-full py-5">
          <Lineicon iconData={iconData} />
          <hr className="border-[#333] border w-[95%] mx-auto" />
        </div>
        <Holder customClass={"lg:flex-row lg:items-center gap-10"}>
          <Imagecontainer img={pro2} imageWidth={"lg:w-[400px]"} />
          <div className="flex flex-col gap-4">
            <Subtitle txt={"MARKET ARBITRAGE"} />
            <Title txt={"Leverage price inefficiencies on your exchange."} />
            <Small
              txt={
                "Market Arbitrage enables you to take advantage of price differences between pairs on your exchange."
              }
            />
          </div>
        </Holder>
      </Containerlight>
      <Containerdark>
        <Holder customClass={"lg:flex-row lg:items-center gap-10"}>
          <div className="flex flex-col gap-4">
            <Subtitle txt={"EXCHANGE ARBITRAGE"} />
            <Title txt={"Exchange Arbitrage, without withdrawals."} />
            <Small
              txt={
                "Execute exchange arbitrage between exchanges without sending funds from one exchange to another. Just connect the exchanges with appropriate funds, enable Exchange Arbitrage, and let your QuadX do the rest."
              }
            />
          </div>
          <Imagecontainer img={pro3} imageWidth={"lg:w-[400px]"} />
        </Holder>
      </Containerdark>
      <Containerlight>
        <Holder customClass={"lg:flex-row lg:items-center gap-10"}>
          <Imagecontainer img={pro4} imageWidth={"lg:w-[400px]"} />
          <div className="flex flex-col gap-4">
            <Subtitle txt={"MARKET MAKING"} />
            <Title txt={"Leverage big spreads, or create liquidity."} />
            <Small
              txt={
                "Market makers are the best friend of every exchange or crypto project. Now you can profit easily from a big spread, and make the markets. A win-win for everybody."
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

export default Protools;

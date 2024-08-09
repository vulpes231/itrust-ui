import React, { useEffect } from "react";
import Containerdark from "../components/general/Containerdark";
import Containerlight from "../components/general/Containerlight";
import Imagecontainer from "../components/general/Imagecontainer";
import Footer from "../components/Footer";
import { start1, start2, grid, grid2, grid3, grid4 } from "../assets";
import { Link } from "react-router-dom";

const Title = ({ txt, custom }) => {
  return <h3 className={`"text-xl lg:text-3xl font-bold ${custom}`}>{txt}</h3>;
};
const Small = ({ txt }) => {
  return <small className="font-thin text-xs text-slate-400">{txt}</small>;
};
const Subtitle = ({ txt }) => {
  return (
    <h5 className="underline uppercase font-thin text-purple-500">{txt}</h5>
  );
};

const Griddisplay = ({ img, title }) => {
  return (
    <div className="flex flex-col gap-2 items-center justify-center p-2">
      <img src={img} alt="bot-info" className="w-[100px]" />
      <h6>{title}</h6>
    </div>
  );
};

const Holder = ({ children, customClass }) => {
  return (
    <div className={`flex flex-col py-16 lg:mx-32  ${customClass}`}>
      {children}
    </div>
  );
};

const signalSteps = [
  `Go to your QuadX account.`,
  `Click “Marketplace”.`,
  `Click “Signals”.`,
  `Choose a Signaler. Want to know if a Signaler is the right fit for you? Click here.`,
  `Click on that Signaler.`,
  `Click “Subscribe” or “Buy”. Pay for the subscription if needed.`,
  `Click “Configure”.`,
  `Configure the Signal settings. These settings are optional.`,
  `Click “Save”.`,
  `Click “My bots”.`,
  `Click on the bot where you want to add the Signal.`,
  `Click “Configuration”.`,
  `Click “Baseconfig”.`,
  `Select the currencies you want to trade. Please review the Signaler's performance \n report to confirm if trading signals were sent for your quote currency, the selected \n currencies listed under "Coins and amounts," and the exchange used to ensure \n your bot will start trading.`,
  `Click “Strategy”.`,
  `Only switch the “Signals only” toggle if you only want to use Signals. Otherwise \n don’t switch it. If you do switch the toggle also fill in the “Number of targets to buy”.`,
  `Click “Save”.`,
];
const botSteps = [
  `Click in the navigation section in your dahsboard called “Trading bots”.`,
  `Select trading bot`,
  `Click “Add Bot”.`,
  `Choose the account and wallet you want to use.`,
  `Fill in your API Keys or switch the “Paper trading” toggle if neccessary.`,
  `Switch the toggle to enable your bot.`,
  `Click now`,
  `A new bot is created. Now you need to configure your bot (this is done on a third party server.`,
  `Click on “Configuration”.`,
  `Click on “Baseconfig”.`,
  `Click on “Basic settings” and fill in the fields.`,
  `Click on “Exchange” and fill in the fields.`,
  `Click on “Notifications” and fill in the fields. This tab is optional.`,
  `Click on “Buy settings” and fill in the fields.`,
  `Click on “Coins and amounts” and fill in the fields.`,
  `Click on “Strategy” and fill in the fields.`,
  `Click on “Trailing Stop- Buy” and fill in the fields. This tab is optional.`,
  `Click on “Sell settings” and fill in the fields.`,
  `Click on “Sell strategy “and fill in the fields.`,
  `Click on “ Stop-Loss” and fill in the fields. This tab is optional.`,
  `Click on “Trailing Stop-Loss” and fill in the fields. This tab is optional.`,
  `Click on “Auto close” and fill in the fields. This tab is optional.`,
  `Click on “Shorting settings” and fill in the fields. This tab is optional.`,
  `Click on “Dollar Cost Averaging” and fill in the fields. This tab is optional.`,
  `Click on “Save”.`,
];

const Getstart = ({ setActiveLink }) => {
  useEffect(() => {
    setActiveLink();
  }, []);
  return (
    <section>
      <Containerdark>
        <Holder>
          <div className="flex flex-col gap-4">
            <Title txt={"Get Started"} custom={"text-center"} />
          </div>
        </Holder>
      </Containerdark>
      <Containerlight>
        <Holder customClass={"lg:flex-row lg:justify-between"}>
          <div className="w-full flex flex-col gap-4">
            <Subtitle txt={"no time limit"} />
            <Title txt={"How to set up a trading bot"} />
            <Imagecontainer img={start1} imageWidth={"lg:w-[400px]"} />
          </div>
          <div className="w-full flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <h3 className="font-bold capitalize ">prerequisites</h3>
              <Small txt={"Before you begin check the following:"}></Small>
              <ul className="list-disc flex flex-col gap-1 text-slate-400 pl-3  font-thin">
                <li>You have quadx account</li>
                <li>You have active signal connected</li>
              </ul>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-bold capitalize ">Set up a trading bot</h3>
              <ol className="font-thin list-decimal pl-6 text-slate-400 flex flex-col gap-1">
                {botSteps.map((stp, index) => (
                  <li key={index}>{stp}</li>
                ))}
              </ol>
            </div>
          </div>
        </Holder>
      </Containerlight>
      <Containerdark>
        <Holder customClass={"lg:flex-row lg:justify-between"}>
          <div className="w-full flex flex-col gap-4">
            <Subtitle txt={"no time limit"} />
            <Title txt={"How to set up a Signal"} />
            <Imagecontainer img={start2} imageWidth={"lg:w-[400px]"} />
          </div>
          <div className="w-full flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <h3 className="font-bold capitalize ">prerequisites</h3>
              <Small
                txt={`This is only available on a third party workspace, Before you
                begin, check the following:`}
              />
              <ul className="list-disc flex flex-col gap-1 text-slate-400 pl-3  font-thin">
                <li>You are connected to a third party workspace</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold capitalize ">Set up a signal</h3>
              <ol className="font-thin list-decimal pl-6 break-words flex flex-col gap-1 text-slate-400">
                {signalSteps.map((stp, index) => (
                  <li key={index} className="text">
                    {stp}
                  </li>
                ))}
              </ol>
            </div>
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
              className="bg-white text-[#333] rounded-3xl py-2.5 px-6 capitalize shadow-xl w-[40%] md:w-[15%] text-xs mt-3 text-center"
            >
              start now
            </Link>
          </div>
        </div>
      </Containerlight>
      <Footer />
    </section>
  );
};

export default Getstart;

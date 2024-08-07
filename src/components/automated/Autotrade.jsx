import React from "react";
import { aside, autosub, ava, ideal } from "../../assets";
import Containerdark from "../general/Containerdark";
import Imagecontainer from "../general/Imagecontainer";
import Title from "../general/Title";
import Containerlight from "../general/Containerlight";
import Lineicon from "../general/Lineicon";
import { GiLightThornyTriskelion } from "react-icons/gi";
import { GrLineChart } from "react-icons/gr";
import { SiAmazonsimpleemailservice } from "react-icons/si";
import Innerflexrow from "../general/Innerflexrow";
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

const Autotrade = () => {
  return (
    <section>
      <Containerdark>
        <div className="flex flex-col lg:flex-row gap-6 py-10 lg:mx-32 ">
          <div className=" pl-16 w-full flex flex-col gap-6 justify-center place-items-center">
            <Title text={"Bots don't need sleep."} />

            <small className="text-slate-400 break-words text-xs font-thin">
              Cryptotrading is 24/7. So is your bot. Give yourself an edge, and
              while everyone else sleeps, you’ll never miss a beat.
            </small>
          </div>
          <Imagecontainer img={aside} />
        </div>
      </Containerdark>
      <Containerlight>
        <div className="flex flex-col gap-5 py-10 lg:mx-32">
          <div className="flex flex-col gap-2 w-full">
            <Lineicon iconData={iconData} />
            <hr className="border-[#333] border w-[95%] mx-auto" />
          </div>
          <Innerflexrow>
            <Imagecontainer img={autosub} imageWidth={"lg:w-[400px]"} />
            <div className=" pl-16 w-full flex flex-col gap-6 ">
              <h6
                className={`${styles.colors.primaryTextColor} underline uppercase font-thin`}
              >
                social trading
              </h6>
              <Title text={"Trade like a pro. Without being one."} />
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
        <div className="flex flex-col gap-6 py-10 lg:mx-32 lg:flex-row">
          <div className=" pl-16 w-full flex flex-col gap-6 ">
            <h6
              className={`${styles.colors.primaryTextColor} underline uppercase font-thin`}
            >
              Analyze Automatically
            </h6>
            <Title
              text={"Find your ideal trading opportunity. Automatically, 24/7."}
            />
            <small className="text-slate-400 break-words text-xs font-thin">
              Don’t let the fear of a market shift keep you up at night. With
              our A.I., your bot can automatically recognise trends and switch
              to a better strategy, so you can rest easy. Create or download
              strategies and let your bot watch the markets for you, and buy or
              sell based on your parameters.
            </small>
          </div>
          <Imagecontainer img={ideal} imageWidth={"lg:w-[400px]"} />
        </div>
      </Containerdark>
      <Containerlight>
        <div className="flex flex-col gap-6 py-10 lg:mx-32 justify-center items-center">
          <div className="flex flex-col gap-2 ">
            <h6
              className={`${styles.colors.primaryTextColor} underline uppercase font-thin`}
            >
              Cloud Hosted
            </h6>
            <Title text={"Available anytime. Anywhere."} />
            <small className="text-slate-400 break-words text-xs font-thin">
              Hosted in the cloud, QuadX is available 24/7. Protect and monitor
              your assets, <br /> even while you’re logged out. Access your
              account from any device, <br /> including web, phone, tablet and
              even your smartwatch.
            </small>
          </div>
          <figure className="">
            <img src={ava} alt="" className="w-[500px]" />
          </figure>
          {/* <Imagecontainer img={ava} imageWidth={"lg:w-[400px]"} /> */}
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

export default Autotrade;

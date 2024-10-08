import React from "react";
import { GiLightThornyTriskelion } from "react-icons/gi";
import { GrLineChart } from "react-icons/gr";
import { SiAmazonsimpleemailservice } from "react-icons/si";
import Lineicon from "../general/Lineicon";

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

const texts = [
  {
    id: 1,
    title: "QuadX is a safety-first\n company",
    info: `The reliability of our platform takes precedence over all else, so that we can be there for our customers when they need us the most. We relentlessly protect our customers’ security and privacy, and we only share with our counter parties what they need to fulfil our customers’
    financial needs, nothing more. We build safeguards and provide education so that our customers are in the best position to succeed. We have high quality timely customer support, and when things aren’t right, we fix them. We work closely with regulators and lawmakers to protect our customers and the broader financial system.
    We speak simply, plainly, and truthfully, even if it’s not what others want to hear. We hold ourselves and our colleagues to the highest ethical standards.`,
  },
  {
    id: 2,
    title: "At QuadX, the rich don’t get a better deal",
    info: `We founded QuadX in the wake of the financial crisis because we identified a gap - the more you had, the better deal you got.
    We aim to give everyone access to the financial system, regardless of their background or bank account balance. That’s why we have uniform interest rates, no account minimums, and a product that was designed from the ground up for small accounts.
    We would rather serve many small customers over a few large ones. We reflect the world around us, and we elevate and embrace all voices so everyone feels at home at QuadX.`,
  },
];

const Companyinfo = () => {
  return (
    <div className=" dark:bg-slate-900 dark:text-white text-xs font-medium px-5">
      <div className="flex flex-col gap-10 py-20 lg:py-44 lg:mx-32 ">
        <div className="flex flex-col gap-2 w-full">
          <Lineicon iconData={iconData} />
          <hr className="border-[#333] border w-[70%] mx-auto" />
        </div>
        <div className="flex flex-col gap-6 lg:flex-row lg:px-10">
          {texts.map((txt) => {
            return (
              <div key={txt.id} className="flex flex-col gap-4">
                <h3 className="text-2xl lg:text-4xl font-bold break-words">
                  {txt.title.split("\n").map((line, index) => (
                    <React.Fragment key={index}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </h3>
                <small className="text-slate-500 text-sm font-thin break-words w-[90%] ">
                  {txt.info}
                </small>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Companyinfo;

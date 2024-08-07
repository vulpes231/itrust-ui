import React from "react";
import Containerdark from "../components/general/Containerdark";
import { styles } from "../constants/styles";
import Title from "../components/general/Title";
import { MdCheck } from "react-icons/md";

const copies = [
  {
    id: 1,
    icon: <MdCheck className="text-green-500" />,
    text: "Choose a trader and connect your exchange",
  },
  {
    id: 2,
    icon: <MdCheck className="text-green-500" />,
    text: "Sit back and keep track in the Cryptohopper App",
  },
  {
    id: 2,
    icon: <MdCheck className="text-green-500" />,
    text: "Let other traders do the work for you",
  },
];

const Holder = ({ children }) => {
  return (
    <div className="flex flex-col gap-6 py-10 lg:mx-32 lg:flex-row">
      {children}
    </div>
  );
};

const Small = ({ text }) => {
  return (
    <small className="text-slate-400 break-words text-xs font-thin">
      {text}
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

const Copybot = () => {
  return (
    <section>
      <Containerdark>
        <Holder>
          <div className="flex flex-col gap-4">
            <Subtitle text={"Copy Bots"} />
            <Title text={"Copy top traders"} />
            <div className="flex flex-col gap-2">
              {copies.map((cp) => {
                return (
                  <span className="flex gap-1 items-center" key={cp.id}>
                    {cp.icon}
                    {cp}
                  </span>
                );
              })}
            </div>
          </div>
        </Holder>
      </Containerdark>
    </section>
  );
};

export default Copybot;

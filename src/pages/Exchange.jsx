import React from "react";
import Containerdark from "../components/general/Containerdark";
import Containerlight from "../components/general/Containerlight";
import Imagecontainer from "../components/general/Imagecontainer";

const Title = ({ txt }) => {
  return <h3 className="text-xl lg:text-3xl font-bold">{txt}</h3>;
};
const Small = ({ txt }) => {
  return <small className="font-thin text-xs text-slate-400">{txt}</small>;
};
const Subtitle = ({ txt }) => {
  return <h5 className="underline uppercase font-thin">{txt}</h5>;
};
const Holder = ({ children, customClass }) => {
  return (
    <div className={`flex flex-col py-10 lg:mx-32  ${customClass}`}>
      {children}
    </div>
  );
};

const Exchange = () => {
  return (
    <section>
      <Containerdark></Containerdark>
      <Containerlight></Containerlight>
      {/* <Imagecontainer /> */}
    </section>
  );
};

export default Exchange;

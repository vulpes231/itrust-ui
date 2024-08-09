import React from "react";

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

const Getstart = () => {
  return <div>Getstart</div>;
};

export default Getstart;

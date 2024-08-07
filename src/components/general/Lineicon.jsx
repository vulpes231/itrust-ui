import React from "react";

const Headericon = ({ icon, title, info }) => {
  return (
    <div className="flex items-center gap-3 capitalize">
      <span className="text-2xl">{icon}</span>
      <span className="flex flex-col gap-1">
        <h5>{title}</h5>
        <small className="text-slate-400">{info}</small>
      </span>
    </div>
  );
};

const Lineicon = ({ iconData }) => {
  const myIcons = iconData.map((ic) => {
    return (
      <Headericon key={ic.id} icon={ic.icon} title={ic.title} info={ic.info} />
    );
  });
  return (
    <div className="hidden lg:flex items-center justify-center w-full gap-48">
      {myIcons}
    </div>
  );
};

export default Lineicon;

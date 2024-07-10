import React from "react";

const Card = ({ name, icon, value, customBg }) => {
  return (
    <div className="flex items-center justify-between w-full bg-white dark:bg-slate-950 dark:text-slate-200 p-6 shadow rounded-md text-xs">
      <div className="flex flex-col gap-2">
        <h3 className="font-semibold">{value}</h3>
        <small className="capitalize">{name}</small>
      </div>
      <div className={`text-2xl ${customBg} p-2 rounded-md`}>{icon}</div>
    </div>
  );
};

export default Card;

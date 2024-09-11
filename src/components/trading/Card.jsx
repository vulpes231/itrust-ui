import React from "react";

const Card = ({ name, icon, value, customBg }) => {
  return (
    <div className="flex items-center justify-between w-full dark:bg-white bg-black  p-6 shadow rounded-md text-xs border border-slate-800 dark:border-none">
      <div className="flex flex-col gap-2">
        <h3 className="font-semibold">{value}</h3>
        <small className="capitalize">{name}</small>
      </div>
      <div className={`text-2xl ${customBg} p-2 rounded-md`}>{icon}</div>
    </div>
  );
};

export default Card;

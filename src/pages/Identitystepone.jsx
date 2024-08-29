import React, { useState } from "react";
import { verify } from "../assets";

const Identitystepone = ({ step }) => {
  return (
    <div className="w-full font-[Montserrat] h-screen flex items-center justify-center bg-black bg-opacity-40 absolute top-0 left-0">
      <div className="flex flex-col dark:bg-white bg-black border border-slate-700 dark:border-none w-full md:w-[500px] lg:-mt-20">
        <h3 className="capitalize font-bold p-4">upload document</h3>
        <figure>
          <img src={verify} alt="" className="w-full" />
        </figure>
        <p className="p-4">
          We need photos of both sides of your passport card, permanent resident
          card, or state ID in order to verify your identity.
        </p>
        <div className="flex items-center p-4">
          <input type="radio" />
          <span className="font-bold">ID/ Driver's License / Passport </span>
        </div>
        <button
          onClick={step}
          className="bg-purple-500 text-white capitalize py-2 m-4"
        >
          continue
        </button>
      </div>
    </div>
  );
};

export default Identitystepone;

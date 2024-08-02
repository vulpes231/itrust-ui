import React from "react";

import { FaTelegram, FaTwitter, FaFacebook } from "react-icons/fa";
import { bott, pay, whitelogo } from "../assets";

const footerLinks = [
  {
    id: 1,
    title: "why QuadX",
    sublinks: [
      "AI trading",
      "copybot",
      "DCABot",
      "automated trading",
      "exchanges",
    ],
  },
  {
    id: 2,
    title: "features",
    sublinks: ["pro tools", "trading futures", "get funded"],
  },
  {
    id: 3,
    title: "company",
    sublinks: ["about us", "plans", "blog", "FAQ"],
  },
];

const Footer = () => {
  const myFooterLinks = footerLinks.map((link, index) => {
    return (
      <div
        key={link.id}
        className={`flex flex-col gap-2  ${
          index === 1 ? `lg:border-r border-slate-600 mr-5 ` : `border-none`
        } `}
      >
        <h3 className="capitalize text-slate-700 font-normal text-sm">
          {link.title}
        </h3>
        <ul className="grid grid-cols-2 gap-3 capitalize">
          {link.sublinks.map((lnk, index) => {
            return <li key={index}>{lnk}</li>;
          })}
        </ul>
      </div>
    );
  });
  return (
    <div className="bg-[#020617] px-5 sm:px-20 py-10 relative  font-thin text-xs text-slate-400">
      <div className="lg:mx-32">
        <div className="grid lg:grid-cols-3 gap-4 border-b border-slate-600 pb-2">
          {myFooterLinks}
        </div>
        <div className="flex items-center">
          <div className="flex flex-col gap-4 lg:gap-8 pt-3">
            <p>
              QuadX provides trading bot software only. Any references to
              trading, exchange, transfer, or wallet services, etc. are
              references to services provided by third-party service providers.{" "}
              <br />
              QuadX.io is part of the QuadX ecosystem
            </p>
            <div className="flex flex-col lg:flex-row lg:justify-between gap-4">
              <div className="flex items-center gap-6">
                <img src={whitelogo} alt="" className="w-[50px]" />
                <small>&copy;2024</small>
                <div className="flex items-center">
                  <FaTelegram />
                  <FaFacebook />
                  <FaTwitter />
                </div>
                <img src={pay} alt="" className="w-[50px]" />
              </div>
              <div className="flex flex-col gap-2 capitalize mr-5">
                <h5 className="font-normal text-sm text-slate-700">
                  legal information
                </h5>
                <ul className="flex items-center gap-6">
                  <li>privacy notice</li>
                  <li>term of use</li>
                  <li>other legal documentation</li>
                </ul>
              </div>
            </div>
          </div>
          <figure>
            <img src={bott} alt="" className="w-[150px] lg:w-[100px]" />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Footer;

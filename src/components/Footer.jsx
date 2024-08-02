import React from "react";

import { FaTelegram, FaTwitter, FaFacebook } from "react-icons/fa";
import { pay, whitelogo } from "../assets";

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
        className={`flex flex-col gap-4  ${
          index === 1 ? `border-r border-slate-600 mr-5 ` : `border-none`
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
      <div className="mx-32">
        <div className="grid lg:grid-cols-3 border-b border-slate-600 pb-2">
          {myFooterLinks}
        </div>
        <div className="flex items-center">
          <div className="flex flex-col gap-4 pt-3">
            <p>
              QuadX provides trading bot software only. Any references to
              trading, exchange, transfer, or wallet services, etc. are
              references to services provided by third-party service providers.{" "}
              <br />
              QuadX.io is part of the QuadX ecosystem
            </p>
            <div className="flex flex-col lg:flex-row lg:justify-between">
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
              <div className="flex flex-col gap-2 capitalize">
                <h5>legal information</h5>
                <ul className="flex items-center gap-6">
                  <li>privacy notice</li>
                  <li>term of use</li>
                  <li>other legal documentation</li>
                </ul>
              </div>
            </div>
          </div>
          <figure>
            <img src="" alt="" />
          </figure>
        </div>
      </div>
      {/* <hr className="absolute bottom-[95px] w-full left-0 text-slate-700" /> */}
    </div>
  );
};

export default Footer;

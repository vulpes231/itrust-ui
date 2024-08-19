import React from "react";

import { FaTelegram, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import { bott, pay, whitelogo } from "../assets";
import { Link } from "react-router-dom";

const footerLinks = [
  {
    id: 1,
    title: "why QuadX",
    sublinks: [
      { name: "AI trading", path: "/ai" },
      { name: "copybot", path: "/copy" },
      { name: "DCABot", path: "/dca" },
      { name: "automated trading", path: "/autotrade" },
      { name: "exchanges", path: "" },
    ],
  },
  {
    id: 2,
    title: "features",
    sublinks: [
      { name: "pro tools", path: "/protool" },
      { name: "trading features", path: "/features" },
      { name: "get funded", path: "/getfunded" },
    ],
  },
  {
    id: 3,
    title: "company",
    sublinks: [
      { name: "about us", path: "/company" },
      { name: "plans", path: "/pricing" },
      { name: "blog", path: "" },
      { name: "FAQ", path: "" },
    ],
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
            return (
              <li key={index}>
                <Link to={lnk.path}>{lnk.name}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  });
  return (
    <div className="bg-[#020617] px-5 sm:px-5 py-10 relative  font-thin text-xs text-slate-400">
      <div className="lg:mx-16">
        <div className="grid lg:grid-cols-3 gap-4 border-b border-slate-600 pb-2">
          {myFooterLinks}
        </div>
        <div className="flex items-center w-full">
          <div className="flex flex-col gap-4 pt-3 w-full">
            <p>
              QuadX provides trading bot software only. Any references to
              trading, exchange, transfer, or wallet services, etc. are
              references to services provided by third-party service providers.{" "}
            </p>
            <p>QuadX.io is part of the QuadX ecosystem</p>
            <div className="flex flex-col lg:flex-row lg:justify-between gap-4">
              <div className="flex items-center gap-6">
                <img src={whitelogo} alt="" className="w-[80px]" />
                <small>&copy;2024</small>
                <div className="flex items-center gap-3 text-purple-500">
                  <Link
                    to={
                      "https://www.instagram.com/quadx.io?igsh=MWV0YzgybmIxMW9wZg%3D%3D&utm_source=qr"
                    }
                    target="_blank"
                  >
                    <FaInstagram />
                  </Link>
                  <Link
                    to={
                      "https://www.facebook.com/share/obio3jdxCKWw3KZ6/?mibextid=LQQJ4d"
                    }
                    target="_blank"
                  >
                    <FaFacebook />
                  </Link>
                  <Link
                    to={"https://x.com/quadx_io?s=21&t=qispMqnTf9oOp-aMUrPo7w"}
                    target="_blank"
                  >
                    <FaTwitter />
                  </Link>
                </div>
                <img src={pay} alt="" className="w-[80px]" />
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
            <img src={bott} alt="" className="w-[150px] lg:w-[130px]" />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Footer;

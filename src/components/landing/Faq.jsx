import React from "react";
import { IoIosArrowDown } from "react-icons/io";
const faqs = [
  { id: 1, title: "Does a crypto trading bot perform?", info: "" },
  { id: 2, title: "How do bots trade crypto?", info: "" },
  { id: 3, title: "Why should I use bots to trade crypto?", info: "" },
  {
    id: 4,
    title: "How much does it cost to use a trading bot on an exchange?",
    info: "",
  },
  { id: 5, title: "How much can you make with a crypto bot?", info: "" },
  {
    id: 6,
    title: "Does automated trading work better than buying and holding?",
    info: "",
  },
  { id: 7, title: "How do you set up a crypto bot?", info: "" },
  {
    id: 8,
    title: "How much does it cost to use a bot trading software?",
    info: "",
  },
  {
    id: 9,
    title: "Why can’t I get a paid subscription plan on 3Commas?",
    info: "",
  },
];

const Question = ({ title, info }) => {
  return (
    <div>
      <div className="w-full flex justify-between items-center py-3 border-b border-slate-500">
        <span>{title}</span>
        <IoIosArrowDown />
      </div>
      {/* <span></span> */}
    </div>
  );
};

const Faq = () => {
  const myFaqs = faqs.map((ft) => {
    return (
      <Question
        key={ft.id}
        title={ft.title}
        info={ft.info ? ft.info : "None"}
      />
    );
  });
  return (
    <div className="px-5 sm:px-20 py-20 flex flex-col-reverse gap-4 sm:flex-row sm:items-center pt-20 lg:pt-12 ">
      <div className="flex flex-col lg:flex-row gap-4 w-full text-[#333] dark:text-white lg:mx-32  ">
        <h5 className="capitalize text-xl sm:text-3xl font-bold text-center w-[10%] py-3">
          FAQ
        </h5>
        <div className="lg:w-[90%] lg:px-6 text-xs lg:text-sm w-full">
          {myFaqs}
        </div>
      </div>
    </div>
  );
};

export default Faq;

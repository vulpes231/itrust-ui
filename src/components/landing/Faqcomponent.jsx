import React from "react";
import { IoIosArrowDown } from "react-icons/io";

const Question = ({ title, info }) => {
  return (
    <div>
      <div className="w-full flex justify-between items-center py-3 border-b border-slate-500">
        <span>{title}</span>
        <IoIosArrowDown />
      </div>
    </div>
  );
};

const Faqcomponent = ({ faqs, faqTitle }) => {
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
    <div className="flex flex-col lg:flex-row gap-4 w-full">
      <h5 className="capitalize text-xl sm:text-3xl font-bold text-center py-3 lg:w-[15%]">
        {faqTitle}
      </h5>
      <div className="lg:px-6 text-xs lg:text-sm lg:w-[85%]">{myFaqs}</div>
    </div>
  );
};

export default Faqcomponent;

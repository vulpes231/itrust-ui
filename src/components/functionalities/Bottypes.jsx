import React from "react";
import { ai, copy, auto, dca, pro } from "../../assets";

import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

import { styles } from "../../constants/styles";
import Slide from "../landing/Slide";

const sliderData = [
  {
    id: 1,
    img: auto,
    title: "Automated Trading",
    info: "Bots outperform humans",
  },
  {
    id: 2,
    img: dca,
    title: "DCA",
    info: "Don’t worry about buying at the wrong moment",
  },
  {
    id: 3,
    img: copy,
    title: "Copybots",
    info: "Copy an experienced trader one-on-one",
  },
  {
    id: 4,
    img: ai,
    title: "AI Trading",
    info: "Let your bot learn and decide by itself",
  },
  {
    id: 5,
    img: pro,
    title: "Pro Tools",
    info: "Leverage market inefficiencies or liquidity",
  },
];

const Bottypes = () => {
  const mySlides = sliderData.map((slide) => {
    return (
      <Slide
        key={slide.id}
        img={slide.img}
        title={slide.title}
        info={slide.info}
      />
    );
  });
  return (
    <div className=" bg-[#000] text-white text-xs font-medium">
      <div className="overflow-auto flex flex-col gap-6 lg:mx-32 py-28">
        <h3 className="text-xl lg:text-3xl font-bold capitalize text-center ">
          other features
        </h3>
        <div>
          <div className="flex gap-1.5 items-cente ">{mySlides}</div>
          <div className="flex items-center justify-between mt-1 ">
            <button
              className={`${styles.colors.primaryBgColor} text-white p-2 shadow-lg rounded-lg font-bold text-2xl`}
            >
              <RiArrowLeftSLine />
            </button>
            <button
              className={`${styles.colors.primaryBgColor} text-white p-2 shadow-lg rounded-lg font-bold text-2xl`}
            >
              <RiArrowRightSLine />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bottypes;

import React from "react";
import { ai, copy, auto, dca, pro } from "../../assets";
import Slide from "./Slide";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { styles } from "../../constants/styles";

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

const Pageslider = () => {
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
    <div>
      <div className="flex gap-1.5 items-center">{mySlides}</div>
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
  );
};

export default Pageslider;

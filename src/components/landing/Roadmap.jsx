import React from "react";
import { sec, trade, data } from "../../assets";
const sliderData = [
  {
    id: 1,
    img: sec,
    title: "security",
    info: `QuadX only interacts with exchanges using API keys. We use Fast Connect and IP
            whitelisting to provide strong security`,
  },

  {
    id: 2,
    img: trade,
    title: "Automated Trading",
    info: `Our Premier World Class bots are proven
            performers that execute your trading strategy
            at scale. The market never sleeps, and neither
            do our bots.`,
  },
  {
    id: 3,
    img: data,
    title: "analytics",
    info: `QuadX’s dashboards show you exactly how
            your trades are performing, so you know when
            to optimize returns.`,
  },
];

const Slide = ({ img, title, info }) => {
  return (
    <div className="flex flex-col gap-4 text-xs p-6 w-full rounded-x ">
      <figure className="grid place-content-center">
        <img src={img} alt="" className="w-[42px]" />
      </figure>
      <span className="font-normal  text-sm capitalize">{title}</span>
      <span className="whitespace-wrap text-slate-500 font-thin text-xs">
        {info}
      </span>
    </div>
  );
};

const Roadmap = () => {
  const mySlide = sliderData.map((slide) => {
    return (
      <Slide
        img={slide.img}
        info={slide.info}
        title={slide.title}
        key={slide.id}
      />
    );
  });
  return <div className="grid lg:grid-cols-3 w-full gap-2">{mySlide}</div>;
};

export default Roadmap;

import React from "react";

const visions = [
  {
    id: 1,
    title: "a more human way to\n learn",
    info: `We’re redefining what it means to learn about finance—and that means education resources that are built for today.`,
  },
  {
    id: 2,
    title: "truly digestible\n financial news",
    info: `Investing news—made for today. QuadX is revolutionizing how we talk about the markets.
`,
  },
  {
    id: 3,
    title: "see how it all\n works",
    info: `We believe everyone has the right to know the cost of a trade—so we’re showing you how our business works.`,
  },
  {
    id: 4,
    title: "quality education on\n every trade",
    info: `See the stats and standards behind how we seek a quality execution on each order.`,
  },
];

const Vision = () => {
  return (
    <div className=" dark:bg-slate-900 dark:text-white text-xs font-medium px-5">
      <div className="flex flex-col  gap-20 py-10 lg:mx-32 ">
        <div className="flex flex-col gap-3 items-center justify-center">
          <h3 className="text-xl lg:text-4xl font-bold capitalize">
            Our vision
          </h3>
          <small className="text-slate-500 text-sm font-thin  lg:text-center">
            We believe the financial system should be built to work for
            everyone. That’s why we create products that let <br /> you start
            investing at your own pace, on your own terms.
          </small>
        </div>
        <div className="grid lg:grid-cols-4 gap-6 w-full">
          {visions.map((vis) => {
            return (
              <div className="flex flex-col gap-4 " key={vis.id}>
                <h3 className="capitalize text-xl lg:text-2xl font-bold">
                  {vis.title.split("\n").map((line, index) => (
                    <React.Fragment key={index}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </h3>
                <small className="text-slate-500 text-sm font-thin">
                  {vis.info}
                </small>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Vision;

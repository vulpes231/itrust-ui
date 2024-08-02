import React from "react";
import { MdArrowForward } from "react-icons/md";
import { Link } from "react-router-dom";
import { styles } from "../../constants/styles";
import { one, two, three, four, five } from "../../assets";
import { IoIosArrowForward } from "react-icons/io";

const posts = [
  {
    id: 1,
    img: one,
    detail: `Forex Trading Bot: Quick
Guide`,
  },
  {
    id: 2,
    img: two,
    detail: `Building a Crypto Trading
Bot — 2024 How to Guide`,
  },
  {
    id: 3,
    img: three,
    detail: `2024 Best Crypto
Arbitrage Bots &
Platforms for Trading
Bitcoin, Ethereum`,
  },
  {
    id: 4,
    img: four,
    detail: `Crypto Signals Ultimate
2024 Guide`,
  },
  {
    id: 5,
    img: five,
    detail: `The best stock trading
bots for automated
trading in 2024`,
  },
];

const Blogpost = ({ img, detail }) => {
  return (
    <div className="flex flex-col border h-[300px] rounded-lg cursor-pointer">
      <figure className="h-[50%]">
        <img
          src={img}
          alt=""
          className="w-full lg:w-[250px] rounded-tl-lg rounded-tr-lg"
        />
      </figure>
      <div className="h-[50%] flex items-center px-4">
        <h6>{detail}</h6>
      </div>
    </div>
  );
};

const Blog = () => {
  const myPosts = posts.map((ps) => {
    return <Blogpost key={ps.id} img={ps.img} detail={ps.detail} />;
  });
  return (
    <div className="bg lg:h-[600px] px-5 sm:px-20 py-10 flex gap-4 sm:flex-row sm:items-center  ">
      <div className="flex flex-col gap-4 w-full text-[#333] bg-white p-6 lg:mx-20 rounded-xl shadow-lg overflow-auto z-0">
        <div className="flex justify-between items-start">
          <div className="flex flex-col gap-4">
            <h5 className="capitalize text-xl sm:text-3xl font-medium">
              Follow the QuadX Blog
            </h5>
            <p className="font-thin text-xs text-slate-400">
              We constantly review our tools and popular trading strategies.
              Follow our blog to <br /> keep up-to-date with the latest news
            </p>
          </div>
          <Link
            className={`"font-thin flex items-center text-xs ${styles.colors.primaryTextColor}`}
          >
            Go to blog <MdArrowForward />{" "}
          </Link>
        </div>
        <div className="relative">
          <div className="grid grid-flow-col gap-4">{myPosts}</div>
          <span
            className={`w-8 h-8 ${styles.colors.primaryBgColor} text-white absolute top-[45%] -right-3 flex items-center justify-center`}
          >
            <IoIosArrowForward />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Blog;

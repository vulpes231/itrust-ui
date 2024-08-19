import React, { useState } from "react";
import Footer from "../components/Footer";
import { styles } from "../constants/styles";
import { useNavigate } from "react-router-dom";

const priceManual = [
  {
    id: 1,
    level: "free",
    price: "$0/month",
    info: "Good for just beginner",
    btn: "Buy now",
    features: [
      "Unlimited terminal",
      "$5000 Safe deposit margin",
      "3 manual smart trades",
    ],
  },
  {
    id: 2,
    level: "pro",
    price: "$37/month",
    info: "Professional users",
    btn: "Buy now",
    features: [
      "50 Active SmartTrades",
      "$25000 Safe deposit margin",
      "10 Running Signal Bots",
      "50 Running DCA Bots",
      "1000 Active DCA Deals",
    ],
  },
  {
    id: 3,
    level: "expert",
    price: "$99/month",
    info: "Expert",
    btn: "Buy now",
    features: [
      "Unlimited Active SmartTrades",
      "$50000 Safe deposit margin",
      "50 Running Signal Bots",
      "250 Running DCA Bots",
      "2500 Active DCA Deals",
    ],
  },
  {
    id: 4,
    level: "custom plan",
    price: "Extra limits",
    info: "Lump sum",
    btn: "Contact us",
    features: [
      `Upgrade beyond the Expert plan to meet all your trading requirements.`,
    ],
  },
];

const Pricing = () => {
  const navigate = useNavigate();
  const [activePrice, setActivePrice] = useState(1);

  const changeActivePrice = (price) => {
    setActivePrice(price.id);
  };

  const goToSignUp = (e) => {
    e.preventDefault();
    navigate("/signup");
  };
  return (
    <section>
      <div className="min-h-screen px-5 sm:px-40 py-20">
        <h3 className="dark:text-slate-950 text-white text-center mb-10 text-2xl lg:text-4xl font-bold">
          Choose a Plan
        </h3>
        <div className="bg-white rounded-xl p-6 flex flex-col gap-10 items-center justify-center text-black">
          <div className="grid lg:grid-cols-4 gap-3 w-full text-xs ">
            {priceManual.map((price) => {
              return (
                <div
                  key={price.id}
                  className={`flex flex-col gap-6 p-4 rounded-lg cursor-pointer ${
                    activePrice === price.id
                      ? `${styles.border.darkBorder}`
                      : `border-none`
                  }`}
                  onClick={() => changeActivePrice(price)}
                >
                  <div className="flex flex-col gap-2">
                    <h5 className="capitalize ">{price.level}</h5>
                    <h3 className="font-medium text-sm">{price.price}</h3>
                    <small className="text-slate-300">{price.info}</small>
                  </div>
                  <div>
                    <button
                      className={`px-6 py-2.5 rounded-3xl ${styles.border.darkBorder} ${styles.colors.primaryTextColor}`}
                      onClick={goToSignUp}
                    >
                      {price.btn}
                    </button>
                  </div>
                  <ul className="flex flex-col gap-4 text-xs font-normal text-slate-600 list-disc">
                    {price.features.map((ft, index) => {
                      return <li key={index}>{ft}</li>;
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
          <small className="font-extralight text-xs text-center ">
            To enhance your experience, we are testing a different selection of
            plans. This means you may be offered different plans compared to{" "}
            <br />
            other users. <br /> Thank you for being a part of our journey.
          </small>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Pricing;

import React, { useState } from "react";
import Trnx from "./Trnx";
import Trade from "./Trade";

const History = () => {
  const [active, setActive] = useState("transaction");

  return (
    <div className="w-full flex flex-col gap-6">
      <div className="flex items-center gap-2">
        <button
          onClick={() => setActive("transaction")}
          className={`${
            active === "transaction"
              ? `bg-[#805af5] text-white`
              : `bg-white text-[#805af5]`
          } w-[150px] py-2 rounded-md`}
        >
          Transaction
        </button>
        <button
          onClick={() => setActive("trade")}
          className={`${
            active === "trade"
              ? `bg-[#805af5] text-white`
              : `bg-white text-[#805af5]`
          } w-[150px] py-2 rounded-md`}
        >
          Trade
        </button>
      </div>
      {/* <Trade /> */}
      <div>{active === "transaction" ? <Trnx /> : <Trade />}</div>
    </div>
  );
};

export default History;

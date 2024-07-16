import React, { useState } from "react";
import Trnx from "./Trnx";
import Trade from "./Trade";

const History = () => {
  const [active, setActive] = useState("transaction");

  return (
    <div className="w-full py-4 flex flex-col gap-6">
      <div className="flex items-center gap-2">
        <button
          onClick={() => setActive("transaction")}
          className={`${
            active === "transaction"
              ? `bg-blue-500 text-white`
              : `bg-white text-blue-500`
          } w-[150px] py-2 rounded-md`}
        >
          Transaction
        </button>
        <button
          onClick={() => setActive("trade")}
          className={`${
            active === "trade"
              ? `bg-blue-500 text-white`
              : `bg-white text-blue-500`
          } w-[150px] py-2 rounded-md`}
        >
          Trade
        </button>
      </div>
      <div>{active === "transaction" ? <Trnx /> : <Trade />}</div>
    </div>
  );
};

export default History;

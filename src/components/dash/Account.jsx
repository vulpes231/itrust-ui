import React from "react";
import Box from "./Box";
import Balance from "./Balance";
import Coin from "./Coin";
import { btc, tether, eth } from "../../assets";

const Account = ({ username }) => {
  return (
    <div className="grid gap-4 mt-8 sm:grid-cols-2 lg:grid-cols-3">
      <Box customClass={"bg-slate-700 text-[#fff]"}>
        <h2 className="font-bold text-xl text-gradient">Welcome</h2>
        <h4 className="capitalize font-semibold">{username}</h4>
        <div className="flex gap-10 ">
          <Balance title={"overall balance"} value={"0.00"} />
          <Balance title={"trading balance"} value={"0.00"} />
        </div>
      </Box>
      <Box customClass="bg-white">
        <h2 className="font-bold text-xl">Assets</h2>

        <div className="flex gap-10 ">
          <span>
            <Coin img={btc} />
            <Balance title={"bitcoin"} value={"0.00"} />
          </span>
          <span>
            <Coin img={eth} />
            <Balance title={"ethereum"} value={"0.00"} />
          </span>
          <span>
            <Coin img={tether} />
            <Balance title={"tether"} value={"0.00"} />
          </span>
        </div>
      </Box>
      <Box customClass="bg-white"></Box>
    </div>
  );
};

export default Account;

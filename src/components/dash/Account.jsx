import React from "react";
import Box from "./Box";
import Balance from "./Balance";
// import Coin from "./Coin";
// import { btc, tether, eth } from "../../assets";

const Account = ({ username }) => {
  return (
    <div className="flex flex-wrap -m-3">
      <Box>
        <div className="bg-slate-800 rounded-md border border-slate-800 p-5 h-full">
          <div className="flex flex-col isolate relative h-full">
            <div className=" absolute end-0 top-0"></div>
            <div className="mb-auto">
              <h6 className="font-bold text-xl w-max bg-gradient-to-r from-blue-300 to-pink-500 text-transparent bg-clip-text">
                Welcome
              </h6>
              <div className="font-bold text-sm text-white mt-2 capitalize">
                Mr. {username}
              </div>
              <div></div>
            </div>
            <div className="flex gap-x-6 mt-4">
              <div className="">
                <div className="text-xs text-slate-300 mt-1 capitalize">
                  overall balance
                </div>
                <div className="text-base font-bold text-slate-100 mt-1">
                  $48,610
                </div>
              </div>
              <div className="">
                <div className="text-xs text-slate-300 mt-1 capitalize">
                  trading balance
                </div>
                <div className="text-base font-bold text-slate-100 mt-1">
                  $1987
                </div>
              </div>
            </div>
          </div>
        </div>
      </Box>
    </div>
  );
};

export default Account;

import React from "react";

const Swap = () => {
  return (
    <div className="flex gap-5 flex-col p-6">
      <h5 className="capitalize text-center">swap trading funds</h5>

      <div className="flex flex-col gap-4">
        <small className="font-thin text-center lg:px-20">
          {`swap traded funds to supported cryptocurrencies for instant withdrawals`}
        </small>
        <div className="w-full lg:px-24 text-xs flex flex-col gap-4">
          <div className="flex ">
            <div className="w-full">
              <label htmlFor="">Account</label>
              <select
                name=""
                className="bg-transparent border dark:border-slate-200 px-2 w-full p-2"
              >
                <option value="btc">Choose Account</option>
                <option value="tradingBalance">Trading Balance</option>
              </select>
            </div>
            <div className="w-full">
              <label htmlFor="">Coin</label>
              <select
                name=""
                className="bg-transparent border dark:border-slate-200 px-2 w-full p-2"
              >
                <option value="btc">Choose Wallet</option>
                <option value="btc">BTC</option>
                <option value="eth">ETH</option>
                <option value="usdt">USDT</option>
              </select>
            </div>
          </div>
          <div>
            <label htmlFor="">Amount</label>
            <div className="flex items-center">
              <input
                type="text"
                className="w-[85%] p-2 border"
                placeholder="0.00"
              />
              <button className="w-[15%] py-[9.2px] bg-gray-500 px-1 cursor-pointer">
                USD
              </button>
            </div>
          </div>
        </div>
        <div className="w-full lg:px-24">
          <button className="bg-blue-500 text-white py-2 capitalize w-full mt-4">
            swap
          </button>
        </div>
      </div>
    </div>
  );
};

export default Swap;

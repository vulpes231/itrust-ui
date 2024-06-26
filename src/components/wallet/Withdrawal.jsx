import React from "react";

const Withdrawal = () => {
  return (
    <div className="flex gap-5 flex-col p-6">
      <div className="flex justify-between items-center">
        <h5 className="capitalize">request withdrawal</h5>
        <select
          name=""
          className="bg-transparent border dark:border-slate-200 px-2 text-xs"
        >
          <option value="btc">Choose Wallet</option>
          <option value="btc">BTC</option>
          <option value="eth">ETH</option>
          <option value="usdt">USDT</option>
        </select>
      </div>

      <div className="flex flex-col gap-4">
        <small className="font-thin text-center lg:px-20">
          {`input address and request the amount you want to withdraw, ensure the submitted address is correct to avoid loss of funds.`}
        </small>
        <div className="w-full lg:px-24 text-xs flex flex-col gap-4">
          <div>
            <label htmlFor="">Address</label>
            <div className="flex items-center">
              <input
                type="text"
                className="w-full p-2 border"
                placeholder="3ybbMnshjgsdopds672839jhsdj"
              />
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
              <button className="text-white w-[15%] py-[9.2px] bg-gray-500 px-1 cursor-pointer">
                USD
              </button>
            </div>
          </div>
        </div>
        <div className="w-full lg:px-24">
          <button className="bg-blue-500 text-white py-2 capitalize w-full mt-4">
            request
          </button>
        </div>
      </div>
    </div>
  );
};

export default Withdrawal;
